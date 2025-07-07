import React from 'react';
import FormGroupGlamping from '../molecules/FormGroupGlamping';
import InputGlamping from '../atoms/InputGlamping';
import TextareaGlamping from '../atoms/TextareaGlamping';
import SelectGlamping from '../atoms/SelectGlamping';
import ButtonGlamping from '../atoms/ButtonGlamping';

const GlampingForm = ({ glamping, onChange, onSubmit, onCancel }) => {
  return (
    <form onSubmit={onSubmit} className="bg-white p-6 border rounded shadow-sm">
      <input type="hidden" value={glamping.id || ''} readOnly />

      <FormGroupGlamping
        id="nombre"
        label="Nombre"
        value={glamping.nombre}
        onChange={onChange}
        component={InputGlamping}
      />

      <FormGroupGlamping
        id="capacidad"
        label="Capacidad"
        type="number"
        value={glamping.capacidad}
        onChange={onChange}
        component={InputGlamping}
      />

      <FormGroupGlamping
        id="precioPorNoche"
        label="Precio por noche"
        type="number"
        value={glamping.precioPorNoche}
        onChange={onChange}
        component={InputGlamping}
      />

      <FormGroupGlamping
        id="caracteristicas"
        label="Características (separadas por coma)"
        value={glamping.caracteristicas}
        onChange={onChange}
        component={TextareaGlamping}
      />

      <FormGroupGlamping
        id="disponible"
        label="Disponible"
        value={glamping.disponible}
        onChange={onChange}
        component={SelectGlamping}
      />

      <div className="mt-4 flex gap-3">
        <ButtonGlamping type="submit" className="bg-green-600 text-white text-sm px-4 py-2 rounded">
          {glamping.id ? 'Actualizar' : 'Guardar'}
        </ButtonGlamping>

        {glamping.id && (
          <ButtonGlamping
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-sm px-4 py-2 rounded"
          >
            Cancelar
          </ButtonGlamping>
        )}
      </div>
    </form>
  );
};

export default GlampingForm;
