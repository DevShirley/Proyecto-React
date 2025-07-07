import React, { useState, useEffect } from 'react';
import GlampingForm from '../organisms/GlampingForm';
import GlampingCardList from '../organisms/GlampingCardList';
import GlampingTable from '../organisms/GlampingTable';
import GlampingDetailsModal from '../organisms/GlampingDetailsModal';
import data from '../../data/glampings.json';

const GlampingPage = () => {
  const [glampings, setGlampings] = useState([]);
  const [glampingActual, setGlampingActual] = useState({
    nombre: '',
    capacidad: '',
    precio: '',
    disponible: 'Sí',
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [idEliminar, setIdEliminar] = useState(null);
  const [modalDetalles, setModalDetalles] = useState({ visible: false, glamping: null });

  useEffect(() => {
    setGlampings(data);
  }, []);

  const handleChange = (e) => {
  const { id, value } = e.target;

  // Forzar a número en campos específicos
  const parsedValue =
    id === "capacidad" || id === "precioPorNoche"
      ? value === "" ? "" : parseInt(value)
      : value;

  setGlampingActual({ ...glampingActual, [id]: parsedValue });
};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (glampingActual.id) {
      setGlampings(glampings.map((g) => (String(g.id) === String(glampingActual.id) ? glampingActual : g)));
    } else {
      setGlampings([...glampings, { ...glampingActual, id: Date.now() }]);
    }
    resetForm();
  };

  const handleEdit = (glamping) => {
    setGlampingActual(glamping);
  };

  const handleDelete = (id) => {
    setIdEliminar(id);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    if (idEliminar !== null) {
      setGlampings((prev) => prev.filter((g) => String(g.id) !== String(idEliminar)));
      setModalVisible(false);
      setIdEliminar(null);
    }
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setIdEliminar(null);
  };

  const handleView = (glamping) => {
    setModalDetalles({ visible: true, glamping });
  };

  const resetForm = () => {
    setGlampingActual({
      nombre: '',
      capacidad: '',
      precio: '',
      disponible: 'Sí',
    });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Gestión de Glampings</h2>

      <GlampingForm
        glamping={glampingActual}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={resetForm}
      />

      <h3 className="text-xl font-semibold mt-10 mb-4"></h3>
      <GlampingCardList
        glampings={glampings}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />

      <h3 className="text-xl font-semibold mt-10 mb-4">Vista en Tabla</h3>
      <GlampingTable
        glampings={glampings}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* ✅ Modal Confirmación Eliminación */}
      {modalVisible && (
        <div className="modal" style={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5>¿Eliminar Glamping?</h5>
              <button onClick={cancelDelete} className="close-modal">×</button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar este glamping? Esta acción no se puede deshacer.</p>
            </div>
            <div className="modal-footer">
              <button onClick={confirmDelete} className="btn btn-danger">Eliminar</button>
              <button onClick={cancelDelete} className="btn btn-secondary">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Modal Detalles */}
      <GlampingDetailsModal
        visible={modalDetalles.visible}
        glamping={modalDetalles.glamping}
        onClose={() => setModalDetalles({ visible: false, glamping: null })}
      />
    </div>
  );
};

export default GlampingPage;
