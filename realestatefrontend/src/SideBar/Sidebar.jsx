import React from "react";
import "./Sidebar.css";
import Plogo from "./plogo.svg";
import Alogo from "./alogo.svg";
import RIlogo from "./Rilogo.svg";
import Silogo from "./Silogo.svg";
import pvlogo from "./pvlogo.svg";
import tplogo from "./tplogo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="list">
        <section className="logo">
          <h1>Logo</h1>
        </section>

        <section>
          <img src={Plogo} alt={"property"} />
          <h4>Property</h4>
        </section>

        <section>
          <img src={Alogo} alt={"property"} />
          <h4>Assistance</h4>
        </section>

        <section className="special">
          <img src={RIlogo} alt={"property"} />
          <h4>Received Interes</h4>
        </section>

        <section className="special">
          <img src={Silogo} alt={"property"} />
          <h4>Sent Interest</h4>
        </section>

        <section>
          <img src={pvlogo} alt={"property"} />
          <h4 className="">Property Views</h4>
        </section>

        <section>
          <img src={tplogo} alt={"property"} />
          <h4>Tariff Plan</h4>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
