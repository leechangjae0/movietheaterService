const express = require('express');
const router = express.Router();
const movie = require('./movietheaterService.js');

router.route('/')
    .post(movie.createMovietheater)
    .get(movie.readMovietheater)
    .put(movie.updateMovietheater)
    .delete(movie.deleteMovietheater);


module.exports = router;