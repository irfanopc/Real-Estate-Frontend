import React from "react";
import "./GeneralInfo.css";
import Property from "../DisplayProp/Property";
import AddNewProperty from "./AddProperty";
import Sidebar from "../SideBar/Sidebar";





const GeneralInfo = () => {
  return (
    <>
      <div className="home">

      <section className='one'>
     <Sidebar/>
    </section>

        <section className="two">
          <Property />
          <AddNewProperty />
          <div className="maincontainer">
            <div className="row">
              <div>
                <span>Name</span>

                <div className="selectBox">
                  <select defaultValue={"toilet"} className="selectBox">
                    <option value={"toilet"}>Owner</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>Mobile</span>
                <div className="selectBox">
                  <input
                    className="selectBox"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span>Posted by</span>

                <div className="selectBox">
                  <select defaultValue={"toilet"} className="selectBox">
                    <option value={"toilet"}>Posted by</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>Sale Type</span>
                <div className="selectBox">
                  <select defaultValue={"toilet"} className="selectBox">
                    <option value={"toilet"}>Please Select</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span>Featured Package</span>

                <div className="selectBox">
                  <select defaultValue={"toilet"} className="selectBox">
                    <option value={"toilet"}>Please Select</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>PPD Package</span>
                <div className="selectBox">
                  <select defaultValue={"toilet"} className="selectBox">
                    <option value={"toilet"}>Please Select</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="filephoto">
            <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/camera-274-123431.png' alt='pic' />
            <input type="file" id="photo" name="file" style={{visibility:"hidden"}}/>
        </div>

          <div className="newbuttoncontainer">
            <div className="newbutton">
              <button>Previous</button>
            </div>

            <div className="newbutton">
              <button>Save & Continue</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GeneralInfo;
