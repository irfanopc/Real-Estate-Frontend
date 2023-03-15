import React from "react";
import "./BasicInfo.css";
import AddNewProperty from "./AddProperty";
import Sidebar from "../SideBar/Sidebar";
import "./BasicInfo.css";
import Property from "../DisplayProp/Property";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BasicInfo = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const [basicDetails, setDetails] = useState({
    Property_Type: "",
    Negotiable: "",
    Price: "",
    Ownership: "",
    Property_Age: "",
    Property_Approved: "",
    Property_Description: "",
    Bank_Loan: "",
  });
  const onContinue = () => {
    navigator("/propertyDetail", { state: { basicDetails: basicDetails}});
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
          <div className="maincontainer">
            <div className="row">
              <div>
                <span className="titles">Property Type</span>

                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Property_Type: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Select propety Type</option>
                    <option>Flat</option>
                    <option>House</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="titles">Negotiable</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Negotiable: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Select Negotiable</option>
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
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({ ...basicDetails, Price: e.target.value });
                    }}
                  >
                    <option value={"toilet"}>Example price</option>
                    <option>Flat</option>
                    <option>House</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="titles">Ownership</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Ownership: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Select Ownership</option>
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
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Property_Age: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Property Age</option>
                    <option>Flat</option>
                    <option>House</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="titles">Property Approved</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Property_Approved: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Property Approved</option>
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
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Property_Description: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Property Description</option>
                    <option>Flat</option>
                    <option>House</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="titles">Bank Loan</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Bank_Loan: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Bank Loan</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="newbuttoncontainer">
            <div className="newbutton">
              <button
                onClick={() => {
                  navigator("/home",{state:basicDetails});
                }}
              >
                Cancel
              </button>
            </div>

            <div className="newbutton">
              <button onClick={onContinue}>Save & Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
