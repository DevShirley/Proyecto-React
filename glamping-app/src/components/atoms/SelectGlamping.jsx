import React from 'react';

const SelectGlamping = ({ id, value, onChange }) => {
  return (
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required
      className="w-full p-2 border border-gray-300 rounded text-sm"
    >
      <option value="true">Sí</option>
      <option value="false">No</option>
    </select>
  );
};

export default SelectGlamping;
