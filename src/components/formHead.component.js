import React from "react";
import "./assets/css/header.css";

function Header() {
  var arr = ["Personal", "Income", "Expense", "Assets", "Liability", "Risk"];

  function Formlist() {
    return (
      <div className="d-flex justify-content-around form-list mt-4 flex-wrap">
        {arr.map((ele, index) => {
          return (
            <div className="form-list-el pl-3 pr-3 mr-1 pt-1 pb-3" key={index}>
              <div className="number d-inline pl-3 pr-3 mr-3 pt-1 pb-1 rounded-circle">
                {index + 1}
              </div>
              {ele}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="form-navbar">
      <Formlist />
    </div>
  );
}

export default Header;
