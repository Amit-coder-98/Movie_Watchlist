import React, { useState } from "react";
import { updateMovie, deleteMovie } from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie, onToggle, onEdit }) => {
  const handleToggle = () => {
    const updatedMovie = { ...movie, watched: !movie.watched };
    updateMovie(movie._id, updatedMovie).then(() => onToggle());
  };

  const handleDelete = () => {
    deleteMovie(movie._id).then(() => onToggle());
  };

  return (
    <div className="card mb-3 mx-auto" style={{ maxWidth: "500px" }}>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{movie.genre} ({movie.year})</h6>
        <p className="card-text">Status: {movie.watched ? "Watched" : "To Watch"}</p>
        <button className="btn btn-success btn-sm me-2" onClick={handleToggle}>
          Toggle Watched
        </button>
        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(movie)}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieCard;