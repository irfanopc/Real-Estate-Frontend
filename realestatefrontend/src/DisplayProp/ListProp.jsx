import React from "react";
import "./ListProp.css";
import Imglogo from "./HomeLogo/imglogo.svg";
import Eyelogo from "./HomeLogo/eyelogo.svg";
import Editlogo from "./HomeLogo/editlogo.svg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ListProp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/userdetails")
      .then( (response) =>{
      })
      .catch( (error) =>{
        console.log(error);
      });

  }, []);
 

  return (
    <div className="mainList">
      <div className="listprop">
        <div>PPD ID</div>
        <div>Image</div>
        <div>Property</div>
        <div>Contact</div>
        <div>Area</div>
        <div>Views</div>
        <div>Status</div>
        <div>Days Left</div>
        <div>Action</div>
      </div>

      <div className="dislist">
        <div>PPD125</div>
        <div>
          <img src={Imglogo} alt={"img"} />
        </div>
        <div>Plot</div>
        <div>93701723482</div>
        <div>1200</div>
        <div>22</div>
        <div>Sold</div>
        <div>35</div>
        <div className="action">
          <img src={Eyelogo} alt="eye" />

          <img src={Editlogo} alt="edit" />
        </div>
      </div>

      <div className="dislist">
        <div>PPD125</div>
        <div>
          <img src={Imglogo} alt={"img"} />
        </div>
        <div>Plot</div>
        <div>93701723482</div>
        <div>1200</div>
        <div>22</div>
        <div>Sold</div>
        <div>35</div>
        <div className="action">
          <img src={Eyelogo} alt="Eye" />

          <img src={Editlogo} alt="Edit" />
        </div>
      </div>
    </div>
  );
};

export default ListProp;
