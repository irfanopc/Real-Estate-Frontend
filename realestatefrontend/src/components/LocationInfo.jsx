import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Property from "../DisplayProp/Property";
import Sidebar from "../SideBar/Sidebar";
import AddNewProperty from "./AddProperty";
import "./LocationInfo.css";


const LocationInfo = () => {
  const location = useLocation();
  const basicDetails = location.state.basicDetails;
  //console.log( details);
   const localmail =  (window.localStorage.getItem("email"));
  const propertyDetails = location.state.propertyDetails;
  const generalInfo = location.state.generalInfo;
  // console.log(details);
  // console.log(propertyDetails);
  // console.log(generalInfo);
  const navigator = useNavigate();
  const [locationInfo, setLocationInfo] = useState({
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });
  const allDetails = Object.assign(
    basicDetails,
    propertyDetails,
    generalInfo,
    locationInfo
  );
  const onAdd = async () => {
   
    const formData = new FormData();

    formData.append("file", allDetails.file);
    formData.append("mobile", allDetails.mobile);
    formData.append("email", allDetails.email);
    // console.log(formData.get("email"));
    try {
      const response = await axios({
        method: "post",
        url: "https://realestatebackend0.onrender.com/userdetails",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    navigator("/home");
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
                <span>Email</span>

                <div className="selectBox">
                  <input
                    className="selectBox"
                    placeholder="Email"
                    onChange={(e) => {
                      setLocationInfo({
                        ...LocationInfo,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <span>City</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setLocationInfo({
                        ...LocationInfo,
                        city: e.target.value,
                      });
                    }}
                  >
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
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setLocationInfo({
                        ...LocationInfo,
                        area: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Select Area</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>Pincode</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setLocationInfo({
                        ...LocationInfo,
                        pincode: e.target.value,
                      });
                    }}
                  >
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
                  <input
                    className="selectBox"
                    placeholder="Address"
                    onChange={(e) => {
                      setLocationInfo({
                        ...LocationInfo,
                        address: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <span>Landmark</span>
                <div className="selectBox">
                  <input
                    className="selectBox"
                    placeholder="Landmark"
                    onChange={(e) => {
                      setLocationInfo({
                        ...LocationInfo,
                        landmark: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span>Latitude</span>

                <div className="selectBox">
                  <input
                    className="selectBox"
                    placeholder="Latitude"
                    onChange={(e) => {
                      setLocationInfo({
                        ...LocationInfo,
                        latitude: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <span>Longitude</span>
                <div className="selectBox">
                  <input
                    className="selectBox"
                    placeholder="Latitude"
                    onChange={(e) => {
                      setLocationInfo({
                        ...LocationInfo,
                        longitude: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="newbuttoncontainer">
            <div className="newbutton">
              <button
                onClick={() => {
                  navigator("/generalInfo", { state: { generalInfo } });
                }}
              >
                Previous
              </button>
            </div>

            <div className="newbutton">
              <button onClick={onAdd}>Add Property</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
