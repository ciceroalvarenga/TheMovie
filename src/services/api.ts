import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR',
});

export { api }