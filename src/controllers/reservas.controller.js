const { v4: uuidv4 } = require('uuid');
const reservas = []; 
const hotelesDisponibles = require('../data/habitaciones-disponibles.json'); 

const crearReserva = (req, res) => {
  const { hotel, tipoHabitacion, huespedes, fechaInicio, fechaFin, idCliente } = req.body;

  if (!hotel || !tipoHabitacion || !huespedes || !fechaInicio || !fechaFin || !idCliente) {
    return res.status(400).send('Faltan datos para la reserva');
  }

  const hotelData = hotelesDisponibles[hotel];
  if (!hotelData || !hotelData.habitaciones[tipoHabitacion]) {
    return res.status(400).send('El hotel o tipo de habitación no existe');
  }

  const capacidad = hotelData.habitaciones[tipoHabitacion].capacidad;
  if (huespedes > capacidad) {
    return res.status(400).send('El número de huéspedes excede la capacidad de la habitación');
  }

  const reserva = {
    id: uuidv4(),
    hotel,
    tipoHabitacion,
    huespedes,
    fechaInicio,
    fechaFin,
    cliente: idCliente,
    estado: 'confirmada',
    monto: hotelData.habitaciones[tipoHabitacion].precio,
  };

  reservas.push(reserva);
  res.status(201).send('Reserva creada exitosamente');
};

const obtenerReservas = (req, res) => {
  res.status(200).json(reservas);
};

const obtenerReservaPorId = (req, res) => {
  const { id } = req.params;
  const reserva = reservas.find((r) => r.id === id);

  if (!reserva) {
    return res.status(404).send('Reserva no encontrada');
  }

  res.status(200).json(reserva);
};

const actualizarReserva = (req, res) => {
  const { id } = req.params;
  const { hotel, tipoHabitacion, huespedes, fechaInicio, fechaFin, idCliente, estado } = req.body;

  const reserva = reservas.find((r) => r.id === id);

  if (!reserva) {
    return res.status(404).send('Reserva no encontrada');
  }

  if (hotel) reserva.hotel = hotel;
  if (tipoHabitacion) reserva.tipoHabitacion = tipoHabitacion;
  if (huespedes) reserva.huespedes = huespedes;
  if (fechaInicio) reserva.fechaInicio = fechaInicio;
  if (fechaFin) reserva.fechaFin = fechaFin;
  if (idCliente) reserva.cliente = idCliente;
  if (estado) reserva.estado = estado;

  res.status(200).send('Reserva actualizada exitosamente');
};

const eliminarReserva = (req, res) => {
  const { id } = req.params;
  const index = reservas.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).send('Reserva no encontrada');
  }

  reservas.splice(index, 1);
  res.status(200).send('Reserva eliminada exitosamente');
};

const buscarReservas = (req, res) => {
  const { hotel, tipoHabitacion, estado, huespedes, fechaInicio, fechaFin } = req.query;

  let resultados = reservas;

  if (hotel) resultados = resultados.filter((r) => r.hotel === hotel);
  if (tipoHabitacion) resultados = resultados.filter((r) => r.tipoHabitacion === tipoHabitacion);
  if (estado) resultados = resultados.filter((r) => r.estado === estado);
  if (huespedes) resultados = resultados.filter((r) => r.huespedes == huespedes);
  if (fechaInicio && fechaFin) {
    resultados = resultados.filter(
      (r) =>
        new Date(r.fechaInicio) >= new Date(fechaInicio) &&
        new Date(r.fechaFin) <= new Date(fechaFin)
    );
  }

  res.status(200).json(resultados);
};

module.exports = {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva,
  buscarReservas,
};