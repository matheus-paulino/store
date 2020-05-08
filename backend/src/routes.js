const express = require('express');
const routes = express.Router();

/*
*** Controllers
*/
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const sessionController = require('./controllers/sessionController');


routes
    // Users
    .get('/user', userController.index)
    .post('/user', userController.create)
    .put('/user/:id', userController.update)
    .delete('/user/:id', userController.delete)
    .post('/session', sessionController.create)
    // Products
    .get('/product', productController.index)
    .post('/product', productController.create)
    .put('/product/:id', productController.update)
    .delete('/product/:id', productController.delete)

module.exports = routes;