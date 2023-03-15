import React from "react";
import { useState } from "react";
import Property from "../DisplayProp/Property";
import Sidebar from "../SideBar/Sidebar";
import AddNewProperty from "./AddProperty";
import { useLocation, useNavigate } from "react-router-dom";
import "./PropertyDetail.css";
import { useEffect } from "react";

const PropertyDetail = () => {
  const location = useLocation();
  const navigator = useNavigate();

  const [propertyDetails, setPropertyDetails] = useState({
    length: "",
    Breadth: "",
    Total_Area: "",
    Area_Unit: "",
    No_Of_BHK: "",
    No_Of_Floor: "",
    Attached: "",
    Weastern_Toilet: "",
    Furnished: "",
    Car_Parking: "",
    Lift: "",
    Electricity: "",
    Facing: "",
  });
  const basicDetails = location.state.basicDetails;
 
   
  const onContinue = () => {
    //console.log(propertyDetails);
    navigator("/generalInfo", { state: { propertyDetails, basicDetails } });
  };

  return (
    <>
      <div className="home">
        <div className="one">
          <Sidebar />
        </div>

        <div className="two">
          <Property />
          <AddNewProperty />

          <div className="maincontainerpro">
            <div className="row11">
              <div>
                <span>Length(optional)</span>

                <div className="selectBoxpro">
                  <input
                    className="selectBoxpro"
                    placeholder="Example: 1000"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        length: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <span>Breadth(optional)</span>
                <div className="selectBoxpro">
                  <input
                    className="selectBoxpro"
                    placeholder="Example: 1000"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Breadth: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row11">
              <div>
                <span>Total Area(optional)</span>

                <div className="selectBoxpro">
                  <input
                    className="selectBoxpro"
                    placeholder="Example: 7500"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Total_Area: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <span>Area Unit(optional)</span>
                <div className="selectBoxpro">
                  <select
                    defaultValue={"Area"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Area_Unit: e.target.value,
                      });
                    }}
                  >
                    <option value={"Area"}>Area Unit(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row11">
              <div>
                <span>No Of BHK(optional)</span>

                <div className="selectBoxpro">
                  <select
                    defaultValue={"BHK"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        No_Of_BHK: e.target.value,
                      });
                    }}
                  >
                    <option value={"BHk"}>Select No fo BHK(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>No Of Floor(optional)</span>
                <div className="selectBoxpro">
                  <select
                    defaultValue={"Floor"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        No_Of_Floor: e.target.value,
                      });
                    }}
                  >
                    <option value={"floor"}>Select No fo Floor(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row11">
              <div>
                <span>Attached(optional)</span>

                <div className="selectBoxpro">
                  <select
                    defaultValue={"Attached"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Attached: e.target.value,
                      });
                    }}
                  >
                    <option value={"Attached"}>Select Attached(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>Weastern Toilet(optional)</span>
                <div className="selectBoxpro">
                  <select
                    defaultValue={"toilet"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Weastern_Toilet: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}> Select Western Toilet(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row11">
              <div>
                <span>Furnished(optional)</span>

                <div className="selectBoxpro">
                  <select
                    defaultValue={"Furnished"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Furnished: e.target.value,
                      });
                    }}
                  >
                    <option value={"Furnished"}>Select Furnished(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>Car Parking(optional)</span>
                <div className="selectBoxpro">
                  <select
                    defaultValue={"Parking"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Car_Parking: e.target.value,
                      });
                    }}
                  >
                    <option value={"Parking"}>Select Car Parking(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row11">
              <div>
                <span className="titles">Lift(optional)</span>

                <div className="selectBoxpro">
                  <select
                    defaultValue={"toilet"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Lift: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Western Toilet(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span className="titles">Electricity(optional)</span>
                <div className="selectBoxpro">
                  <select
                    defaultValue={"toilet"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Electricity: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Western Toilet(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row11diff">
              <div>
                <span className="titles">Facing(optional)</span>

                <div className="selectBoxpro">
                  <select
                    defaultValue={"toilet"}
                    className="selectBoxpro"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Facing: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Western Toilet(optional)</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="newbuttoncontainer">
              <div className="newbutton">
                <button
                  onClick={() => {
                    navigator("/basicInfo");
                  }}
                >
                  Previous
                </button>
              </div>

              <div className="newbutton">
                <button onClick={onContinue}>Save & Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;