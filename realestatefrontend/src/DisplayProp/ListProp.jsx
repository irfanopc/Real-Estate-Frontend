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

  // useEffect(() => {
  //   axios
  //     .get("/userdetails")
  //     .then( (response) =>{
  //       console.log(response);
  //     })
  //     .catch( (error) =>{
  //       console.log(error);
  //     });

  // }, []);

  const [posts, setPosts] = useState();
  useEffect(() => {
    
    fetch("http://localhost:5000/userdetails/63adb6d33704aa9d7dcfb74c")
      .then((res) => res.json())
      .then((data) => {
    let userDetails =  (data.userProperties);
        setPosts(userDetails.map((data)=>{return (data)}));
        // console.log(posts);
      })
      .catch((error) => {
        if (error) console.log(error);
      });
  }, [])
  console.log(posts);

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
               <div className="dislist"></div>
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
              </>
            );
          })}
      </div>
   
  );
};

export default ListProp;
