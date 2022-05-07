const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const movie = require('./movietheaterService.js');

router.route('/')
    .post(movie.createMovietheater)
    .get(movie.readMovietheater)
    .put(movie.updateMovietheater)
    .delete(movie.deleteMovietheater);
    
router.route('/opentheater')
    .get(movie.readOpenmovietheater)

module.exports = router;