import React from "react";
//import Display from "./Display";
//import "./BasicInfo.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const BasicInfo = () => {   
return (
      <div className="BasicInfo">
        <div><h1>ADD NEW PROPERTY</h1></div>
        <div>
            <span>Basic Info</span>
            <span>Property Detail</span>
            <span>General Info</span>
            <span>Location Info</span>
        </div>
        <div>
        <span>
            <div>
              <label>
              Property Type
              <select> 
              <option>Select Property Type</option>  
              <option>Flat</option>
          <option>Plot</option>
          <option>House</option>
              </select>
              </label>
        </div>

        <div>
          price
          <input placeholder="Example:1000"/>
        </div>

        <div>
          <label>
          Property Age 
          
        <select> 
          <option>3</option>
          <option>7</option>
          <option>10</option>
              </select>
              </label>
        </div>

        <div>
          Property Description
          <input placeholder=""/>
        </div>
        </span>

        <span>
            <div>
              <label>
              Negotiable 
              
              <select> 
          <option>Yes</option>
          <option>No</option>
          
              </select>
              </label>
        </div>

        <div>

          <label>
          Ownership  
        <select>
        <option>Select Ownership</option>
        <option>Given</option>
          <option>Not given</option>
          
              </select>
          </label>
        
        </div>

        <div>
          <label>
            Property Approved
          <select>  
          <option value="disabled select">Select Property Type</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
      
          
              </select>
          </label>
        
        </div>

        <div>

          <label>
          Bank Loan
          
          <select> 
          <option>Approved</option>
          <option>Not Approved</option>
          
              </select>
              </label>
        </div>
        
        </span>


        </div>
      </div>
    );
  };
  
  export default BasicInfo;