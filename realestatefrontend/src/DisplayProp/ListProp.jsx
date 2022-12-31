import React from "react";
import "./ListProp.css";
import Imglogo from "./HomeLogo/imglogo.svg";
import Eyelogo from "./HomeLogo/eyelogo.svg";
import Editlogo from "./HomeLogo/editlogo.svg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ListProp = ({user}) => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
   
    fetch(`http://localhost:5000/userdetails/63adb6d33704aa9d7dcfb74c`)
      .then((res) => res.json())
      .then((data) => {
        let userDetails = data.userProperties.map((obj)=>{
          return {
            email : obj.email,
            properties : obj.properties.map(properyDetail=>properyDetail)
          }
        })
      userDetails.map((data)=>{
        let user = data.properties;
        //console.log(user);
        setPosts(user);
      })
        
      })
      .catch((error) => {
        if (error) console.log(error);
      });
  }, [])
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

     
        {posts &&
          posts.map((data) => {
            return (
              <>
               <div className="dislist">
                <div>{data.ppdId}</div>
                <div>
                  <img src={Imglogo} alt={"img"} />
                </div>
                <div>Plot</div>
                <div>{data.mobile}</div>
                <div>1200</div>
                <div>{data.views}</div>
                <div>{data.status}</div>
                <div>{data.daysLeft}</div>
                <div className="action">
                  <img src={Eyelogo} alt="Eye" />
                  <img src={Editlogo} alt="Edit" />
                </div>
                </div>
              </>
            );
          })}
      </div>
   
  );
};

export default ListProp;
