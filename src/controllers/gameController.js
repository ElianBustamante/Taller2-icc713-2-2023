// src/controllers/gameController.js
import { getGameByName, getRandomGamesForConsole, getRandomGamesByGenre, getRandomGameByGenreAndConsole } from '../services/gameService.js';

// Función para buscar un juego por nombre
const findGameByName = (req, res) => {
  const { name } = req.query;
  const game = getGameByName(name);

  if (!game) {
    return res.status(404).json({ error: 'Juego no encontrado.' });
  }

  res.json(game);
};

// Función para recomendar juegos aleatorios para una consola específica
const recommendRandomGamesForConsole = (req, res) => {
  const { consoleName } = req.params;
  const recommendedGames = getRandomGamesForConsole(consoleName, 3);

  if (recommendedGames.length === 0) {
    return res.status(404).json({ error: 'No se encontraron juegos para la consola especificada.' });
  }

  res.json(recommendedGames);
};


const randomGameByGenreAndConsole = (req, res) => {
  const { console_abreviation } = req.params;
  const { genre_name } = req.body;

  const result = getRandomGameByGenreAndConsole(genre_name, console_abreviation);

  if (result.length === 0) {
    res.status(404).json({ error: "No games found for specified console and genre" });
  } else {
    res.status(200).json(result);
  }
};


// Función para recomendar juegos aleatorios para un género específico
const recommendRandomGamesByGenre = (req, res) => {
  const { genreName } = req.body;
  const recommendedGames = getRandomGamesByGenre(genreName, 3);

  if (recommendedGames.length === 0) {
    return res.status(404).json({ error: 'No se encontraron juegos para el género especificado.' });
  }

  res.json(recommendedGames);
};

export { findGameByName, recommendRandomGamesForConsole, recommendRandomGamesByGenre, randomGameByGenreAndConsole };
