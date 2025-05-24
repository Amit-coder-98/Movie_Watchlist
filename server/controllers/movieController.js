const Movie = require('../models/Movie');

// GET all movies
const getAllMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

// POST new movie
const addMovie = async (req, res) => {
  const movie = new Movie(req.body);
  const saved = await movie.save();
  res.json(saved);
};

// PUT update movie
const updateMovie = async (req, res) => {
  const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// DELETE movie
const deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// PATCH toggle watched
const toggleWatched = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  movie.watched = !movie.watched;
  await movie.save();
  res.json(movie);
};

module.exports = {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  toggleWatched,
};
