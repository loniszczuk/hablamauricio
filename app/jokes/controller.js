const express = require('express');
const router = express.Router();
const jokes = require('./jokes.json');

router.get('/', function(req, res) {
    res.status(200).json(jokes);
});

router.get('/:id', function(req, res) {
    const jokeId = req.params.id;
    const joke = jokes.find(j => j.id === jokeId);
    res.status(200).json(joke);
});

module.exports = router;
