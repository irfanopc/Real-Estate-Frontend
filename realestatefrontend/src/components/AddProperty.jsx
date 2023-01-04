import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProperty.css";
const AddNewProperty = () => {
  const [tab, setTab] = useState(window.location.pathname);

  return (
    <>
      <h3>ADD NEW PROPERTY</h3>

      <div className="addNewProperty">
        <div className="addNewPages">
          <div className={tab === "/basicInfo" ? "tabs" : "tabs2"}>
            <span>1</span> <div>Basic Info</div>
          </div>
          <div className={tab === "/propertyDetail" ? "tabs" : "tabs2"}>
            <span>2</span>
            <div>Property Detail</div>
          </div>
          <div className={tab === "/generalInfo" ? "tabs" : "tabs2"}>
            <span>3</span>
            <div>General Info</div>
          </div>
          <div className={tab === "/locationInfo" ? "tabs" : "tabs2"}>
            <span>4</span>
            <div>Location Info</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewProperty;
