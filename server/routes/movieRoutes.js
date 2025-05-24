const express = require('express');
const router = express.Router();

const {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  toggleWatched
} = require('../controllers/movieController');

router.get('/', getAllMovies);
router.post('/', addMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);
router.patch('/:id/toggle', toggleWatched);

module.exports = router;
