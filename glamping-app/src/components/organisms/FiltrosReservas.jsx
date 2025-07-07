import React from 'react';
import FiltroReserva from '../molecules/FiltroReserva';

const FiltrosReservas = ({ filters, onChange, clientes, estados }) => (
  <FiltroReserva
    filters={filters}
    onChange={onChange}
    clientes={clientes}
    estados={estados}
  />
);

export default FiltrosReservas;