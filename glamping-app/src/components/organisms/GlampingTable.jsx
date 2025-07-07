import React from 'react';
import ButtonGlamping from '../atoms/ButtonGlamping';

const GlampingTable = ({ glampings, onEdit, onDelete }) => {
  return (
    <table className="w-full mt-6 text-sm border border-gray-300">
      <thead>
        <tr className="bg-[#182B49] text-white text-left">
          <th className="p-2">ID</th>
          <th className="p-2">Nombre</th>
          <th className="p-2">Capacidad</th>
          <th className="p-2">Precio/Noche</th>
          <th className="p-2">Disponible</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {glampings.map((g) => (
          <tr key={g.id} className="bg-white border-t text-center">
            <td className="p-2">{g.id}</td>
            <td className="p-2">{g.nombre}</td>
            <td className="p-2">{g.capacidad}</td>
            <td className="p-2">${g.precioPorNoche.toLocaleString()}</td>
            <td className="p-2">{g.disponible ? 'Sí' : 'No'}</td>
            <td className="p-2">
              <div className="flex justify-center gap-2">
                <ButtonGlamping
                  onClick={() => onEdit(g)}
                  className="bg-blue-600 text-white"
                >
                  Editar
                </ButtonGlamping>
                <ButtonGlamping
                  onClick={() => onDelete(g.id)}
                  className="bg-red-600 text-white"
                >
                  Eliminar
                </ButtonGlamping>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GlampingTable;
