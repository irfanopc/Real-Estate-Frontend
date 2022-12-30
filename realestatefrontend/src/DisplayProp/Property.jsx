import React from "react";
import Uslogo from "./HomeLogo/uslogo.svg";
import "./Property.css";

const Property = () => {
  return (
    <div className="display-property">
      <div className="user">
        <div className="right">USER ID : 06PPD125</div>
        <div className="left">
          <section>
            <div>
              <img src={Uslogo} alt={"User"} />
            </div>
            <div className="select">
              <select defaultValue={'Username'}>
                <option value="Username">
                  User Name
                </option>
                <option value="Sign-Out">Sign Out</option>
              </select>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Property;
