const Song = require("../model/songSchema");

const allGenres = (req, res) => {
  Song.find().then((songs) => {

    const filteredData = new Map();

    for (const song of songs) {
      const genre = song.genre;
      const existingData = filteredData.get(genre) || {};
      existingData.songs = (existingData.songs || 0) + 1;
      filteredData.set(genre, existingData);
    }
    const data = Array.from(filteredData, ([genre, data]) => ({
      genre,
      songs: data.songs,
    }));
    
    res.status(200).json({
      status: 200,
      message: "Success.",
      result: data.length,
      data,
    })
  });
};

module.exports = { allGenres };
