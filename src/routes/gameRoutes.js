// src/routes/gameRoutes.js
import express from 'express';
import { findGameByName, recommendRandomGamesForConsole, recommendRandomGamesByGenre } from '../controllers/gameController.js';

const router = express.Router();

// Ruta para buscar un juego por nombre
router.get('/game', findGameByName);

// Ruta para recomendar juegos aleatorios para una consola específica
router.get('/consoles/:consoleName/random_games', recommendRandomGamesForConsole);

// Ruta para recomendar juegos aleatorios para un género específico (POST)
router.post('/genres/random_games', recommendRandomGamesByGenre);

export default router;
