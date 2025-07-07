import React, { useState, useEffect } from 'react';
import FormGroupReserva from '../molecules/FormGroupReserva';
import InputReserva from '../atoms/InputReserva';
import SelectReserva from '../atoms/SelectReserva';
import ButtonReserva from '../atoms/ButtonReserva';

const ReservaForm = ({ clients, glampings, estados, onSave, initialData, onCancel }) => {
  const [form, setForm] = useState(initialData || {
    clienteId: '',
    glampingId: '',
    fechaInicio: '',
    fechaFin: '',
    estado: ''
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
    if (!form.id) setForm({ clienteId: '', glampingId: '', fechaInicio: '', fechaFin: '', estado: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <FormGroupReserva>
        <SelectReserva
          label="Cliente"
          name="clienteId"
          value={form.clienteId}
          onChange={handleChange}
          options={clients.map(c => ({ value: c.id, label: c.nombre }))}
        />
        <SelectReserva
          label="Glamping"
          name="glampingId"
          value={form.glampingId}
          onChange={handleChange}
          options={glampings.map(g => ({ value: g.id, label: g.nombre }))}
        />
        <InputReserva
          label="Fecha Inicio"
          name="fechaInicio"
          type="date"
          value={form.fechaInicio}
          onChange={handleChange}
        />
        <InputReserva
          label="Fecha Fin"
          name="fechaFin"
          type="date"
          value={form.fechaFin}
          onChange={handleChange}
        />
        <SelectReserva
          label="Estado"
          name="estado"
          value={form.estado}
          onChange={handleChange}
          options={estados.map(e => ({ value: e, label: e }))}
        />
      </FormGroupReserva>
      <ButtonReserva type="submit">Guardar</ButtonReserva>
      {onCancel && <ButtonReserva type="button" onClick={onCancel}>Cancelar</ButtonReserva>}
    </form>
  );
};

export default ReservaForm;