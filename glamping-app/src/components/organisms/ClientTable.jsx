import React from 'react';
import Button from '../atoms/Button';

const ClientTable = ({ clientes, onEdit, onDelete }) => (
  <table className="w-full mt-6 text-sm border border-gray-300">
    <thead>
      <tr className="bg-[#182B49] text-white">
        <th className="p-2">ID</th>
        <th className="p-2">Nombre</th>
        <th className="p-2">Email</th>
        <th className="p-2">Teléfono</th>
        <th className="p-2">Documento</th>
        <th className="p-2">Acciones</th>
      </tr>
    </thead>
    <tbody>
      {clientes.map((cliente) => (
        <tr key={cliente.id} className="bg-white border-t text-center">
          <td className="p-2">{cliente.id}</td>
          <td className="p-2">{cliente.nombre}</td>
          <td className="p-2">{cliente.email}</td>
          <td className="p-2">{cliente.telefono}</td>
          <td className="p-2">{cliente.documento}</td>
          <td className="p-2">
            <div className="flex justify-center gap-2">
              <Button onClick={() => onEdit(cliente)} className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                Editar
              </Button>
              <Button onClick={() => onDelete(cliente.id)} className="bg-red-600 text-white text-xs px-3 py-1 rounded">
                Eliminar
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ClientTable;

