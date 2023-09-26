// src/services/gameService.js
import videoGames from '../load-games.js';
import { getRandomGames, formatGames, getRandomInt } from '../utils/serviceUtils.js';

/**
 * Returns the video game with the given name, along with its video console and genres.
 * @param {string} name - The name of the video game to search for.
 * @returns {Object} - An object with a response property that contains either the video console and genres of the game, or a message indicating that the game was not found in the database.
 */
const getGameByName = (name) => {
  const game = Object.values(videoGames).flatMap(games => games).find(game => game.name.toLowerCase() === name.toLowerCase());
  return game ? { response: `${game.video_console} - [${game.genres.join(", ")}]` } : { response: `Juego no encontrado en nuestra base de datos` };
};

/**
 * Returns an array of random games for a given console.
 * @param {string} consoleName - The name of the console to get games for.
 * @param {number} count - The number of random games to return.
 * @returns {Object} - An object with a response array containing the specified number of random games for the given console.
 */
const getRandomGamesForConsole = (consoleName, count) => {
  const gamesForConsole = videoGames[consoleName] || [];
  const randomGames = getRandomGames(gamesForConsole, count);
  return { response: formatGames(randomGames) };
};

/**
 * Returns an array of random games that match the given genre.
 * @param {string} genreName - The name of the genre to match.
 * @param {number} count - The number of random games to return.
 * @returns {{response: string[]}} - An object with a response property containing an array of strings representing the random games.
 */
const getRandomGamesByGenre = (genreName, count) => {
  const matchingGames = Object.values(videoGames).flatMap(games => games).filter(game => game.genres.includes(genreName));
  const randomGames = getRandomGames(matchingGames, count);
  return { response: formatGames(randomGames) };
};

/**
 * Returns a random game that matches the specified genre and console.
 * @param {string} genre_name - The name of the genre to search for.
 * @param {string} console_abreviation - The abbreviation of the console to search for.
 * @returns {Object} - An object containing the response message.
 */
const getRandomGameByGenreAndConsole = (genre_name, console_abreviation) => {
  const gamesForConsole = videoGames[console_abreviation] || [];
  const matchingGames = gamesForConsole.filter(game => game.genres.includes(genre_name));
  return matchingGames.length > 0 ? { response: `${matchingGames[getRandomInt(matchingGames.length)].name} - ${matchingGames[0].video_console} - [${matchingGames[0].genres.join(", ")}]` } : { response: `No se encontraron juegos para el género y consola especificados` };
};

export { getGameByName, getRandomGamesForConsole, getRandomGamesByGenre, getRandomGameByGenreAndConsole };
