import React from 'react';

const TextareaGlamping = ({ id, value, onChange }) => {
  return (
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required
      rows={3}
      className="w-full p-2 border border-gray-300 rounded text-sm resize-none"
    />
  );
};

export default TextareaGlamping;
