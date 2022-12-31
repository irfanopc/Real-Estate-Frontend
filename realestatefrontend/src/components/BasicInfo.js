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
  <div className="basicInfo">

        
       
        <span>
            <div className="leftSide">

        

              <label className="propertyType">

              Property Type
              <select id="selectBox"> 
              <option>Select Property Type</option>  
              <option>Flat</option>
              <option>Plot</option>
              <option>House</option>
              </select>
              </label>
            </div>

        <div className="leftSide">
          Price

        <label className="propertyType">Price</label>

          <input id="selectBox" placeholder="Example:1000"/>
        </div>

        <div className="leftSide">

          {/* <label> */}

          <label className="propertyType">

          Property Age 
          
        <select id="selectBox"> 
          <option>3</option>
          <option>7</option>
          <option>10</option>
              </select>
              </label>
        </div>

        <div className="leftSide">

          Property Description

        <label className="propertyType">Property Description</label> 

          <input  id="selectBox" placeholder=""/>
        </div>

        <div className="cancel">
             <button>Cancel</button>
          </div>

        </span>

        <span>
            <div className="rightSide">

              {/* <label> */}

              <label className="propertyType">

              Negotiable 
              
              <select id="selectBox"> 
          <option>Yes</option>
          <option>No</option>
          
              </select>
              </label>
        </div>

        <div className="rightSide">

          <label className="propertyType">
          Ownership  
        <select id="selectBox">
        <option>Select Ownership</option>
        <option>Given</option>
          <option>Not given</option>
          
              </select>
          </label>
        
        </div>

        <div className="rightSide">

          {/* <label> */}

          <label className="propertyType">

            Property Approved
          <select id="selectBox">  
          <option value="disabled select">Select Property Type</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
      
          
              </select>
          </label>
        
        </div>

        <div className="rightSide">

          <label className="propertyType">
          Bank Loan
          
          <select id="selectBox"> 
          <option>Approved</option>
          <option>Not Approved</option>
          
              </select>
              </label>
        </div>

        <div className="saveContinue">
             <button>Save & Continue</button>
          </div>
        
        </span>
        </div>

     

       
  </div>
  </div>
  
  
  
  
  </>
      

    );
  };
  
  export default BasicInfo;