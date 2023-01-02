import React from "react";
import AddNewProperty from "./AddProperty";
import Sidebar from "../SideBar/Sidebar";
import Property from "../DisplayProp/Property";

import "./PropertyDetail.css";



const PropertyDetail = () => {
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
            <span className="titles">Length</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Example:1000</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span className="titles">Breadth</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Example:1000</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>




        <div className="row">
          <div>
            <span className="titles">Total Area</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Example:7500</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span className="titles">Area Unit</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Area Unit</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>


        <div className="row">
          <div>
            <span className="titles">No Of BHK</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select No of BHK</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span className="titles"> No Of Floor</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select No of Floor</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>



        <div className="row">
          <div>
            <span className="titles">Attached</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Attached</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span className="titles">Western Toilet</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div>
            <span className="titles">Furnished</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Furnished</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span className="titles">Car Parking</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Car Parking</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>


        <div className="row">
          <div>
            <span className="titles">Lift</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Lift</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span className="titles">Electricity</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Example:3 Phase</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rowdiff">
          <div>
            <span className="titles">Facing</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Facing</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          
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