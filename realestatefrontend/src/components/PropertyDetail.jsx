import React from "react";
import Property from "../DisplayProp/Property";
import Sidebar from "../SideBar/Sidebar";
import AddNewProperty from "./AddProperty";
//import Display from "./Display";

import "./PropertyDetail.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const PropertyDetail = () => {
  return (
    <>

    <div className="home">
    <div className="one">

      <Sidebar/>

    </div>


    <div className="two">

      <Property/>
      <AddNewProperty/>

    <div className="maincontainerpro">
      <div className="row11">
        <div>
          <span>Length</span>

          <div className="selectBoxpro">
            <input className="selectBoxpro" placeholder="Example: 1000" />
          </div>
        </div>

        <div>
          <span>Breadth</span>
          <div className="selectBoxpro">
            <input className="selectBoxpro" placeholder="Example: 1000" />
          </div>
        </div>
      </div>

      <div className="row11">
        <div>
          <span>Total Area</span>

          <div className="selectBoxpro">
            <input className="selectBoxpro" placeholder="Example: 7500" />
          </div>
        </div>

        <div>
          <span>Area Unit</span>
          <div className="selectBoxpro">
            <select defaultValue={"Area"} className="selectBoxpro">
              <option value={"Area"}>Area Unit</option>
              <option>Yes</option>
              <option>NO</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row11">
        <div>
          <span>No Of BHK</span>

          <div className="selectBoxpro">
            <select defaultValue={"BHK"} className="selectBoxpro">
              <option value={"BHk"}>Select No fo BHK</option>
              <option>Yes</option>
              <option>NO</option>
            </select>
          </div>
        </div>

        <div>
          <span>No Of Floor</span>
          <div className="selectBoxpro">
            <select defaultValue={"Floor"} className="selectBoxpro">
              <option value={"floor"}>Select No fo Floor</option>
              <option>Yes</option>
              <option>NO</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row11">
        <div>
          <span>Attached</span>

          <div className="selectBoxpro">
            <select defaultValue={"Attached"} className="selectBoxpro">
              <option value={"Attached"}>Select Attached</option>
              <option>Yes</option>
              <option>NO</option>
            </select>
          </div>
        </div>

        <div>
          <span>Weastern Toilet</span>
          <div className="selectBoxpro">
            <select defaultValue={"toilet"} className="selectBoxpro">
              <option value={"toilet"}> Select Western Toilet</option>
              <option>Yes</option>
              <option>NO</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row11">
        <div>
          <span>Furnished</span>

          <div className="selectBoxpro">
            <select defaultValue={"Furnished"} className="selectBoxpro">
              <option value={"Furnished"}>Select Furnished</option>
              <option>Yes</option>
              <option>NO</option>
            </select>
          </div>
        </div>

        <div>
          <span>Car Parking</span>
          <div className="selectBoxpro">
            <select defaultValue={"Parking"} className="selectBoxpro">
              <option value={"Parking"}>Select Car Parking</option>
              <option>Yes</option>
              <option>NO</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row11">
          <div>
            <span className="titles">Lift</span>

            <div className="selectBoxpro">
              <select defaultValue={"toilet"} className="selectBoxpro">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span className="titles">Electricity</span>
            <div className="selectBoxpro">
              <select defaultValue={"toilet"} className="selectBoxpro">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row11diff">
          <div>
            <span className="titles">Facing</span>

            <div className="selectBoxpro">
              <select defaultValue={"toilet"} className="selectBoxpro">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
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

    </div>
    
    </>
  );
};

export default PropertyDetail;
