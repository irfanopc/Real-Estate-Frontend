import axios from "axios";
import { useNavigate } from "react-router-dom";
import Uslogo from "./HomeLogo/uslogo.svg";
import "./Property.css";

const Property = () => {
 

  const navigator = useNavigate()

  let email = window.localStorage.getItem('email');
  let setemail = email.split('@')[0]



    const handleLogout =  () => {
      axios.get('https://realestatebackend0.onrender.com/api/v1/signout')
        .then((data)=> {
          localStorage.removeItem('email')
          localStorage.removeItem('id')
           alert(data.data.massage);
          navigator("/");
        })
        .catch((error)=>{
          console.log(error);
        })
    
      
    }


  
  return (
    <div className="display-property">
      <div className="user">
        <div className="right">
          USER ID : 06PPD125
          </div>
        <div className="left">
          <section>
            <div>
              <img src={Uslogo} alt={"User"} />
            </div>
            <div className="select">
              <select defaultValue={'Username'} onChange={handleLogout}>
                <option value="Username">
                 {`${setemail}`} 
                </option>
                <option value={'Sign Out'} >
                Sign Out
                </option>
              </select>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Property;
