import React from "react";

//import Display from "./Display";
import "./BasicInfo.css";

import AddNewProperty from "./AddProperty";
import Sidebar from "../SideBar/Sidebar";
import "./BasicInfo.css";

import Property from "../DisplayProp/Property";


//import Dropdown from 'react-bootstrap/Dropdown';

const BasicInfo = () => {
  return (

    <>

<div className="home">
  <div className="one"><Sidebar/></div>
  <div className="two">
    <Property/>
    <AddNewProperty/>
    <div className="maincontainer">
      
          
      <div className="row">
          <div>
            <span className="titles">Property Type</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Flat</option>
                <option>House</option>
                <option>Plot</option>
              </select>
            </div>
          </div>
            <div>
            <span className="titles">Negotiable</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>


        <div className="row">
          <div>
            <span className="titles">Price</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Flat</option>
                <option>House</option>
                <option>Plot</option>
              </select>
            </div>
          </div>
            <div>
            <span className="titles">Ownership</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div>
            <span className="titles">Property Age</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Flat</option>
                <option>House</option>
                <option>Plot</option>
              </select>
            </div>
          </div>
            <div>
            <span className="titles">Property Approved</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div>
            <span className="titles">Property Description</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Flat</option>
                <option>House</option>
                <option>Plot</option>
              </select>
            </div>
          </div>
            <div>
            <span className="titles">Bank Loan</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>
        </div>

      <div className="newbuttoncontainer">
      <div className="newbutton">
            <button>Previous</button>
      </div>

      <div className="newbutton">
            <button>Save & Continue</button>
        </div>
  
      
     
        
        </div>
        </div>
         

      </div>
  

    </>

  );
};

export default BasicInfo;