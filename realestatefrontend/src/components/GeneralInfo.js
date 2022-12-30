import React from "react";
//import Display from "./Display";

import "./GeneralInfo.css";

//import Dropdown from 'react-bootstrap/Dropdown';

const GeneralInfo = () => {
    return (
        <div className="GeneralInfo">


            <span>

                <div className="leftSide">
                    <label>
                        Name

                        <select id="selectBox">
                            <option>Owner</option>
                            <option>Rental</option>

                        </select>
                    </label>
                </div>

                <div className="leftSide">
                    <label>
                        Posted by

                        <select id="selectBox">
                            <option>Builder</option>
                            <option>Employee</option>
                            <option>Anyone</option>
                        </select>
                    </label>
                </div>











                <div className="leftSide">
                    <label>
                        Featured Package

                        <select id="selectBox">
                            <option>Please Select</option>
                            <option>Not Select</option>
                            <option>None</option>

                        </select>
                    </label>
                </div>

                <div className="previous">
                    <button>Previous</button>
                </div>
            </span>

            {/* =======================Right Side Part ======================= */}
            <span>
            <div className="rightSide">
                    Mobile

                    <input id="selectBox" placeholder="Enter Mobile Number" />
                </div>

                <div className="rightSide">

                    <label>
                        Sale Type
                        <select id="selectBox">
                            <option>Property</option>
                            <option>Flat</option>
                            <option>Plot</option>

                        </select>
                    </label>

                </div>


                <div className="rightSide">

                    <label>
                        PPD Package
                        <select id="selectBox">
                            <option>First</option>
                            <option>Second </option>
                            <option></option>

                        </select>
                    </label>

                </div>

                <div className="saveContinue">
                    <button>Save & Continue</button>
                </div>
            </span>
        </div>



                








                

    );
};

export default GeneralInfo;