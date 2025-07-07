import React from 'react';
import ButtonReserva from '../atoms/ButtonReserva';
import BadgeEstado from '../atoms/BadgeEstado';

const TablaReservas = ({ reservas, onEdit, onDelete }) => (
  <table className="min-w-full border mb-8">
    <thead>
      <tr>
        <th className="px-4 py-2 border">ID</th>
        <th className="px-4 py-2 border">Cliente</th>
        <th className="px-4 py-2 border">Glamping</th>
        <th className="px-4 py-2 border">Fecha inicio</th>
        <th className="px-4 py-2 border">Fecha fin</th>
        <th className="px-4 py-2 border">Total pagado</th>
        <th className="px-4 py-2 border">Estado</th>
        <th className="px-4 py-2 border">Acciones</th>
      </tr>
    </thead>
    <tbody>
      {reservas.length === 0 ? (
        <tr>
          <td colSpan={8} className="text-center py-4">No hay reservas</td>
        </tr>
      ) : (
        reservas.map(reserva => (
          <tr key={reserva.id}>
            <td className="border px-2 py-1">{reserva.id}</td>
            <td className="border px-2 py-1">{reserva.clienteNombre}</td>
            <td className="border px-2 py-1">{reserva.glampingNombre}</td>
            <td className="border px-2 py-1">{reserva.fechaInicio}</td>
            <td className="border px-2 py-1">{reserva.fechaFin}</td>
            <td className="border px-2 py-1">{reserva.totalPagado ? `$${Number(reserva.totalPagado).toLocaleString()}` : '-'}</td>
            <td className="border px-2 py-1">
              <BadgeEstado estado={reserva.estado} />
            </td>
            <td className="border px-2 py-1">
              <ButtonReserva onClick={() => onEdit(reserva)}>Editar</ButtonReserva>
              <ButtonReserva onClick={() => onDelete(reserva.id)}>Eliminar</ButtonReserva>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
);

export default TablaReservas;