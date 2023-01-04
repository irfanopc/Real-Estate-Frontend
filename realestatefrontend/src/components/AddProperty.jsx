import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProperty.css";
const AddNewProperty = () => {   

    const [tab, setTab] = useState(window.location.pathname);

    
    const navigator=useNavigate();

    return ( 
        <>
        <h3>ADD NEW PROPERTY</h3>

        <div className="addNewProperty">

 <div className="addNewPages">
    <div  className={tab ===  "/BasicInfo" ? 'tabs' : 'tabs2'}><span>1</span> <div>Basic Info</div></div>
     <div  className={tab ===  "/PropertyDetail" ? 'tabs' : 'tabs2'}><span>2</span><div>Property Detail</div></div>
     <div  className={tab ===  "/GeneralInfo" ? 'tabs' : 'tabs2'}><span>3</span><div>General Info</div></div>
     <div  className={tab ===  "/LocationInfo" ? 'tabs' : 'tabs2'}><span>4</span><div>Location Info</div></div>
 </div>

</div>
</>



);
};

export default AddNewProperty;