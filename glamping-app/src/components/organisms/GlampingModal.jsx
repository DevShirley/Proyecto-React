import React from 'react';
import ButtonGlamping from '../atoms/ButtonGlamping';

const GlampingModal = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Confirmar eliminación</h2>
        <p className="mb-6">
          ¿Está seguro de que desea eliminar este glamping? Esta acción no se puede deshacer.
        </p>
        <div className="flex justify-end gap-3">
          <ButtonGlamping
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 text-sm"
          >
            Eliminar
          </ButtonGlamping>
          <ButtonGlamping
            onClick={onCancel}
            className="bg-gray-300 px-4 py-2 text-sm"
          >
            Cancelar
          </ButtonGlamping>
        </div>
      </div>
    </div>
  );
};

export default GlampingModal;
