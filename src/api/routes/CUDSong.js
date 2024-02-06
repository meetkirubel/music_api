const {Router} = require('express')
const { addSong, updateSong, deleteSong } = require('../controller/CUDSong')
const { checkSchema } = require('express-validator')
const { songValidationSchema } = require('../validators/schema')


const router = Router()

router.post("/",checkSchema(songValidationSchema),addSong)
router.put("/",checkSchema(songValidationSchema),updateSong)
router.delete("/",deleteSong)





module.exports = {CUDSongRoute:router}