// Libraries
import React from "react";

// CSS
import "../../css/Footer.css";

// Images
import BuyMeACoffee from "../../resources/BuyMeACoffee.png";

export default function Footer() {
  function donateHandler() {
    console.log("Donated");
  }

  return (
    <footer>
      <div className="footer-container">
        <div>
          <p>© 2020 Leon Michalak. All Rights Reserved</p>
        </div>
        <div className="footer-socials">
          <a href="/" target="_blank" rel="noreferrer">
            <span className="iconify" data-inline="false" data-icon="ant-design:twitter-circle-filled"></span>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/NinjaInShade/" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <button
          onClick={() => {
            donateHandler();
          }}
        >
          <img src={BuyMeACoffee} alt="Buy me a coffee - donate to me - button" />
        </button>
      </div>
    </footer>
  );
}
