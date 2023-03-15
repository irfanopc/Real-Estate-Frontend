import React from "react";
import "./ListProp.css";
import Imglogo from "./HomeLogo/imglogo.svg";
import Eyelogo from "./HomeLogo/eyelogo.svg";
import Editlogo from "./HomeLogo/editlogo.svg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import store from "../store";

const ListProp = () => {
  const [photo, setPhoto] = useState(false);
  const [status, setStatus] = useState(false);
   const [clickedId, setClickeId] = useState('');

  const [days, setDays] = useState(true);



  const [posts, setPosts] = useState();
  const id = store.getState().userId;
  console.log(id);

  useEffect(() => {
    axios
      .get(`/userdetails/${id}`) 
      .then((data) => {
        let user = data.data.userProperties;
        const property = user.map((obj) => {
          return {
            property: obj.properties.map((prop) => prop),
          };
        });

        property.map((data) => {
          let user = data.property;
          return setPosts(user);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);



  // const [search, setSearch] = useState(false);
  // const [searchPpd, setSearchPpd] = useState('');

// useEffect(()=>{
//   axios('/search/PPID7025')
//   .then((data)=> {
//     setSearch(true)
//     setSearchPpd(data.data.List.ppdId)
//     console.log(searchPpd);
//   })

// },[])
  


  return (
    <>
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
      </div>
      <div>
        {posts && posts.length > 0 ? (
          posts.map((data) => {
            return (
              <div className="dislist" key={data._id}>
                <div>{data.ppdId}</div>
                <div
                  onClick={() => {
                    setPhoto(photo ? false : true);
                    setClickeId(data._id);
                  }}
                  className="imgClass"
                >
                  <img
                    src={
                      photo && clickedId === data._id ? data.siteImage : Imglogo
                    }
                    alt={"img"}
                  />
                </div>
                <div>Plot</div>
                <div>{data.mobile}</div>
                <div>1200</div>
                <div>{data.views}</div>
                <div
                  onClick={() => {
                    setStatus(true);
                  }}
                  className="statusClass"
                >
                  {status ? "Sold" : ` ${data.status}`}
                </div>
                {status === true ? <p>00</p> : <div>{data.daysLeft}</div>}
                <div className="action">
                  <img src={Eyelogo} alt="Eye" />

                  <img src={Editlogo} alt="Edit" />
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="noprop">No Property Detail Added yet</h1>
        )}
      </div>
    </>
  );
};

export default ListProp;
