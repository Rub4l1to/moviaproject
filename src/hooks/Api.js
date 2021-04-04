import axios from "axios";

const key = "13f55cdc863fb7b55567782f8e38ded4";
const url = `https://api.themoviedb.org/3/movie`;

// Todas - 1º API
export const getFilms = async () =>
  await axios.get(`${url}/popular?api_key=${key}`);
// Busqueda personaliza por id - 1º API
export const getFilm = async (id) =>
  await axios.get(`${url}/${id}?api_key=${key}`);
// Busqueda personaliza por id - 2º API
export const getOMDBFilm = async (id) =>
  await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d9206e9c`);
