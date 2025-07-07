import React from 'react';

const BadgeEstado = ({ estado }) => {
  const color = estado === 'Confirmada' ? 'green' : estado === 'Cancelada' ? 'red' : 'yellow';
  return (
    <span className={`px-2 py-1 rounded bg-${color}-200 text-${color}-800`}>
      {estado}
    </span>
  );
};

export default BadgeEstado;