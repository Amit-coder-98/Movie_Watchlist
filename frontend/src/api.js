// src/api.js
const BASE_URL = "https://movie-watchlist-backend-zfzl.onrender.com";

export const getMovies = async () => {
  const res = await fetch(`${BASE_URL}/movies`);
  return res.json();
};

export const addMovie = async (movie) => {
  const res = await fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });
  return res.json();
};

export const deleteMovie = async (id) => {
  await fetch(`${BASE_URL}/movies/${id}`, { method: "DELETE" });
};

export const updateMovie = async (id, updatedMovie) => {
  const res = await fetch(`${BASE_URL}/movies/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedMovie),
  });
  return res.json();
};
