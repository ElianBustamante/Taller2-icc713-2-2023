// src/routes/gameRoutes.js
import express from 'express';

import { findGameByName, recommendRandomGamesForConsole, recommendRandomGamesByGenre, randomGameByGenreAndConsole } from '../controllers/gameController.js';


const router = express.Router();

// Ruta para buscar un juego por nombre
router.get('/game', findGameByName);

// Ruta para recomendar juegos aleatorios para una consola específica
router.get('/consoles/:consoleName/random_games', recommendRandomGamesForConsole);

// Ruta para recomendar juegos aleatorios para un género específico (POST)
router.post('/genres/random_games', recommendRandomGamesByGenre);


// Ruta para obtener un juego aleatorio por género y consola (POST)
router.post('/consoles/:console_abreviation/genre/random_game', randomGameByGenreAndConsole);


export default router;
