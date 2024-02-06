const gener = [
    "Pop",
    "Rock",
    "Hip hop",
    "Country",
    "Electronic",
    "R&B",
    "Jazz",
    "Classical",
    "Blues",
    "Latin",
    "Metal",
    "Folk",
    "Funk",
    "Reggae",
    "Soul",
    "World music",
    "Dance",
    "Soundtracks",
    "Opera",
    "Musical theatre",
    "Other"
  ]







//   const Song = require("../model/songSchema");

// const allArtists = (req, res) => {
    
//         Song.find().then(songs=>{
//           const filteredData = new Map();
        
//           for (const song of songs) {
//             const name = song.name;
          
//             const existingData = filteredData.get(name) || {};
  
//             existingData.songs = (existingData.songs || 0) + 1;

//             const album = song.album;
//             existingData.albums = existingData.albums || new Set();
//             existingData.albums.add(album);
          

//             filteredData.set(name, existingData);
//           }
//           const filteredArray = Array.from(filteredData, ([name, data]) => ({ name, songs: data.songs, album: data.albums.size }));
//           res.json({filteredArray})
//         })

//         }




        // const allArtists = (req, res) => {
  
        const people = [
          { name: "Alice", song: "hero", album: "go" },
          { name: "Bob", song: "one life", album: "gomo" },
          { name: "Bob", song: "good", album: "gomo" },
          { name: "Charlie", song: "sand", album: "go" },
          { name: "Charlie", song: "sand", album: "nam" },
          { name: "Charlie", song: "sand", album: "gal" },
          { name: "Charlie", song: "sand", album: "sou" },
          { name: "Bob", song: "happy", album: "baba" },
          { name: "Bob", song: "happy", album: "gomo" },
          { name: "Bob", song: "happy", album: "gomo" },
        ];
        [
        { "artist": "Alice", "title": "hero", "album": "go","genre": "Pop" },
        { "artist": "Bob", "title": "one life", "album": "gomo" ,"genre": "Pop"},
        { "artist": "Bob", "title": "good", "album": "gomo","genre": "Soul" },
        { "artist": "Charlie", "title": "sand", "album": "go" ,"genre": "Jazz"},
        { "artist": "Charlie", "title": "love", "album": "nam","genre": "Pop" },
        { "artist": "Charlie", "title": "motion", "album": "galba" ,"genre": "Jazz"},
        { "artist": "Charlie", "title": "hello", "album": "sou","genre": "Latin" },
        { "artist": "Bob", "title": "happy", "album": "baba","genre": "Pop" },
        { "artist": "Bob", "title": "you and me", "album": "gomo" ,"genre": "Pop"},
        { "artist": "Bob", "title": "feel", "album": "gomo","genre": "Jazz" }
      ]
        
//         const filteredData = new Map();
        
//         for (const person of people) {
//           const name = person.name;
        
//           const existingData = filteredData.get(name) || {};

//           existingData.songs = (existingData.songs || 0) + 1;
//           const album = person.album;
//           existingData.albums = existingData.albums || new Set();
//           existingData.albums.add(album);
        
//           // Store the updated data
//           filteredData.set(name, existingData);
//         }
//         const filteredArray = Array.from(filteredData, ([name, data]) => ({ name, songs: data.songs, album: data.albums.size }));
//         console.log(filteredArray);

//     res.json({msg:"hi"})
// }




  
// const people = [
//   { artist: "Alice", title: "hero", album: "go" , gener:"Pop"},
//   { artist: "Bob", title: "one life", album: "gomo" , gener:"Pop"},
//   { artist: "Bob", title: "good", album: "gomo" , gener:"Pop"},
//   { artist: "Charlie", title: "sand", album: "go" , gener:"Pop"},
//   { artist: "Charlie", title: "sand", album: "nam", gener:"Pop" },
//   { artist: "Charlie", title: "sand", album: "gal" , gener:"Pop"},
//   { artist: "Charlie", title: "sand", album: "sou", gener:"Pop" },
//   { artist: "Bob", title: "happy", album: "baba", gener:"Pop" },
//   { artist: "Bob", title: "happy", album: "gomo" , gener:"Pop"},
//   { artist: "Bob", title: "happy", album: "gomo" , gener:"Pop"},
// ]