const { Router } = require('express');
const {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva,
  buscarReservas,
} = require('../controllers/reservas.controller');

const reservasRouter = Router();

/**
 * @swagger
 * /reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     responses:
 *       200:
 *         description: Lista de reservas
 */
reservasRouter.get('/', obtenerReservas);

/**
 * @swagger
 * /reservas/{id}:
 *   get:
 *     summary: Obtener una reserva específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Detalles de la reserva
 *       404:
 *         description: Reserva no encontrada
 */
reservasRouter.get('/:id', obtenerReservaPorId);

/**
 * @swagger
 * /reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *               tipoHabitacion:
 *                 type: string
 *               huespedes:
 *                 type: integer
 *               fechaInicio:
 *                 type: string
 *                 format: date-time
 *               fechaFin:
 *                 type: string
 *                 format: date-time
 *               idCliente:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
reservasRouter.post('/', crearReserva);

/**
 * @swagger
 * /reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *               tipoHabitacion:
 *                 type: string
 *               huespedes:
 *                 type: integer
 *               fechaInicio:
 *                 type: string
 *                 format: date-time
 *               fechaFin:
 *                 type: string
 *                 format: date-time
 *               idCliente:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
reservasRouter.put('/:id', actualizarReserva);

/**
 * @swagger
 * /reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
reservasRouter.delete('/:id', eliminarReserva);

/**
 * @swagger
 * /reservas/buscar:
 *   get:
 *     summary: Buscar reservas por criterios
 *     parameters:
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         description: Nombre del hotel
 *       - in: query
 *         name: tipoHabitacion
 *         schema:
 *           type: string
 *         description: Tipo de habitación
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *         description: Estado de la reserva
 *       - in: query
 *         name: huespedes
 *         schema:
 *           type: integer
 *         description: Número de huéspedes
 *       - in: query
 *         name: fechaInicio
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Fecha de inicio
 *       - in: query
 *         name: fechaFin
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Fecha de fin
 *     responses:
 *       200:
 *         description: Resultados de la búsqueda
 */
reservasRouter.get('/buscar', buscarReservas);

module.exports = reservasRouter;