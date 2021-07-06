// Libraries
import React from 'react';

// CSS
// import "../../css/Button.css";

export default function Button({ children, rounded, larger, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${rounded ? 'btn-rounded' : ''} ${larger ? 'btn-larger' : ''} ${className ? className : ''}`}
    >
      {children}
    </button>
  );
}
