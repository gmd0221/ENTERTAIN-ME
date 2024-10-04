import { get } from 'axios';

// Function to fetch popular movies from TMDb
const getPopularMovies = async () => {
  const response = await get('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: process.env.TMDB_API_KEY,
      language: 'en-US',
      page: 1
    }
  });
  return response.data;
};



export default { getPopularMovies };
