import React from 'react';
import FiltrosReservas from '../organisms/FiltrosReservas';
import TablaReservas from '../organisms/TablaReservas';
import ModalesReservas from '../organisms/ModalesReservas';

const ReservasTemplate = ({
  filters, onFilterChange, clientes, estados,
  reservas, onEdit, onDelete,
  showModal, onCloseModal, modalContent
}) => (
  <div>
    <FiltrosReservas
      filters={filters}
      onChange={onFilterChange}
      clientes={clientes}
      estados={estados}
    />
    <TablaReservas
      reservas={reservas}
      onEdit={onEdit}
      onDelete={onDelete}
    />
    <ModalesReservas show={showModal} onClose={onCloseModal}>
      {modalContent}
    </ModalesReservas>
  </div>
);

export default ReservasTemplate;