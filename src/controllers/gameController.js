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
  const { genre_name, console_abbr } = req.params;
  const randomGame = getRandomGameByGenreAndConsole(genre_name, console_abbr);

  if (!randomGame) {
    return res.status(404).json({ error: 'No se encontraron juegos para el género y la consola especificados.' });
  }

  res.json(randomGame);
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
