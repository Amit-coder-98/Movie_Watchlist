// src/components/MovieForm.jsx
import React, { useState } from "react";

const MovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre || !year) return;
    onAdd({ title, genre, year, watched: false });
    setTitle("");
    setGenre("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 row g-2">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <input
          type="number"
          className="form-control"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div className="col-md-2">
        <button type="submit" className="btn btn-success w-100">Add Movie</button>
      </div>
    </form>
  );
};

export default MovieForm;
