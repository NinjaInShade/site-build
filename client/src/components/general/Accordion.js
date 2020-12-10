// Libraries
import React, { useState, useRef, useEffect } from "react";

// CSS
import "../../css/Accordion.css";

export default function Accordion({ title, priority, checked, children }) {
  const [active, setActive] = useState(false);
  const [checkbox, setCheckbox] = useState(checked);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : "0px";
  }, [contentRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="accordion-section">
      <div className="accordion-top">
        <span
          className="iconify accordion-priority"
          data-inline="false"
          data-icon="carbon:warning-square-filled"
          style={{ color: priority === "high" ? "#842029" : priority === "medium" ? "#CC9A06" : "#146C43" }}
        ></span>
        {/* Triangle priority icon
        <span
          className="iconify accordion-priority"
          data-inline="false"
          data-icon="clarity:warning-standard-solid"
          style={{ color: "#842029" }}
        ></span> */}
        <div className="accordion-checkbox-container">
          <input
            type="checkbox"
            className="accordion-checkbox"
            checked={checkbox}
            onChange={() => {
              setCheckbox(!checkbox);
            }}
          />
          <span className="iconify accordion-check" data-inline="false" data-icon="ant-design:check-outlined"></span>
        </div>
        <p className="accordion-title">{title}</p>
        <button onClick={toggleActive} className="accordion-btn">
          <svg
            width="20"
            height="24"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={active ? "bi bi-chevron-right rotate accordion-icon" : "bi bi-chevron-right accordion-icon"}
          >
            <path d="M0.600097 -2.28882e-05L13.8001 8.86597L0.600098 17.6L0.600097 -2.28882e-05Z" fill="#324065" />
          </svg>
        </button>
      </div>

      <div ref={contentRef} className="accordion-content">
        {children}
      </div>
    </div>
  );
}
