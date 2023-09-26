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

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomGameByGenreAndConsole = (genre_name, consoleAbreviation) => {
  const gamesForConsole = videoGames[consoleAbreviation];

  if (!gamesForConsole) {
    return [];
  }

  const matchingGames = gamesForConsole.filter(game => game.genres.includes(genre_name));

  if (matchingGames.length === 0) {
    return [];
  }

  const randomIndex = getRandomInt(matchingGames.length);
  const randomGame = matchingGames[randomIndex];

  const responseString = `${randomGame.name} - ${randomGame.video_console} - [${randomGame.genres.join(", ")}]`;

  return { response: responseString };
};

export { getGameByName, getRandomGamesForConsole, getRandomGameByGenreAndConsole };



