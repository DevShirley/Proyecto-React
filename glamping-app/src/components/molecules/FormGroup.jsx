import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormGroup = ({ id, label, type = 'text', value, onChange }) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} value={value} onChange={onChange} required />
  </div>
);

export default FormGroup;
