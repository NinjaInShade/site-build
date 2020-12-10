// Libraries
import React from "react";

// CSS
import "../../css/InputBox.css";

export default function InputBox({ label, type = "text", placeholder, value, onChange, errors, maxLength, rounded = true }) {
  return (
    <div className="inputbox-container">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        maxLength={maxLength}
        style={rounded ? { borderRadius: "15px" } : {}}
      />
      {errors &&
        errors.map((error) => {
          return <p key={error}>* {error} *</p>;
        })}
    </div>
  );
}
