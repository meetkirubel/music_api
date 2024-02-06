const Song = require("../model/songSchema");

const allSongs = (req, res) => {
  Song.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      if (!data[0]) {
        res.status(404).json({
          status: 404,
          error: "Not Found.",
          message: "Songs not found.",
          result: data.length
        });
      }
      const filterdData = [];
      data.map((song,index)=>{
        const { _id, title, artist, album, genre } = song;
        filterdData[index] = { _id, title, artist, album, genre };
      })
      res.status(200).json({
        status: 200,
        message: "Success.",
        result: data.length,
        data:filterdData,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        error: " Internal Server Error.",
        message: "The API is not working.",
      });
    });
};

const songDetails = (req, res) => {
  const id = req.params.id;

  Song.findById(id)
    .then((result) => {
      if (result) {
        const { _id, title, artist, album, genre } = result;
        const data = { _id, title, artist, album, genre };
        res.status(200).json({
          status: 200,
          message: "Success.",
          data,
        });
      }
    })
    .catch(() => {
      res.status(404).json({
        status: 404,
        error: "Not Found.",
        result: 0,
        message: "Song not found.",
      });
    });
};

module.exports = { allSongs, songDetails };
