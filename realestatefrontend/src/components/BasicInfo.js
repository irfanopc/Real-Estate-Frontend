import React from "react";
//import Display from "./Display";
import "./BasicInfo.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const BasicInfo = () => {   
return (
      <div className="basicInfo">
        
       
        <span>
            <div className="leftSide">
              <label id="propertyType">
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
          <input id="selectBox" placeholder="Example:1000"/>
        </div>

        <div className="leftSide">
          <label>
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
          <input  id="selectBox" placeholder=""/>
        </div>
        </span>

        <span>
            <div className="rightSide">
              <label>
              Negotiable 
              
              <select id="selectBox"> 
          <option>Yes</option>
          <option>No</option>
          
              </select>
              </label>
        </div>

        <div className="rightSide">

          <label>
          Ownership  
        <select id="selectBox">
        <option>Select Ownership</option>
        <option>Given</option>
          <option>Not given</option>
          
              </select>
          </label>
        
        </div>

        <div className="rightSide">
          <label>
            Property Approved
          <select id="selectBox">  
          <option value="disabled select">Select Property Type</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
      
          
              </select>
          </label>
        
        </div>

        <div className="rightSide">

          <label>
          Bank Loan
          
          <select id="selectBox"> 
          <option>Approved</option>
          <option>Not Approved</option>
          
              </select>
              </label>
        </div>
        
        </span>


        </div>
     
    );
  };
  
  export default BasicInfo;