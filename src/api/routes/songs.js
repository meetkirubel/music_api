const {Router} = require('express')
const cors = require('cors');
const { allSongs, songDetails } = require('../controller/songs')

const router = Router()
const corsOptions = {
origin: '*',  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};

router.get("/",cors(corsOptions),allSongs)
router.get("/:id",cors(corsOptions),songDetails)


module.exports = {songsRoute:router}
