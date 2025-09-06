import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743"; 
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchMovies = async (type, page = 1) => {
  const res = await axios.get(`${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);
  return res.data;
};

export const fetchMovieDetail = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return res.data;
};

export const fetchMovieCredits = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return res.data;
};

export const searchMovies = async (query, page = 1) => {
  const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
  return res.data;
};

export const fetchSimilarMovies = async (movieId, page = 1) => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=${page}`);
  return res.data;
}; 

export { IMAGE_BASE_URL };
