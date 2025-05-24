// src/components/MovieCard.jsx
import React, { useState } from "react";

const MovieCard = ({ movie, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState({
    title: movie.title,
    genre: movie.genre,
    year: movie.year,
  });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(movie._id, { ...movie, ...editedMovie });
    setIsEditing(false);
  };

  return (
    <div className="col-md-4 mb-3">
      <div className={`card ${movie.watched ? "border-success" : "border-primary"}`}>
        <div className="card-body">
          {isEditing ? (
            <form onSubmit={handleEditSubmit}>
              <input
                className="form-control mb-2"
                value={editedMovie.title}
                onChange={(e) => setEditedMovie({ ...editedMovie, title: e.target.value })}
              />
              <input
                className="form-control mb-2"
                value={editedMovie.genre}
                onChange={(e) => setEditedMovie({ ...editedMovie, genre: e.target.value })}
              />
              <input
                className="form-control mb-2"
                type="number"
                value={editedMovie.year}
                onChange={(e) => setEditedMovie({ ...editedMovie, year: e.target.value })}
              />
              <button className="btn btn-success btn-sm w-100 mb-2" type="submit">Save</button>
            </form>
          ) : (
            <>
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                Genre: {movie.genre}<br />
                Year: {movie.year}<br />
                Status: {movie.watched ? "Watched" : "To Watch"}
              </p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-warning btn-sm" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(movie._id)}>Delete</button>
                <button
                  className={`btn btn-${movie.watched ? "secondary" : "primary"} btn-sm`}
                  onClick={() => onToggle(movie._id, movie)}
                >
                  {movie.watched ? "Unwatch" : "Watch"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
