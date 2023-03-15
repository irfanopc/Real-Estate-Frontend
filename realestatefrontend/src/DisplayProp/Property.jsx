import axios from "axios";
import { useNavigate } from "react-router-dom";
import Uslogo from "./HomeLogo/uslogo.svg";
import "./Property.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from "../store";

const Property = () => {
 

  const navigator = useNavigate()

  const email = store.getState().email;
  console.log(email);
  let setemail = email.split('@')[0]



    const handleLogout =  () => {
      axios.get('/api/v1/signout')
        .then((data)=> {
          store.dispatch({ type: 'LOGOUT' });
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
      <ToastContainer/>
    </div>

  );
};

export default Property;
