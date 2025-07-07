// components/organisms/GlampingDetailsModal.jsx
import React from 'react';

const GlampingDetailsModal = ({ glamping, visible, onClose }) => {
  if (!visible || !glamping) return null;

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{glamping.nombre}</h2>
          <button className="close-modal" onClick={onClose}>×</button>
        </div>
        <div>
          <p><strong>Capacidad:</strong> {glamping.capacidad} personas</p>
          <p><strong>Precio por noche:</strong> ${parseInt(glamping.precio).toLocaleString()}</p>
          <p><strong>Disponible:</strong> {glamping.disponible}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-secondary">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default GlampingDetailsModal;
