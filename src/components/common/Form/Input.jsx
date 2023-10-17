import React from 'react';
import { Label, Input } from '../../../pages/Register/StyledRegister';

const InputContainer = ({ label, type, name, value, onChange, error, onBlur, placeholder}) => {
  return (
    <div >
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputContainer;
