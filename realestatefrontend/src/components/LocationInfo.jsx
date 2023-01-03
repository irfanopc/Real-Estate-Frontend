import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Property from "../DisplayProp/Property";
import Sidebar from "../SideBar/Sidebar";
import AddNewProperty from "./AddProperty";
//import Display from "./Display";

import "./LocationInfo.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const LocationInfo = () => {
  const location = useLocation();
  const details =  (location.state.details);
//console.log( details);
  const propertyDetails =  (location.state.propertyDetails);
  const generalInfo = location.state.generalInfo
  // console.log(details);
  // console.log(propertyDetails);
  // console.log(generalInfo);
  const navigator = useNavigate();
  const [locationInfo, setLocationInfo] = useState({email:"",city:"",area:"",pincode:"",address:"",landmark:"",latitude:"",longitude:"",})
  const onAdd = async ()=>{
    const allDetails = Object.assign(details, propertyDetails,generalInfo,locationInfo);
    const formData = new FormData();
    formData.append("file",allDetails.file)
    formData.append("mobile",allDetails.mobile)
    formData.append("email",allDetails.email)
    console.log(formData.get("mobile"));
    try{
      const response = await axios({
        method: "post",
        url: "/userdetails",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
    } catch (error) {
    console.log(error)
    } 
navigator("/home")
  
//   const data = new FormData();
//   data.append('postImage',form.file,form.file.name);
//   data.append('name', form.name);
//   data.append('location', form.location);
//   data.append('description',form.description)
//   console.log(data.postImage)
// try {
// const response = await axios({
//     method: "post",
//     url: "http://localhost:5000/instaclone/v1",
//     data: data,
//     headers: { "Content-Type": "multipart/form-data" },
// });
// console.log(response);
// } catch (error) {
// console.log(error)
 }


  return (
    <>

    <div className="home">
    <div className="one">
      <Sidebar/>
    </div>
    <div className="two">
      <Property/>
      <AddNewProperty/>


      <div className="maincontainer">
        <div className="row">
          <div>
            <span>Email</span>

            <div className="selectBox">
              <input className="selectBox" placeholder="Email" onChange={(e)=>{setLocationInfo({...LocationInfo,email : e.target.value})}} />
            </div>
          </div>

          <div>
            <span>City</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox" onChange={(e)=>{setLocationInfo({...LocationInfo,city : e.target.value})}} >
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
              <select defaultValue={"toilet"} className="selectBox" onChange={(e)=>{setLocationInfo({...LocationInfo,area : e.target.value})}} >
                <option value={"toilet"}>Select Area</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Pincode</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox" onChange={(e)=>{setLocationInfo({...LocationInfo,pincode : e.target.value})}} >
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

              <input className="selectBox" placeholder="Address"  onChange={(e)=>{setLocationInfo({...LocationInfo,address : e.target.value})}} />
            </div>
          </div>

          <div>
            <span>Landmark</span>
            <div className="selectBox">

              <input className="selectBox" placeholder="Landmark" onChange={(e)=>{setLocationInfo({...LocationInfo,landmark : e.target.value})}} />
            </div>
          </div>
        </div>



        <div className="row">
          <div>
            <span>Latitude</span>

            <div className="selectBox">


              <input className="selectBox" placeholder="Latitude" onChange={(e)=>{setLocationInfo({...LocationInfo,latitude : e.target.value})}} />
            </div>
          </div>

          <div>
            <span>Longitude</span>
            <div className="selectBox">
              <input className="selectBox" placeholder="Latitude" onChange={(e)=>{setLocationInfo({...LocationInfo,longitude : e.target.value})}} />
            </div>
          </div>
        </div>
      </div>

      <div className="newbuttoncontainer">
        <div className="newbutton">
          <button>Previous</button>
        </div>

        <div className="newbutton">
          <button onClick={onAdd} >Add Property</button>
        </div>


      </div>

      
    </div>
    </div>
      
    </>

  );
};

export default LocationInfo;