const { validationResult, matchedData } = require("express-validator");
const Song = require("../model/songSchema");

const addSong = (req, res) => {
  let result = validationResult(req);
  result = result.array();
  if (result[0]) {
    const { msg } = result?.find((err) => err?.type === "field") || null;
    return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message: msg,
    });
  }
  const body = matchedData(req);

  const newSong = new Song(body)

  newSong
    .save()
    .then((result) => res.status(201).json({
      status: 201,
      message: "Song added successfully.",
      data: result
    })).catch((err) => {
      const {keyValue:{title}} = err;
      return res.status(400).json({
            status: 400,
            error: "Bad Request",
            message: `This song title ('${title}') already exists.`,
          })
    });

};
const updateSong = (req, res) => {
  let _id = 0;
  if(req.query.id){
    const {query:{id}} = req
    _id = id
  }

  let result = validationResult(req);
  result = result.array();
  if (result[0]) {
    const { msg } = result?.find((err) => err?.type === "field") || null;
    return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message: msg,
    });
  }
  const body = matchedData(req);
  Song.findByIdAndUpdate( _id,body,{ new: true })
  .then(result => {res.status(200).json({
    status: 200,
    message: "Song update was successful.",
    data: result
  })
  }).catch(err => {
      return res.status(404).json({
            status: 404,
            error: "Not Found.",
            message: `The resource to be updated was not found.`,
          })
  })};

const deleteSong = (req, res) => {
  let _id = 0;
  if(req.query.id){
    const {query:{id}} = req
    _id = id
  }
  Song.findByIdAndDelete(_id).then((deletedSong) => {
    if (deletedSong) {
      res.status(200).json({
      status: 200,
      message: "Song deleted successfully.",
    })}else{
      return res.status(404).json({
        status: 404,
        error: "Not Found.",
        message: `The resource to be deleted was not found.`,
      })
    }
  }).catch((err) => {
      return res.status(404).json({
        status: 500,
        error: "Internal Server Error.",
        message: `Internal Server Error.`,
      })
    });

};

module.exports = { addSong, updateSong , deleteSong};
