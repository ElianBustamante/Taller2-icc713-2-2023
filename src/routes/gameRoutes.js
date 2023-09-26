// src/routes/gameRoutes.js
import express from 'express';

import { findGameByName, recommendRandomGamesForConsole, recommendRandomGamesByGenre, getRandomGameByGenreAndConsole } from '../controllers/gameController.js';


const router = express.Router();

// Ruta para buscar un juego por nombre
router.get('/game', findGameByName);

// Ruta para recomendar juegos aleatorios para una consola específica
router.get('/consoles/:consoleName/random_games', recommendRandomGamesForConsole);

// Ruta para recomendar juegos aleatorios para un género específico (POST)
router.post('/genres/random_games', recommendRandomGamesByGenre);

router.post('/consoles/:consoleAbreviation/genre/random_game', (req, res) => {
  const { consoleAbreviation } = req.params;
  const { genre_name } = req.body;
  const result = getRandomGameByGenreAndConsole(genre_name, consoleAbreviation);

  if (result.length === 0) {
    res.status(404).json({ error: "No games found for specified console and genre" });
  } else {
    res.status(200).json(result);
  }
});

export default router;
