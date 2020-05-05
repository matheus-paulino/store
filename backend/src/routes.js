const express = require('express');
const routes = express.Router();

/*
*** Controllers
*/

const userController = require('./controllers/userController');

routes
    .get('/users', userController.index)
    .post('/users', userController.create)
    .put('/users/:id', userController.update)
    .delete('/users/:id', userController.delete)

module.exports = routes;