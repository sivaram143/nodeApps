var todo = require('../models/todo');
var express = require('express');
var router = express.Router();

router.get('/todo/', function(req, res) {
  todo.get(res);
});

router.post('/todo/', function(req, res) {
  todo.create(req.body, res);
});

router.put('/todo/', function(req, res) {
  todo.update(req.body, res);
});

router.delete('/todo/:id/', function(req, res) {
  todo.delete(req.params.id, res);
});

module.exports = router;
