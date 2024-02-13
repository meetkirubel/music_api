const {Router} = require('express')
const { allSongs, songDetails } = require('../controller/songs')

const router = Router()
const corsOptions = {
origin: '*',  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};

router.get("/",allSongs)
router.get("/:id",songDetails)


module.exports = {songsRoute:router}
