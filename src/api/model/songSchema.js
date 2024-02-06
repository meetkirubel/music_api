const {mongoose, Schema } = require('mongoose');

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    unique: true
  },
  artist: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  album: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  genre: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  
},{ timestamps: true });

const Song = mongoose.model('Song', songSchema);
module.exports = Song ;