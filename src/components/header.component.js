import React from "react";
import "./assets/css/header.css";
import * as FontAwesome from "react-icons/lib/fa";
import { BrowserRouter as Router} from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Router>
      <div className="header container-fluid pt-3">
        <Link to="/">
          <span className="float-left back">
            <FontAwesome.FaArrowLeft className="faIcon1 mr-2" />
            Back
          </span>
        </Link>
        <h3>Financial Planning Heavy</h3>
      </div>
    </Router>
  );
}

export default Header;
