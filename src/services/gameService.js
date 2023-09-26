// src/services/gameService.js
import videoGames from '../load-games.js';

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
 * Returns an object with a response array containing a specified number of random games for a given console.
 * @param {string} consoleName - The name of the console to get games for.
 * @param {number} count - The number of random games to return.
 * @returns {Object} - An object with a response array containing the specified number of random games for the given console.
 */
const getRandomGamesForConsole = (consoleName, count) => {
  const gamesForConsole = videoGames[consoleName] || [];
  const randomGames = gamesForConsole.sort(() => Math.random() - 0.5).slice(0, count);
  return { response: randomGames.map(game => `${game.name} - ${game.video_console} - [${game.genres.join(", ")}]`) };
};

/**
 * Returns an object with a response property containing an array of random games that match the given genre.
 * @param {string} genreName - The name of the genre to match.
 * @param {number} count - The number of random games to return.
 * @returns {{response: string[]}} - An object with a response property containing an array of strings representing the random games.
 */
const getRandomGamesByGenre = (genreName, count) => {
  const matchingGames = Object.values(videoGames).flatMap(games => games).filter(game => game.genres.includes(genreName));
  const randomGames = matchingGames.sort(() => Math.random() - 0.5).slice(0, count);
  return { response: randomGames.map(game => `${game.name} - ${game.video_console} - [${game.genres.join(", ")}]`) };
};

const getRandomGameByGenreAndConsole = (genre_name, console_abreviation) => {
  const gamesForConsole = videoGames[console_abreviation] || [];
  const matchingGames = gamesForConsole.filter(game => game.genres.includes(genre_name));
  return matchingGames.length > 0 ? { response: `${matchingGames[getRandomInt(matchingGames.length)].name} - ${matchingGames[0].video_console} - [${matchingGames[0].genres.join(", ")}]` } : { response: `No se encontraron juegos para el género y consola especificados` };
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export { getGameByName, getRandomGamesForConsole, getRandomGamesByGenre, getRandomGameByGenreAndConsole };
