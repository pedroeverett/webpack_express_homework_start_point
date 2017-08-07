//since we don't have a database we'll use our front end models at the moment
var express = require('express');
var filmRouter = new express.Router();

var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

//get all films
filmRouter.get('/', function(req, res) {
  res.json(films)
});

//get film by id
filmRouter.get('/:id', function(req, res) {
  res.json({data: films[req.params.id]})
});

//add a film
filmRouter.post('/', function(req, res) { 
  films.push(req.body.film);
  res.json({data: films}); //this is just getting the data back to check
});

//update film
filmRouter.put('/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json({data: films}); //this is just getting the data back to check
});

//delete a film
filmRouter.delete('/:id', function(req, res) {
  films.splice([req.params.id], 1);
  res.json({data: films}); //this is just getting the data back to check
});

module.exports = filmRouter;