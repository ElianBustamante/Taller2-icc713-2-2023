// gameController.js
import {
  getGameByName,
  getRandomGamesForConsole,
  getRandomGamesByGenre,
  getRandomGameByGenreAndConsole,
} from '../services/gameService.js';

import { sendResponse } from '../utils/controllerUtils.js'; // Importamos sendResponse desde el directorio 'utils'

// Función para buscar un juego por nombre
const findGameByName = (req, res) => {
  const { name } = req.query;
  const game = getGameByName(name);
  sendResponse(res, game);
};

// Función para recomendar juegos aleatorios para una consola específica
const recommendRandomGamesForConsole = (req, res) => {
  const { consoleName } = req.params;
  const recommendedGames = getRandomGamesForConsole(consoleName, 3);
  sendResponse(res, recommendedGames);
};

// Función para obtener un juego aleatorio por género y consola
const randomGameByGenreAndConsole = (req, res) => {
  const { console_abreviation } = req.params;
  const { genre_name } = req.body;
  const gamesForConsole = getRandomGameByGenreAndConsole(genre_name, console_abreviation);
  sendResponse(res, gamesForConsole);
};

// Función para recomendar juegos aleatorios para un género específico
const recommendRandomGamesByGenre = (req, res) => {
  const { genre_name } = req.body;
  const recommendedGames = getRandomGamesByGenre(genre_name, 3);
  sendResponse(res, recommendedGames);
};

export { findGameByName, recommendRandomGamesForConsole, recommendRandomGamesByGenre, randomGameByGenreAndConsole };
