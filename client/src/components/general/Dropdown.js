// Libraries
import React, { useState } from "react";

// CSS
import "../../css/Dropdown.css";

// Options expects an array of objects.
// Object example:
// {heading: "Dark", stateValue: "0"}

export default function Dropdown({ label, heading, options, callback, AutoClose, className, style, errors }) {
  const [opened, setOpened] = useState(false);
  const [current, setCurrent] = useState({
    heading: "",
    index: -1,
  });

  function onClickHandler(item, index) {
    callback(item.stateValue);
    setCurrent({ heading: item.heading, index });
    if (AutoClose) {
      setOpened(false);
    }
  }

  return (
    <div className={`dropdown ${className ? className : ""}`} style={style ? style : {}}>
      <label className="dropdown-label">{label}</label>
      <div className="dropdown-container">
        <button
          className="dropdown-box"
          onClick={() => {
            setOpened(!opened);
          }}
        >
          <p>{current.index !== -1 ? current.heading : heading}</p>
          <div style={opened ? {} : { transform: "rotate(-90deg)" }}>
            <i className="fas fa-caret-down"></i>
          </div>
        </button>
        <ul className="dropdown-items" style={opened ? { maxHeight: `${options.length * 40}px` } : { maxHeight: "0px" }}>
          {options.map((item, index) => {
            return (
              <li
                onClick={() => {
                  onClickHandler(item, index);
                }}
                style={current.index === index ? { background: "#212b45" } : {}}
                key={index}
              >
                <p>{item.heading}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {errors &&
        errors.map((error) => {
          return (
            <p className="dropdown-error" key={error}>
              * {error} *
            </p>
          );
        })}
    </div>
  );
}
