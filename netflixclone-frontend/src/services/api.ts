import axios from "axios";

const API = axios.create({
  baseURL: "https://netflixclone-fokx.onrender.com/api",
});

// Function to get movies
export const getMovies = () => API.get("/movies");
