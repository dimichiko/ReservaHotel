# Reserva de Habitaciones de Hotel

Este proyecto es una API para gestionar reservas de habitaciones de hotel. Está desarrollada con **Node.js** y **Express**, y utiliza **Swagger** para la documentación de los endpoints.

## Características

- Crear, consultar, actualizar y eliminar reservas.
- Buscar reservas por criterios específicos (hotel, tipo de habitación, estado, etc.).
- Documentación interactiva con Swagger.
- Gestión de habitaciones disponibles por hotel.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir la API.
- **Swagger**: Documentación interactiva de la API.
- **dotenv**: Gestión de variables de entorno.
- **uuid**: Generación de identificadores únicos.
- **moment**: Manejo de fechas (opcional).

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/dimichiko/ReservaHotel.git
   cd ReservaHotel

2. instala las dependencias:
   npm install

3. Crea un archivo .env en la raíz del proyecto con las siguientes variables:
   PORT=3000

4. Inicia el servidor:
   npm start

5. Accede a la documentación Swagger en:
   http://localhost:3000/api-docs



GitHub Copilot
Here’s a basic README.md template for your project:

Instala las dependencias:

npm install
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

PORT=3000
Inicia el servidor:

npm start
O en modo desarrollo:

Accede a la documentación Swagger en:
http://localhost:3000/api-docs


Endpoints Principales
Reservas
GET /reservas: Obtener todas las reservas.
POST /reservas: Crear una nueva reserva.
GET /reservas/:id: Obtener una reserva específica.
PUT /reservas/:id: Actualizar una reserva existente.
DELETE /reservas/:id: Eliminar una reserva.
GET /reservas/buscar: Buscar reservas por criterios.

Ejemplo de Cuerpo para Crear una Reserva:

{
  "hotel": "hotel1",
  "tipoHabitacion": "doble",
  "huespedes": 2,
  "fechaInicio": "2025-04-10",
  "fechaFin": "2025-04-15",
  "idCliente": "12345"
}

reserva-Hotel/
├── src/
│   ├── controllers/       # Lógica de los endpoints
│   ├── routes/            # Definición de rutas
│   ├── data/              # Archivos JSON con datos de ejemplo
│   ├── swagger/           # Configuración de Swagger
│   └── index.js           # Punto de entrada de la aplicación
├── .env                   # Variables de entorno
├── .gitignore             # Archivos ignorados por Git
├── package.json           # Dependencias y scripts
└── README.md              # Documentación del proyecto


Contribuciones
¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor abre un issue o envía un pull request.

Licencia
Este proyecto está bajo la licencia MIT.