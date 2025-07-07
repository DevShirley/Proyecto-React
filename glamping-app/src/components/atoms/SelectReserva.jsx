import React from 'react';

const SelectReserva = ({ label, options, ...props }) => (
  <div className="mb-2">
    {label && <label className="block mb-1">{label}</label>}
    <select className="border rounded px-2 py-1 w-full" {...props}>
      <option value="">Seleccione...</option>
      {options.map(opt => (
        <option key={opt.value || opt.id} value={opt.value || opt.id}>
          {opt.label || opt.nombre}
        </option>
      ))}
    </select>
  </div>
);

export default SelectReserva;