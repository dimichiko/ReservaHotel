const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Reserva de Habitaciones de Hotel',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar reservas de habitaciones de hotel',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambia el puerto si es necesario
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Ruta a los archivos donde están definidos los endpoints
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };