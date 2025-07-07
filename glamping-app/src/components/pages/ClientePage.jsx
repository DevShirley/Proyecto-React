import React, { useState, useEffect } from 'react';
import ClientForm from '../organisms/ClientForm';
import ClientTable from '../organisms/ClientTable';
import Modal from '../organisms/Modal';
// 👇 Importar el JSON
import data from '../../data/clientes.json';

const ClientePage = () => {
  const [clientes, setClientes] = useState([]);
  const [clienteActual, setClienteActual] = useState({ nombre: '', email: '', telefono: '', documento: '' });
  const [modalVisible, setModalVisible] = useState(false);
  const [idEliminar, setIdEliminar] = useState(null);

  // Cargar datos desde JSON
  useEffect(() => {
    setClientes(data);
  }, []);

  const handleChange = (e) => {
    setClienteActual({ ...clienteActual, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clienteActual.id) {
      setClientes(clientes.map(c => (c.id === clienteActual.id ? clienteActual : c)));
    } else {
      setClientes([...clientes, { ...clienteActual, id: Date.now() }]);
    }
    resetForm();
  };

  const handleEdit = (cliente) => {
    setClienteActual(cliente);
  };

  const handleDelete = (id) => {
    setIdEliminar(id);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    setClientes(clientes.filter(c => c.id !== idEliminar));
    setModalVisible(false);
    setIdEliminar(null);
  };

  const resetForm = () => {
    setClienteActual({ nombre: '', email: '', telefono: '', documento: '' });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Gestión de Clientes</h2>
      <ClientForm cliente={clienteActual} onChange={handleChange} onSubmit={handleSubmit} onCancel={resetForm} />
      <h3 className="text-xl font-semibold mt-10">Lista de Clientes</h3>
      <ClientTable clientes={clientes} onEdit={handleEdit} onDelete={handleDelete} />
      <Modal visible={modalVisible} onConfirm={confirmDelete} onCancel={() => setModalVisible(false)} />
    </div>
  );
};

export default ClientePage;
