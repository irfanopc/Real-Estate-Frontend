import React from "react";
import "./AddProperty.css";
const AddNewProperty = () => {   
    return ( 
        <>
        <h3>ADD NEW PROPERTY</h3>

        <div className="addNewProperty">

 <div className="addNewPages">
    <div  className="tabs"><span>1</span> <div>Basic Info</div></div> 
     <div className="tabs"><span>2</span><div>Property Detail</div></div>
     <div className="tabs"><span>3</span><div>General Info</div></div>
     <div className="tabs"><span>4</span><div>Location Info</div></div>
 </div>

</div>
</>



);
};

export default AddNewProperty;