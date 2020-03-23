import React from "react";
import "./assets/css/header.css";
import * as FontAwesome from "react-icons/lib/fa";
import { Link } from "react-router-dom";

function UserSelect() {
  return (
    <>
      <div className="m-3 d-flex flex-wrap justify-content-start">
        <Link to="/add">
          <div className="user-box m-3">
            <FontAwesome.FaPlus className="faIcon1" />
            <p className="user-box-text">Add Family member</p>
          </div>
        </Link>
      </div>
      <p className="add-text m-3">
        Add a Family member or click next to go to next step
      </p>
      <button className="next btn btn-primary pr-5 pl-5 m-2">Next</button>
    </>
  );
}

export default UserSelect;
