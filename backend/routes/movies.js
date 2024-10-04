import { Router } from 'express';
import { getPopularMovies } from '../services/movieService';
const router = Router();

router.get('/movies', async (req, res) => {
  try {
    const movies = await getPopularMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movies' });
  }
});

export default router;
