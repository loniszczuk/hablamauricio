const routes = require('express').Router();

routes.use('/jokes', require('./jokes/controller'));

module.exports = routes;
