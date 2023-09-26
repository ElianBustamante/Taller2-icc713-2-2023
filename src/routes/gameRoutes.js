// src/routes/gameRoutes.js
import express from 'express';
import { getGameByName, getRandomGamesForConsole, getRandomGamesByGenre } from '../controllers/gameController.js'; // Añade la extensión .js

const router = express.Router();

// Ruta para buscar un juego por nombre
router.get('/game', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Debes proporcionar un nombre de juego.' });
  }

  const game = getGameByName(name);

  if (!game) {
    return res.status(404).json({ error: 'Juego no encontrado.' });
  }

  res.json(game);
});

//ruta para recomendar juegos aleatorios para una consola
router.get('/consoles/:consoleName/random_games', (req, res) => {
  const { consoleName } = req.params;
  const recommendedGames = getRandomGamesForConsole(consoleName, 2);

  if (recommendedGames.length === 0) {
    return res.status(404).json({ error: 'Consola no encontrada o sin juegos.' });
  }

  const response = recommendedGames.map((game) => {
    const genres = game.genres.join(', '); // Si tiene más de 1 género, los unimos con comas
    return `${game.name} - ${game.video_console} - ${genres}`;
  });

  res.json(response);
});

//ruta para recomendar juegos aleatorios por género (POST)
router.post('/genres/random_games', (req, res) => {
  const { genre_name } = req.body;
  const recommendedGames = getRandomGamesByGenre(genre_name, 3);

  if (recommendedGames.length === 0) {
    return res.status(404).json([]);
  }

  const response = recommendedGames.map((game) => {
    const genres = game.genres.join(', '); // Si tiene más de 1 género, los unimos con comas
    return `${game.name} - ${game.video_console} - ${genres}`;
  });

  res.json(response);
});

export default router;
