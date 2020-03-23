import React from "react";
import "./App.css";
import Headerfunc from "./components/header.component";
import PContent from "./components/pageContent.component";
import FormHead from "./components/formHead.component";
import UserSelect from "./components/userSelect.component";
import UserForm from "./components/userForm.component"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Headerfunc />
      <PContent />
      <div className="form-section m-3 pb-5">
        <Router>
          <FormHead />
          <Route path="/" exact component={UserSelect} />
          <Route path="/add" exact component={UserForm} />
        </Router>
      </div>
    </>
  );
}

export default App;
