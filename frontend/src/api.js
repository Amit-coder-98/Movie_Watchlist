import axios from "axios";

const API_BASE = "https://movie-watchlist-backend-zfzl.onrender.com";

export const getMovies = async () => axios.get(`${API_BASE}/api/movies`);
export const addMovie = async (movie) => axios.post(`${API_BASE}/api/movies`, movie);
export const updateMovie = async (id, movie) => axios.put(`${API_BASE}/api/movies/${id}`, movie);
export const deleteMovie = async (id) => axios.delete(`${API_BASE}/api/movies/${id}`)