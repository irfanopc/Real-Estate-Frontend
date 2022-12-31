import React from "react";
//import Display from "./Display";

import "./PropertyDetail.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const PropertyDetail = () => {
  return (
    //     <div className="PropertyDetail">

    //       <span>
    //         <div className="leftSide">
    //           Length
    //           <input id="selectBox" placeholder="Example:1000" />
    //         </div>

    //         <div className="leftSide">
    //           Total Area
    //           <input id="selectBox" placeholder="Example:75000" />
    //         </div>

    //         <div className="leftSide">
    //           <label>
    //             No of BHK

    //             <select id="selectBox">
    //               <option>1 BHK</option>
    //               <option>2 BHK</option>
    //               <option>3 BHK</option>
    //             </select>
    //           </label>
    //         </div>

    //         <div className="leftSide">
    //           <label>
    //             Attached

    //             <select id="selectBox">
    //               <option>Kitchen</option>
    //               <option>Balkani</option>
    //               <option>CarParking</option>
    //             </select>
    //           </label>
    //         </div>

    //         <div className="leftSide">
    //           <label>
    //             Furnished

    //             <select id="selectBox">
    //               <option>Not Furnished</option>
    //               <option>Semi Furnished</option>
    //               <option>Full Furnished</option>

    //             </select>
    //           </label>
    //         </div>

    //         <div className="leftSide">
    //           <label>
    //             Lift

    //             <select id="selectBox">
    //               <option>Yes</option>
    //               <option>No</option>
    //             </select>
    //           </label>
    //         </div>

    //         <div className="leftSide">
    //           <label>
    //             Facing

    //             <select id="selectBox">
    //               <option>Yes</option>
    //               <option>No</option>
    //             </select>
    //           </label>
    //         </div>

    //         <div className="previous">
    //      <button>Previous</button>
    //      </div>

    //       </span>

    //       {/* /Right Side part  =======================>>>>      */}

    //       <span>

    //         <div className="rightSide">
    //           Breadth

    //           <input id="selectBox" placeholder="Example:1000" />
    //         </div>

    //         <div className="rightSide">

    //           <label>
    //             Area Unit
    //             <select id="selectBox">
    //               <option>Square centimeter</option>
    //               <option>square decimeter</option>
    //               <option>Square meter</option>

    //             </select>
    //           </label>

    //         </div>

    // <div className="rightSide">

    //           <label>
    //             No of Floor
    //             <select id="selectBox">
    //               <option>First Floor</option>
    //               <option>Second Floor</option>
    //               <option>Third Floor</option>

    //             </select>
    //           </label>

    //         </div>

    //         <div className="">

    //           <label>
    //             Westorn Toilet
    //             <select id="selectBox">
    //               <option>Yes</option>
    //               <option>NOr</option>
    //             </select>
    //           </label>

    //         </div>

    //         <div className="rightSide">

    //           <label>
    //             Car parking
    //             <select id="selectBox">
    //               <option>Yes</option>
    //               <option>No</option>
    //             </select>
    //           </label>

    //         </div>

    //         <div className="rightSide">
    //           Electricity
    //           <input id="selectBox" placeholder="Example: 3 Phase" />
    //         </div>

    //         <div className="saveContinue">
    //              <button>Save & Continue</button>
    //           </div>

    //         </span>

    // </div>

    <>
      <div className="maincontainer">
      <div className="row">
          <div>
            <span>Length</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Breadth</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>




        <div className="row">
          <div>
            <span>Total Area</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Area Unit</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
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
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>No Of Floor</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
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
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Weastern Toilet</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
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
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Car Washing</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
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
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div>
            <span>Electricity</span>
            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
                <option>Yes</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rowdiff">
          <div>
            <span>Facing</span>

            <div className="selectBox">
              <select defaultValue={"toilet"} className="selectBox">
                <option value={"toilet"}>Western Toilet</option>
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
