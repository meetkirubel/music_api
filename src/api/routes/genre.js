const {Router} = require('express')
const { allGenres } = require("../controller/genre");



const router = Router()

router.get("/",allGenres)


module.exports = {genresRoute:router}
allGenres