import React from "react";
import "./ListProp.css";
import Imglogo from "./HomeLogo/imglogo.svg";
import Eyelogo from "./HomeLogo/eyelogo.svg";
import Editlogo from "./HomeLogo/editlogo.svg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ListProp = () => {
  
  
  const [posts, setPosts] = useState();
  
  useEffect(() => {
    const id = window.localStorage.getItem("id")
    
    axios(`/userdetails/${id}`)
    .then((data) => {
         let user = (data.data.userProperties);
        const property = user.map((obj) => {
          return {
            property: obj.properties.map(prop => prop)
          }
        })
    
        property.map((data)=> {
          let user = data.property;
              setPosts(user)
          
        })
      
      }).catch((error) => {
      console.log(error);
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
<div>
     
        {posts &&
          posts.map((data,i) => {
            return (
              <>
               <div className="dislist" key={i}>
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
      </div>
   
  );
};

export default ListProp;
