import React from 'react';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';

const ClientForm = ({ cliente, onChange, onSubmit, onCancel }) => (
  <form onSubmit={onSubmit} className="bg-white p-4 shadow rounded">
    <input type="hidden" value={cliente.id || ''} readOnly />
<FormGroup id="nombre" label="Nombre completo" value={cliente.nombre} onChange={onChange} />
<FormGroup id="email" label="Correo electrónico" type="email" value={cliente.email} onChange={onChange} />
<FormGroup id="telefono" label="Teléfono" type="tel" value={cliente.telefono} onChange={onChange} />
<FormGroup id="documento" label="Documento" value={cliente.documento} onChange={onChange} />
    <div className="flex gap-2 mt-4">
      <Button type="submit" className="bg-green-500 text-white">{cliente.id ? 'Actualizar' : 'Guardar'}</Button>
      {cliente.id && (
        <Button onClick={onCancel} className="bg-gray-300">Cancelar</Button>
      )}
    </div>
  </form>
);

export default ClientForm;
