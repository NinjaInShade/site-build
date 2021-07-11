import React from 'react';
import '../../css/Input.css';

export default function InputBox({ label, type = 'text', placeholder, value, onChange, errors, maxLength, className }) {
  return (
    <div className={`inputbox-container ${className && className}`}>
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
