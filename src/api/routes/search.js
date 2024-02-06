const {Router} = require('express')
const { searchs } = require('../controller/search')

const router = Router()

router.get("/",searchs)


module.exports = {searchRoute:router}