// src/controllers/gameController.js
import videoGames from '../load-games.js';

// Función para buscar un juego por nombre
const getGameByName = (name) => {
  for (const category in videoGames) {
    const games = videoGames[category];
    const foundGame = games.find((game) =>
      game.name.toLowerCase() === name.toLowerCase()
    );
    if (foundGame) {
      return foundGame;
    }
  }
  return null;
};

// Función para recomendar juegos aleatorios para una consola específica
const getRandomGamesForConsole = (consoleName, count) => {
  const gamesForConsole = videoGames[consoleName];

  if (!gamesForConsole) {
    return [];
  }

  const randomGames = [];
  const availableGames = [...gamesForConsole];

  while (randomGames.length < count && availableGames.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableGames.length);
    const randomGame = availableGames.splice(randomIndex, 1)[0];
    randomGames.push(randomGame);
  }

  return randomGames;
};

// Función para recomendar juegos aleatorios para un género específico
const getRandomGamesByGenre = (genreName, count) => {
  const matchingGames = [];

  for (const category in videoGames) {
    const games = videoGames[category];

    for (const game of games) {
      if (game.genres.includes(genreName)) {
        matchingGames.push(game);
      }
    }
  }

  if (matchingGames.length === 0) {
    return [];
  }

  const randomGames = [];
  const availableGames = [...matchingGames];

  while (randomGames.length < count && availableGames.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableGames.length);
    const randomGame = availableGames.splice(randomIndex, 1)[0];
    randomGames.push(randomGame);
  }

  return randomGames;
};

export { getGameByName, getRandomGamesForConsole, getRandomGamesByGenre };



