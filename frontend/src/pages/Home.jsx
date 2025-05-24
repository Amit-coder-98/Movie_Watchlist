// frontend/src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "../api";
import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
import FilterToggle from "../components/FilterToggle";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingMovie, setEditingMovie] = useState(null);

  const fetchMovies = async () => {
    const res = await axios.get("/");
    setMovies(res.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAdd = async (movie) => {
    await axios.post("/", movie);
    fetchMovies();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/${id}`);
    fetchMovies();
  };

  const handleToggle = async (id) => {
    await axios.patch(`/${id}/toggle`);
    fetchMovies();
  };

  const handleUpdate = async (id, updatedMovie) => {
    await axios.put(`/${id}`, updatedMovie);
    setEditingMovie(null);
    fetchMovies();
  };

  const filteredMovies = movies.filter((m) => {
    if (filter === "all") return true;
    return filter === "watched" ? m.watched : !m.watched;
  });

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">🎬 Movie Watchlist</h2>

      <MovieForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingMovie={editingMovie}
      />

      <FilterToggle filter={filter} setFilter={setFilter} />

      <div className="row justify-content-center">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onEdit={setEditingMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
