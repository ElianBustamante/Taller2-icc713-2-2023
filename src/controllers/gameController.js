import {
  getGameByName,
  getRandomGamesForConsole,
  getRandomGamesByGenre,
  getRandomGameByGenreAndConsole,
} from '../services/gameService.js';

import { sendResponse } from '../utils/controllerUtils.js';

/**
 * Finds a game by its name and sends the response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
const findGameByName = (req, res) => sendResponse(res, getGameByName(req.query.name));

/**
 * Recommends 2 random games for a given console abbreviation.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object with recommended games.
 */
const recommendRandomGamesForConsole = (req, res) => sendResponse(res, getRandomGamesForConsole(req.params.console_abreviation, 2));


/**
 * Recommends a random game based on the genre and console abbreviation provided in the request.
 * @param {Object} req - The request object.
 * @param {string} req.body.genre_name - The name of the genre.
 * @param {string} req.params.console_abreviation - The abbreviation of the console.
 * @param {Object} res - The response object.
 */
const recommendRandomGameByGenreAndConsole = (req, res) => {
  sendResponse(res, getRandomGameByGenreAndConsole(req.body.genre_name, req.params.console_abreviation));
};

/**
 * Recommends 3 random games of a given genre.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const recommendRandomGamesByGenre = (req, res) => {
  sendResponse(res, getRandomGamesByGenre(req.body.genre_name, 3));
};

export { findGameByName, recommendRandomGamesForConsole, recommendRandomGamesByGenre, recommendRandomGameByGenreAndConsole };