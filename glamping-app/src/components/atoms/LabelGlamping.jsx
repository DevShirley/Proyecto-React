import React from 'react';

const LabelGlamping = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block font-medium mb-1 text-sm text-gray-700">
      {children}
    </label>
  );
};

export default LabelGlamping;
