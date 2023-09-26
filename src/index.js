import { app, PORT } from './configs/express.js';
import gameRoutes from './routes/gameRoutes.js';

// Register the routes
app.use('/api', gameRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
