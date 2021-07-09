// Libraries
import React from 'react';

// CSS
import '../../css/Input.css';

export default function InputBox({ label, type = 'text', placeholder, value, onChange, errors, maxLength }) {
  return (
    <div className='inputbox-container'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        maxLength={maxLength}
      />
      {errors &&
        errors.map((error) => {
          return <p key={error}>* {error} *</p>;
        })}
    </div>
  );
}
