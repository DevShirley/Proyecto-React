import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => (
  <button type={type} onClick={onClick} className={`px-4 py-2 rounded ${className}`}>{children}</button>
);

export default Button;
