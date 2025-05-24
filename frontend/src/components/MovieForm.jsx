import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieForm = ({ onSubmit, editingMovie }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setGenre(editingMovie.genre);
      setYear(editingMovie.year);
    }
  }, [editingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre || !year) return;
    onSubmit({ title, genre, year });
    setTitle("");
    setGenre("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editingMovie ? "Update Movie" : "Add Movie"}
      </button>
    </form>
  );
};

export default MovieForm;