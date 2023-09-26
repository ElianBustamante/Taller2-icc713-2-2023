import express from 'express';

import { findGameByName, recommendRandomGamesForConsole, recommendRandomGamesByGenre, recommendRandomGameByGenreAndConsole } from '../controllers/gameController.js';

const router = express.Router();

// Route to recommend 2 random games for a specific console
router.get('/consoles/:console_abreviation/random_games', recommendRandomGamesForConsole);

// Route to recommend 3 random games for a specific genre
router.post('/genres/random_games', recommendRandomGamesByGenre);

// Route to recommend a random game for a specific genre and console
router.post('/consoles/:console_abreviation/genre/random_game', recommendRandomGameByGenreAndConsole);

// Route to find a game by name
router.get('/game', findGameByName);

export default router;