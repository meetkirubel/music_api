const {Router} = require('express')
const { searchRoute } = require('./search')
const { CUDSongRoute } = require('./CUDSong')
const { songsRoute } = require('./songs')
const { artistsRoute } = require('./artists')
const { albumsRoute } = require('./album')
const { genresRoute } = require('./genre')


const router = Router()
router.use('/api/v1/songs',songsRoute)
router.use('/api/v1/search',searchRoute)
router.use('/api/v1/song',CUDSongRoute)
router.use('/api/v1/artists',artistsRoute)
router.use('/api/v1/albums',albumsRoute)
router.use('/api/v1/genres',genresRoute)

// router.use('/api/v1/',newSongRoute)




router.use((req, res ,next) => {
    return res.status(404).json({msg: 'page not found.',status: 404,success: false})
    next();
  });



module.exports = {router}