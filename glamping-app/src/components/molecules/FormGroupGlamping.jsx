import React from 'react';
import LabelGlamping from '../atoms/LabelGlamping';

const FormGroupGlamping = ({ id, label, value, onChange, type = 'text', component: Component }) => {
  return (
    <div className="mb-4">
      <LabelGlamping htmlFor={id}>{label}</LabelGlamping>
      <Component id={id} value={value} onChange={onChange} type={type} />
    </div>
  );
};

export default FormGroupGlamping;
