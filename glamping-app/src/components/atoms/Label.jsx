import React from 'react';

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block font-bold mb-1">{children}</label>
);

export default Label;