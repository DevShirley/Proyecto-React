import React from 'react';
import ModalWrapper from '../atoms/ModalWrapper';

const ModalesReservas = ({ show, onClose, children }) => (
  show ? (
    <ModalWrapper onClose={onClose}>
      {children}
    </ModalWrapper>
  ) : null
);

export default ModalesReservas;