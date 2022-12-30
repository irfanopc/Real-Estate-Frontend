import React from "react";
//import Display from "./Display";

import "./LocationInfo.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const LocationInfo = () => {
    return (
        <div className="LocationInfo">


            <span>


                <div className="leftSide">
                    Email
                    <input id="selectBox" placeholder="Email" />
                </div>


                <div className="leftSide">
                    <label>
                        Area

                        <select id="selectBox">
                            <option>Rectangle</option>
                            <option>Square</option>
                            <option>Trangle</option>
                        </select>
                    </label>
                </div>



                <div className="leftSide">
                    Address
                    <input id="selectBox" placeholder="Address" />
                </div>



                <div className="leftSide">
                    Latitude
                    <input id="selectBox" placeholder=" Latitude" />
                </div>
                
                <div className="previous">
             <button>Previous</button>
          </div>
            </span>











            <span>



                <div className="rightSide">

                    <label>
                        City
                        <select id="selectBox">
                            <option>Delhi</option>
                            <option>Ranchi</option>
                            <option>Sambalpur</option>

                        </select>
                    </label>

                </div>

                <div className="rightSide">

                    <label>
                        Pincode
                        <select id="selectBox">
                            <option>834002</option>
                            <option>768001</option>
                            <option>834001</option>

                        </select>
                    </label>

                </div>
                <div className="rightSide">
                    Landmark

                    <input id="selectBox" placeholder=" Landmark" />
                </div>


                <div className="rightSide">
                    Longitude

                    <input id="selectBox" placeholder=" Logitude" />
                </div>

                <div className="saveContinue">
             <button>Add Property</button>
          </div>


</span>
        </div>

    );
};

export default LocationInfo;