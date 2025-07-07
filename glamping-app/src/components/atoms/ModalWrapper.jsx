import React from 'react';
import '../../styles/reservas.css'; // ✅ corregido


const ModalWrapper = ({ children }) => (
  <div className="modal-backdrop">{children}</div>
);

export default ModalWrapper;
