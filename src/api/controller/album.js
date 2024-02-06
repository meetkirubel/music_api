// const Song = require("../model/songSchema");

//  const allAlbums = (req, res) => {
//    Song.find().then((songs) => {
//     const filteredData = new Map();

//     for (const song of songs) {
//       const album = song.album;
//       const artist = song.artist;
      
//       const existingData = filteredData.get(album) || {};
//       existingData.songs = (existingData.songs || 0) + 1;
//       existingData.artist = artist;
//       filteredData.set(album, existingData);
//     }


//     const data = Array.from(filteredData, ([album, data]) => ({
//       album,
//       songs: data.songs,
//       artist : data.artist
//     }));
    
//     res.status(200).json({
//       status: 200,
//       message: "Success.",
//       result: data.length,
//       data,
//     })
//   }); 
// };




// module.exports = { allAlbums };




// const Song = require("../model/songSchema");

// const allAlbums = (req, res) => {
//   Song.find().then((songs) => {
//     const filteredData = new Map();

//     for (const song of songs) {
//       const album = song.album;
//       const artist = song.artist;

//       // Check if the album already exists in the Map
//       if (filteredData.has(album)) {
//         // If it exists, increment the songs count and add the artist to an array
//         const existingData = filteredData.get(album);
//         existingData.songs++;
//         existingData.artists.push(artist); // Add artist to the array
//       } else {
//         // If it's a new album, create an entry with songs count and artists array
//         filteredData.set(album, {
//           songs: 1,
//           artists: [artist], // Initialize the artists array
//         });
//       }
//     }

//     const data = Array.from(filteredData, ([album, data]) => ({
//       album,
//       songs: data.songs,
//       artists: data.artists.join(", "), // Join artists with commas
//     }));

//     res.status(200).json({
//       status: 200,
//       message: "Success.",
//       result: data.length,
//       data,
//     });
//   });
// };

// module.exports = { allAlbums };







const Song = require("../model/songSchema");

const allAlbums = (req, res) => {
  Song.find().then((songs) => {
    const artistAlbums = {}; // Object to store unique artists and their albums

    for (const song of songs) {
      const album = song.album;
      const artist = song.artist;

      // Use an object as a Set-like data structure for performance and flexibility:
      artistAlbums[album] = artistAlbums[album] || []; // Initialize for new albums

      const existingArtist = artistAlbums[album].find(a => a.artists === artist);
      if (existingArtist) {
        existingArtist.songs++;
      } else {
        artistAlbums[album].push({ album, songs: 1, artists: artist });
      }
    }

    // Flatten the output:
    const data = [].concat(...Object.values(artistAlbums)); // Combine entries into a single array

    res.status(200).json({
      status: 200,
      message: "Success.",
      result: data.length,
      data,
    });
  });
};


module.exports = { allAlbums };