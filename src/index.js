import { app, PORT } from './configs/express.js';
import gameRoutes from './routes/gameRoutes.js';

// Agrega las rutas de juegos
app.use('/api', gameRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
