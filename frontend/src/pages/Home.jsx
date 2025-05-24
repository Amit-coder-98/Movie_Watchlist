import React, { useEffect, useState } from "react";
import { getMovies, addMovie, updateMovie } from "../api";
import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingMovie, setEditingMovie] = useState(null);

  const fetchMovies = async () => {
    const res = await getMovies();
    setMovies(res.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSubmit = async (movie) => {
    if (editingMovie) {
      await updateMovie(editingMovie._id, { ...editingMovie, ...movie });
      setEditingMovie(null);
    } else {
      await addMovie({ ...movie, watched: false });
    }
    fetchMovies();
  };

  const filteredMovies =
    filter === "all"
      ? movies
      : movies.filter((m) => m.watched === (filter === "watched"));

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🎬 Movie Watchlist</h2>

      <MovieForm onSubmit={handleSubmit} editingMovie={editingMovie} />

      <div className="mb-4 text-center">
        <button className="btn btn-outline-secondary me-2" onClick={() => setFilter("all")}>All</button>
        <button className="btn btn-outline-secondary me-2" onClick={() => setFilter("to-watch")}>To Watch</button>
        <button className="btn btn-outline-secondary" onClick={() => setFilter("watched")}>Watched</button>
      </div>

      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onToggle={fetchMovies}
          onEdit={setEditingMovie}
        />
      ))}
    </div>
  );
};

export default Home;