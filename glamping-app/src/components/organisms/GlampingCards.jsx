import React from 'react';

const GlampingCard = ({ glamping, onEdit, onDelete, onView }) => {
  if (!glamping) return null;

  const { nombre, capacidad, precio, disponible, id } = glamping;

  return (
    <div className="glamping-card">
      <div className="glamping-card-header">
        <h3>{nombre}</h3>
      </div>

      <div className="glamping-card-body">
        <p><strong>Capacidad:</strong> {capacidad} personas</p>
        <p><strong>Precio por noche:</strong> ${!isNaN(parseFloat(glamping.precioPorNoche)) ? parseFloat(glamping.precioPorNoche).toLocaleString() : 'N/A'}</p>


        <span className={`glamping-badge ${disponible === 'Sí' ? 'disponible' : 'no-disponible'}`}>
          {disponible === 'Sí' ? 'Disponible' : 'No disponible'}
        </span>
      </div>

      <div className="glamping-card-footer">
        <button className="btn btn-info" onClick={() => onView(glamping)}>Ver detalles</button>
        <button className="btn btn-primary" onClick={() => onEdit(glamping)}>Editar</button>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default GlampingCard;
