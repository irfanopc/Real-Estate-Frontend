import React from "react";
//import Display from "./Display";

import "./LocationInfo.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const LocationInfo = () => {
    return (


<>
<div className="maincontainer">
      <div className="row">
          <div>
            <span>Email</span>

            <div className="selectBox">
                     <input className="selectBox" placeholder="Email" />
            </div>
          </div>

          <div>
            <span>City</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select City</option>
                <option>Delhi</option>
                <option>Ranchi</option>
              </select>
            </div>
          </div>
        </div>




        <div className="row">
          <div>
            <span> Area</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Area</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Pincode</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Pincode</option>
                <option>834004</option>
                <option>834001</option>
              </select>
            </div>
          </div>
        </div>


        <div className="row">
          <div>
            <span>Address</span>

            <div className="selectBox">
    
              <input className="selectBox" placeholder="Address" />
            </div>
          </div>

          <div>
            <span>Landmark</span>
            <div className="selectBox">
             
              <input className="selectBox" placeholder="Landmark" />
            </div>
          </div>
        </div>



        <div className="row">
          <div>
            <span>Latitude</span>

            <div className="selectBox">
             

<input className="selectBox" placeholder="Latitude" />
            </div>
          </div>

          <div>
            <span>Longitude</span>
            <div className="selectBox">
             

<input className="selectBox" placeholder="Latitude" />
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

export default LocationInfo;