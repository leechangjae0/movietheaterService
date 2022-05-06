const express = require('express');
const router = express.Router();


const movieRoute = require('./movietheater/movietheater.js');
const userRoute = require('./user/user.js');

router.use('/movietheater', movieRoute);
router.use('/user', userRoute);

module.exports = router;