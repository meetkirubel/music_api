const {Router} = require('express')
const { allSongs, songDetails } = require('../controller/songs')

const router = Router()

router.get("/",allSongs)
router.get("/:id",songDetails)


module.exports = {songsRoute:router}