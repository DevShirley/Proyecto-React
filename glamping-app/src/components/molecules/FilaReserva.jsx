import React from 'react';
import BadgeEstado from '../atoms/BadgeEstado';
import ButtonReserva from '../atoms/ButtonReserva';

const FilaReserva = ({ reserva, onEdit, onDelete }) => (
  <tr>
    <td>{reserva.clienteNombre}</td>
    <td>{reserva.glampingNombre}</td>
    <td>{reserva.fechaInicio}</td>
    <td>{reserva.fechaFin}</td>
    <td><BadgeEstado estado={reserva.estado} /></td>
    <td>
      <ButtonReserva onClick={() => onEdit(reserva)}>Editar</ButtonReserva>
      <ButtonReserva onClick={() => onDelete(reserva.id)}>Eliminar</ButtonReserva>
    </td>
  </tr>
);

export default FilaReserva;