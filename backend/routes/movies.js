const express = require('express')
const router = express.Router();

router.get('/', require('../controllers/movies/list'))
router.post('/', require('../controllers/movies/create'))
module.exports = router
