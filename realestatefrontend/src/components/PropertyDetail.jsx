import React from "react";
//import Display from "./Display";

import "./PropertyDetail.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const PropertyDetail = () => {
  return (

<>
<div className="maincontainer">
      <div className="row">
          <div>
            <span>Length</span>

            <div className="selectBox">
              
               <input className="selectBox" placeholder="Example: 1000" />
            </div>
          </div>

          <div>
            <span>Breadth</span>
            <div className="selectBox">
            
               <input className="selectBox" placeholder="Example: 1000" />
            </div>
          </div>
        </div>




        <div className="row">
          <div>
            <span>Total Area</span>

            <div className="selectBox">
            <input className="selectBox" placeholder="Example: 7500" />
            </div>
          </div>

          <div>
            <span>Area Unit</span>
            <div className="selectBox">
              <select defaultValue={"Area"} className="selectBox">
                <option value={"Area"}>Area Unit</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>


        <div className="row">
          <div>
            <span>No Of BHK</span>

            <div className="selectBox">
              <select defaultValue={"BHK"} className="selectBox">
                <option value={"BHk"}>Select No fo BHK</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>No Of Floor</span>
            <div className="selectBox">
              <select defaultValue={"Floor"} className="selectBox">
                <option value={"floor"}>Select No fo Floor</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>



        <div className="row">
          <div>
            <span>Attached</span>

            <div className="selectBox">
              <select defaultValue={"Attached"} className="selectBox">
                <option value={"Attached"}>Select Attached</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Weastern Toilet</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}> Select Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div>
            <span>Furnished</span>

            <div className="selectBox">
              <select defaultValue={"Furnished"} className="selectBox">
                <option value={"Furnished"}>Select Furnished</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Car Parking</span>
            <div className="selectBox">
              <select defaultValue={"Parking"} className="selectBox">
                <option value={"Parking"}>Select Car Parking</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>


        <div className="row">
          <div>
            <span>Lift</span>

            <div className="selectBox">
              <select defaultValue={"Lift"} className="selectBox">
                <option value={"Lift"}> Select Lift</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Electricity</span>
            <div className="selectBox">
            <input className="selectBox" placeholder="Example: 3 phase" />
            </div>
          </div>
        </div>

        <div className="rowdiff">
          <div>
            <span>Facing</span>

            <div className="selectBox">
              <select defaultValue={"Facing"} className="selectBox">
                <option value={"Facing"}>Select Facing</option>
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

export default PropertyDetail;