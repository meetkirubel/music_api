const Song = require("../model/songSchema");
const _ = require("lodash");

const searchs = async (req, res) => {
  try {
    const query = req.query;

    if (_.isEmpty(query)) {
      // Fetch all songs with default sorting
      const songs = await Song.find().sort({ createdAt: -1 });
      return sendResponse(res, songs);
    }

    const { q, value } = query;

    switch (q) {
      case "artist":
        const artistSongs = await Song.find({ artist: value });
        return sendResponse(res, artistSongs);

      case "title":
        const titleSongs = await Song.find({ title: value });
        return sendResponse(res, titleSongs);

      case "genre":
        const genreSongs = await Song.find({ genre: value });
        return sendResponse(res, genreSongs);

      case "album":
        const albumSongs = await Song.find({ album: value });
        return sendResponse(res, albumSongs);

      default:
        return res.status(400).json({
          status: 400,
          error: "Bad Request",
          message: `Unknown query method('${q}').`,
        });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      error: "Internal Server Error",
      message: "The API is not working.",
    });
  }
};

// Helper function to send consistent responses
const sendResponse = (res, songs) => {
  if (!songs[0]) {
    res.status(404).json({
      status: 404,
      error: "Not Found",
      message: "Songs not found",
      result: songs.length,
    });
  } else {
    const filteredData = songs.map(({ _id, title, artist, album, genre }) => ({
      _id,
      title,
      artist,
      album,
      genre,
    }));
    res.status(200).json({
      status: 200,
      message: "Success",
      result: filteredData.length,
      data: filteredData,
    });
  }
};

module.exports = { searchs };