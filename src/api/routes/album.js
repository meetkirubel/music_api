const {Router} = require('express')
const { allAlbums } = require('../controller/album')

const router = Router()

router.get("/",allAlbums)


module.exports = {albumsRoute:router}