import reservasData from '../../data/reservas.json';

let reservas = [...reservasData];

export const obtenerReservas = () => reservas;

export const agregarReserva = (reserva) => {
  const nueva = { ...reserva, id: Date.now() };
  reservas.push(nueva);
  return nueva;
};

export const actualizarReserva = (reservaActualizada) => {
  reservas = reservas.map((r) => (r.id === reservaActualizada.id ? reservaActualizada : r));
};

export const eliminarReserva = (id) => {
  reservas = reservas.filter((r) => r.id !== id);
};

export const cambiarEstadoReserva = (id, nuevoEstado) => {
  reservas = reservas.map((r) =>
    r.id === id ? { ...r, estado: nuevoEstado } : r
  );
};

export const filtrarReservas = ({ clienteId, glampingId, estado }) => {
  return reservas.filter((r) => {
    const coincideCliente = clienteId ? r.clienteId === clienteId : true;
    const coincideGlamping = glampingId ? r.glampingId === glampingId : true;
    const coincideEstado = estado ? r.estado === estado : true;
    return coincideCliente && coincideGlamping && coincideEstado;
  });
};
