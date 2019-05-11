const express = require('express');
const routes = express.Router();
const customerController = require('../controllers/customerController');

routes.get('/' ,customerController.list);
routes.post('/add', customerController.save);
routes.get('/delete/:id', customerController.delete);

routes.get('/update/:id', customerController.edit);
routes.post('/update/:id', customerController.update);

module.exports = routes;