import React from 'react';

const InputReserva = ({ label, ...props }) => (
  <div className="mb-2">
    {label && <label className="block mb-1">{label}</label>}
    <input className="border rounded px-2 py-1 w-full" {...props} />
  </div>
);

export default InputReserva;