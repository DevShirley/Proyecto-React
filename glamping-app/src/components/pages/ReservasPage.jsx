import React, { useState, useEffect } from 'react';
import ReservaForm from '../organisms/ReservaForm';
import TablaReservas from '../organisms/TablaReservas';
import CalendarioReservas from '../organisms/CalendarioReservas';
import clientesData from '../../data/clientes.json';
import glampingsData from '../../data/glampings.json';
import reservasData from '../../data/reservas.json';

// Si no tienes un archivo estados.json, puedes definirlo así:
const estadosData = ['Pendiente', 'Confirmada', 'Cancelada'];

const ReservasPage = () => {
  const [clients, setClients] = useState([]);
  const [glampings, setGlampings] = useState([]);
  const [estados, setEstados] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [filters, setFilters] = useState({ cliente: '', estado: '' });
  const [showModal, setShowModal] = useState(false);
  const [editingReserva, setEditingReserva] = useState(null);

  useEffect(() => {
    setClients(clientesData);
    setGlampings(glampingsData);
    setEstados(estadosData);
    // Mapear reservas para agregar nombres de cliente y glamping
    const reservasConNombres = reservasData.map(reserva => {
      const cliente = clientesData.find(c => c.id === reserva.clienteId);
      const glamping = glampingsData.find(g => g.id === reserva.glampingId);
      return {
        ...reserva,
        clienteNombre: cliente ? cliente.nombre : '',
        glampingNombre: glamping ? glamping.nombre : ''
      };
    });
    setReservas(reservasConNombres);
  }, []);

  const handleFilterChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredReservas = reservas.filter(r =>
    (!filters.cliente || r.clienteNombre?.toLowerCase().includes(filters.cliente.toLowerCase())) &&
    (!filters.estado || r.estado === filters.estado)
  );

  const handleSave = data => {
    const isUpdate = Boolean(data.id);
    setReservas(prev => {
      if (isUpdate) {
        return prev.map(r => (r.id === data.id ? data : r));
      } else {
        // Generar un id simple para la nueva reserva
        const newId = prev.length > 0 ? Math.max(...prev.map(r => r.id)) + 1 : 1;
        // Relacionar nombres para mostrar en la tabla
        const cliente = clients.find(c => c.id === data.clienteId);
        const glamping = glampings.find(g => g.id === data.glampingId);
        return [
          ...prev,
          {
            ...data,
            id: newId,
            clienteNombre: cliente ? cliente.nombre : '',
            glampingNombre: glamping ? glamping.nombre : ''
          }
        ];
      }
    });
    setShowModal(false);
    setEditingReserva(null);
  };

  const handleEdit = reserva => {
    setEditingReserva(reserva);
    setShowModal(true);
  };

  const handleDelete = id => {
    setReservas(prev => prev.filter(r => r.id !== id));
  };

  const handleAdd = () => {
    setEditingReserva(null);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto py-8">
      <button className="mb-4 bg-green-600 text-white px-4 py-2 rounded" onClick={handleAdd}>
        Nueva Reserva
      </button>
      <TablaReservas
        reservas={filteredReservas}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <CalendarioReservas reservas={filteredReservas} />
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <ReservaForm
              clients={clients}
              glampings={glampings}
              estados={estados}
              onSave={handleSave}
              initialData={editingReserva}
              onCancel={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservasPage;