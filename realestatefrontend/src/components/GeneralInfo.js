import React from "react";
//import Display from "./Display";

import "./GeneralInfo.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const GeneralInfo = () => {
    return (
       <>
<div className="maincontainer">
      <div className="row">
          <div>
            <span>Name</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Owner</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Mobile</span>
            <div className="selectBox">
              
              <input className="selectBox" placeholder="Enter Mobile Number" />
            </div>
          </div>
        </div>




        <div className="row">
          <div>
            <span>Posted by</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Posted by</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Sale Type</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Please Select</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>


        <div className="row">
          <div>
            <span>Featured Package</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Please Select</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>PPD Package</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Please Select</option>
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
</>






                

    );
};

export default GeneralInfo;