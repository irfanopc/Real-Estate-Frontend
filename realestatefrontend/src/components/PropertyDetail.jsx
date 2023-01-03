import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Property from "../DisplayProp/Property";
import Sidebar from "../SideBar/Sidebar";
import AddNewProperty from "./AddProperty";
import {useLocation} from 'react-router-dom';
//import Display from "./Display";

import AddNewProperty from "./AddProperty";
import Sidebar from "../SideBar/Sidebar";
import Property from "../DisplayProp/Property";


import "./PropertyDetail.css";



const PropertyDetail = () => {

  const location = useLocation();
   const details = ((location.state.details));
   //console.log(details);
  const navigator = useNavigate()
  const [propertyDetails , setPropertyDetails] = useState({length:"",Breadth:"",Total_Area:"",Area_Unit:"",No_Of_BHK:"",No_Of_Floor:"",Attached:"",Weastern_Toilet:"",Furnished:"",Car_Parking:"",Lift:"",Electricity:"",Facing:""})
  const onContinue = () =>{
    //console.log(propertyDetails);
    navigator("/GeneralInfo",{state:{propertyDetails,details}});
  }
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




      <Property  />
      <AddNewProperty  />



        <div className="row">
          <div>
            <span className="titles">Total Area</span>


          <div className="selectBoxpro">
            <input className="selectBoxpro" placeholder="Example: 1000" onChange={(e)=>{setPropertyDetails({...propertyDetails,length:e.target.value})}} />

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Example:7500</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>

          </div>


        <div>
          <span>Breadth</span>
          <div className="selectBoxpro">
            <input className="selectBoxpro" placeholder="Example: 1000" onChange={(e)=>{setPropertyDetails({...propertyDetails,Breadth:e.target.value})}} />

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



          <div className="selectBoxpro">
            <input className="selectBoxpro" placeholder="Example: 7500" onChange={(e)=>{setPropertyDetails({...propertyDetails,Total_Area:e.target.value})}} />
          </div>
        </div>

        <div>
          <span>Area Unit</span>
          <div className="selectBoxpro">
            <select defaultValue={"Area"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,Area_Unit:e.target.value})}} >
              <option value={"Area"}>Area Unit</option>
              <option>Yes</option>
              <option>NO</option>
            </select>

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


      <div className="row11">
        <div>
          <span>No Of BHK</span>

          <div className="selectBoxpro">
            <select defaultValue={"BHK"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,No_Of_BHK:e.target.value})}} >
              <option value={"BHk"}>Select No fo BHK</option>
              <option>Yes</option>
              <option>NO</option>
            </select>
          </div>
        </div>

        <div>
          <span>No Of Floor</span>
          <div className="selectBoxpro">
            <select defaultValue={"Floor"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,No_Of_Floor:e.target.value})}} >
              <option value={"floor"}>Select No fo Floor</option>
              <option>Yes</option>
              <option>NO</option>
            </select>
          </div>
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





          <div className="selectBoxpro">
            <select defaultValue={"Attached"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,Attached:e.target.value})}} >
              <option value={"Attached"}>Select Attached</option>
              <option>Yes</option>
              <option>NO</option>
            </select>

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
          <span>Weastern Toilet</span>
          <div className="selectBoxpro">
            <select defaultValue={"toilet"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,Weastern_Toilet:e.target.value})}} >
              <option value={"toilet"}> Select Western Toilet</option>
              <option>Yes</option>
              <option>NO</option>
            </select>

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


          <div className="selectBoxpro">
            <select defaultValue={"Furnished"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,Furnished:e.target.value})}} >
              <option value={"Furnished"}>Select Furnished</option>
              <option>Yes</option>
              <option>NO</option>
            </select>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Furnished</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>

          </div>


        <div>
          <span>Car Parking</span>
          <div className="selectBoxpro"  >
            <select defaultValue={"Parking"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,Car_Parking:e.target.value})}} >
              <option value={"Parking"}>Select Car Parking</option>
              <option>Yes</option>
              <option>NO</option>
            </select>

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


            <div className="selectBoxpro">
              <select defaultValue={"toilet"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,Lift:e.target.value})}} >
                <option value={"toilet"}>Western Toilet</option>
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

            <div className="selectBoxpro">
              <select defaultValue={"toilet"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,Electricity:e.target.value})}} >
                <option value={"toilet"}>Western Toilet</option>

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

            <div className="selectBoxpro">
              <select defaultValue={"toilet"} className="selectBoxpro" onChange={(e)=>{setPropertyDetails({...propertyDetails,Facing:e.target.value})}}>
                <option value={"toilet"}>Western Toilet</option>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Select Facing</option>

                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

      <div className="newbuttoncontainer">
        <div className="newbutton">
          <button onClick={()=>{navigator("/BasicInfo")}} >Previous</button>

          

        </div>
      </div>

        <div className="newbutton">
          <button onClick={onContinue} >Save & Continue</button>

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