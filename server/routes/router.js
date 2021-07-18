const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root route, demo purpose
 * @method GET /
 */
route.get('/', services.homeRoutes);

/** API paths */

// get all questions
route.get('/api/questions', controller.find);

// get single question
route.get('/api/questions/:id', controller.findOne);

// create new question
route.post('/api/questions', controller.create);

// update single quiz question
route.put('/api/questions/:id', controller.update);

// delete single quiz question
route.delete('/api/questions/:id', controller.delete);

module.exports = route