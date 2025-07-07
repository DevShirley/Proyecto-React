class Reserva {
  constructor(id, clienteId, glampingId, fechaEntrada, fechaSalida, estado = 'pendiente') {
    this.id = id;
    this.clienteId = clienteId;
    this.glampingId = glampingId;
    this.fechaEntrada = fechaEntrada;
    this.fechaSalida = fechaSalida;
    this.estado = estado;
  }
}

export default Reserva;
