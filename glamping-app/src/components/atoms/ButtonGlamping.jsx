import React from 'react';

const ButtonGlamping = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-sm px-3 py-2 rounded font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonGlamping;
