const express = require('express');
const dotenv = require('dotenv');
const { healtcheck } = require('./controllers/healtcheck.controller');
const reservasRouter = require('./routes/reservas.routes');
const { swaggerUi, swaggerDocs } = require('./swagger');

// Configuración de variables de entorno
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de health check
app.get('/', healtcheck);

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas para reservas
app.use('/reservas', reservasRouter);

// Puerto del servidor
const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
  console.log(`Documentación disponible en http://localhost:${port}/api-docs`);
});

