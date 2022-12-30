import React from "react";
//import Display from "./Display";

import "./PropertyDetail.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const PropertyDetail = () => {
  return (
    <div className="PropertyDetail">


      <span>
        <div className="leftSide">
          Length
          <input id="selectBox" placeholder="Example:1000" />
        </div>


        <div className="leftSide">
          Total Area
          <input id="selectBox" placeholder="Example:75000" />
        </div>

        <div className="leftSide">
          <label>
            No of BHK

            <select id="selectBox">
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
            </select>
          </label>
        </div>


        <div className="leftSide">
          <label>
            Attached

            <select id="selectBox">
              <option>Kitchen</option>
              <option>Balkani</option>
              <option>CarParking</option>
            </select>
          </label>
        </div>


        <div className="leftSide">
          <label>
            Furnished

            <select id="selectBox">
              <option>Not Furnished</option>
              <option>Semi Furnished</option>
              <option>Full Furnished</option>

            </select>
          </label>
        </div>


        <div className="leftSide">
          <label>
            Lift

            <select id="selectBox">
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
        </div>



        <div className="leftSide">
          <label>
            Facing

            <select id="selectBox">
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
        </div>

        <div className="previous">
     <button>Previous</button>
     </div>

      </span>

      {/* /Right Side part  =======================>>>>      */}

      

      <span>



        <div className="rightSide">
          Breadth

          <input id="selectBox" placeholder="Example:1000" />
        </div>

        <div className="rightSide">

          <label>
            Area Unit
            <select id="selectBox">
              <option>Square centimeter</option>
              <option>square decimeter</option>
              <option>Square meter</option>

            </select>
          </label>

        </div>






<div className="rightSide">

          <label>
            No of Floor
            <select id="selectBox">
              <option>First Floor</option>
              <option>Second Floor</option>
              <option>Third Floor</option>

            </select>
          </label>

        </div>



        <div className="rightSide">

          <label>
            Westorn Toilet
            <select id="selectBox">
              <option>Yes</option>
              <option>NOr</option>
            </select>
          </label>

        </div>



        <div className="rightSide">

          <label>
            Car parking
            <select id="selectBox">
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>

        </div>


        <div className="rightSide">
          Electricity
          <input id="selectBox" placeholder="Example: 3 Phase" />
        </div>
      
      

       
        <div className="saveContinue">
             <button>Save & Continue</button>
          </div>
        
      
        

        </span>
        
        
         

</div>


  );
};

export default PropertyDetail;