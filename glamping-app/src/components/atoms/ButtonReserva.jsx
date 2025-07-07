import React from 'react';

const ButtonReserva = ({ children, ...props }) => (
  <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2" {...props}>
    {children}
  </button>
);

export default ButtonReserva;