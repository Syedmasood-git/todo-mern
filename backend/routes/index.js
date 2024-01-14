const router = require("express").Router();
const todoRouter  = require('./todoRouter')

router.use('/add',todoRouter)
router.use('/get',todoRouter)
router.use('/update',todoRouter)
router.use('/delete',todoRouter)

module.exports = router