import React from 'react';
import InputReserva from '../atoms/InputReserva';
import SelectReserva from '../atoms/SelectReserva';

const FiltroReserva = ({ filters, onChange, clientes, estados }) => (
  <div className="flex gap-4 mb-4">
    <InputReserva
      label="Buscar por Cliente"
      name="cliente"
      value={filters.cliente}
      onChange={onChange}
    />
    <SelectReserva
      label="Estado"
      name="estado"
      value={filters.estado}
      onChange={onChange}
      options={estados.map(e => ({ value: e, label: e }))}
    />
    {/* Puedes agregar más filtros aquí */}
  </div>
);

export default FiltroReserva;