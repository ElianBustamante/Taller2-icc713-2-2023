import dotenv from 'dotenv';
dotenv.config();

import { app } from './configs/express.js';
import gameRoutes from './routes/gameRoutes.js';

const PORT = process.env.PORT || 3000; // Usa el puerto definido en .env o el puerto 3000 por defecto

// Agrega las rutas de juegos
app.use('/api', gameRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
