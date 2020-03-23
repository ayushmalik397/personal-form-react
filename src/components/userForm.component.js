import React from "react";
import "./assets/css/header.css";
import * as FontAwesome from "react-icons/lib/fa";
import { Link } from "react-router-dom";

function UserForm() {
  return (
    <div className="user-form mt-5">
      <span className="form-head p-2 pr-5">Personal Info</span>
      <div className="row m-5">
        <div className="col-md-3 col-sm-3 field-head">
          Name
          <div className="form-field mt-1">
            <input type="text" placeholder="Name" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 field-head">
          Date of Birth
          <div className="form-field mt-1">
            <input type="date" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 field-head">
          Location
          <div className="form-field mt-1">
            <input type="text" placeholder="Location" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 field-head">
          Occupation
          <div className="form-field mt-1">
            <input type="text" placeholder="Occupation" />
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-md-3 col-sm-3 field-head">
          Phone Number
          <div className="form-field mt-1">
            <input type="number" placeholder="Phone Number" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 field-head">
          Email
          <div className="form-field mt-1">
            <input type="email" placeholder="Email" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 field-head">
          Sex
          <div className="form-field mt-1">
            <select id="Sex">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
              <option value="nptd">Not Prefer to Disclose</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-md-3 col-sm-3 field-head">
          Facebook Profile
          <div className="form-field mt-1">
            <input type="text" placeholder="www.facebook.com/johndoe" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 field-head">
          Twitter Profile
          <div className="form-field mt-1">
            <input type="text" placeholder="www.twitter.com/johndoe" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 field-head">
          Linkdin Profile
          <div className="form-field mt-1">
            <input type="text" placeholder="www.linkedin.com/johndoe" />
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-md-3 col-sm-3 field-head">
          Upload Photo
          <p className="field-subhead">
            File format PNG, JPG, JPEG. Minimum Size 500KB
          </p>
          <div className="form-field mt-1">
            <div className="upload-btn-wrapper">
              <button className="btn-file pl-3 pr-3 p-1">Select File</button>
              <input type="file" />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-3 field-head">
          Upload Signature
          <p className="field-subhead">Minimum Size 500KB</p>
          <div className="form-field mt-1">
            <div className="upload-btn-wrapper">
              <button className="btn-file pl-3 pr-3 p-1">Select File</button>
              <input type="file" />
            </div>
          </div>
        </div>
      </div>
      <div className="buttons float-right m-3">
        <Link to="/"><button className="btn btn-primary pr-5 pl-5 m-2">Save</button></Link>
        <button className="btn btn-primary pr-5 pl-5 m-2">Next</button>
      </div>
      <div className="directory-path m-3">
        <p><b>Personal</b><FontAwesome.FaAngleRight/>Documents<FontAwesome.FaAngleRight/>Other Details</p>
      </div>
    </div>
  );
}

export default UserForm;
