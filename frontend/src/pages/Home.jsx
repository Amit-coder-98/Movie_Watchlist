// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { getMovies, addMovie, deleteMovie, updateMovie } from "../api";
import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await getMovies();
    setMovies(data);
  };

  const handleAddMovie = async (movie) => {
    await addMovie(movie);
    fetchMovies();
  };

  const handleDeleteMovie = async (id) => {
    await deleteMovie(id);
    fetchMovies();
  };

  const handleToggleWatched = async (id, movie) => {
    await updateMovie(id, { ...movie, watched: !movie.watched });
    fetchMovies();
  };

  const handleEditMovie = async (id, updatedMovie) => {
    await updateMovie(id, updatedMovie);
    fetchMovies();
  };

  const filteredMovies =
    filter === "All"
      ? movies
      : filter === "To-Watch"
      ? movies.filter((m) => !m.watched)
      : movies.filter((m) => m.watched);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Movie Watchlist</h2>

      <MovieForm onAdd={handleAddMovie} />

      <div className="btn-group mb-4 w-100">
        {["All", "To-Watch", "Watched"].map((type) => (
          <button
            key={type}
            className={`btn btn-outline-primary ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="row justify-content-center">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onDelete={handleDeleteMovie}
            onToggle={handleToggleWatched}
            onEdit={handleEditMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
