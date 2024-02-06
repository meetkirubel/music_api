const Song = require("../model/songSchema");

const allArtists = (req, res) => {
  Song.find().then((songs) => {
    const filteredData = new Map();

    for (const song of songs) {
      const artist = song.artist;

      const existingData = filteredData.get(artist) || {};

      existingData.songs = (existingData.songs || 0) + 1;

      const album = song.album;
      existingData.albums = existingData.albums || new Set();
      existingData.albums.add(album);

      filteredData.set(artist, existingData);
    }
    const data = Array.from(filteredData, ([artist, data]) => ({
      artist,
      songs: data.songs,
      album: data.albums.size,
    }));
    
    res.status(200).json({
      status: 200,
      message: "Success.",
      result: data.length,
      data,
    })
  });
};

module.exports = { allArtists };
