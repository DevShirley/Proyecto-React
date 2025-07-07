import React from 'react';
import Button from '../atoms/Button';

const Modal = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Confirmar eliminación</h2>
        <p>¿Está seguro de que desea eliminar este cliente? Esta acción no se puede deshacer.</p>
        <div className="mt-6 flex gap-2 justify-end">
          <Button onClick={onConfirm} className="bg-red-500 text-white">Eliminar</Button>
          <Button onClick={onCancel} className="bg-gray-300">Cancelar</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;