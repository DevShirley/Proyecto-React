import React from 'react';

const InputGlamping = ({ id, value, onChange, type = 'text' }) => {
  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      required
      className="w-full p-2 border border-gray-300 rounded text-sm"
    />
  );
};

export default InputGlamping;
