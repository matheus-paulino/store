const express = require('express');
const routes = express.Router();

/*
*** Controllers
*/
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');


routes
    // Users
    .get('/user', userController.index)
    .post('/user', userController.create)
    .put('/user/:id', userController.update)
    .delete('/user/:id', userController.delete)
    // Products
    .get('/product', productController.index)
    .post('/product', productController.create)
    .put('/product/:id', productController.update)
    .delete('/product/:id', productController.delete)

module.exports = routes;