// Libraries
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../../css/Navbar.css";

// Components
import Button from "../general/Button";

// Images
import BrandLogo from "../../resources/BrandLogo.svg";

export default function Navbar() {
  return (
    <nav>
      <div>
        <img src={BrandLogo} alt="Brand logo" />
        <h1>Site Builder</h1>
      </div>
      <div>
        <Button>
          <a href="#beginning">Start the proccess</a>
        </Button>
        <Link to="/Authenticate" className="login-btn">
          <i className="fas fa-sign-in-alt"></i>
        </Link>
      </div>
    </nav>
  );
}
