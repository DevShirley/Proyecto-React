import React from 'react';

const Input = ({ id, type = 'text', value, onChange, required = false }) => (
  <input id={id} type={type} name={id} value={value} onChange={onChange} required={required} className="border p-2 w-full" />
);

export default Input;

