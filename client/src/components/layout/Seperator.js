// Libraries
import React from "react";

// CSS
import "../../css/Seperator.css";

export default function Seperator() {
  return (
    <section className="seperator-section" id="demo">
      <div>
        <span className="iconify" data-inline="false" data-icon="ant-design:user-outlined"></span>
        <p>
          <span className="seperator-section-bold">154</span> Users
        </p>
      </div>
      <div>
        <span className="iconify" data-inline="false" data-icon="ant-design:download-outlined"></span>
        <p>
          <span className="seperator-section-bold">123</span> Websites affected
        </p>
      </div>
    </section>
  );
}
