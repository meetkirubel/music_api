const {Router} = require('express')
const { allArtists } = require('../controller/artists')

const router = Router()

router.get("/",allArtists)


module.exports = {artistsRoute:router}