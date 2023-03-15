
import './App.css';
import Signup from "./signUp/Signup";
import Signin from './signUp/Signin';
import PropertyDetail from './components/PropertyDetail';
import GeneralInfo from './components/GeneralInfo';
import LocationInfo from './components/LocationInfo';
import Home from './DisplayProp/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicInfo from './components/BasicInfo';


function App() {
  return (

 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/basicInfo" element={<BasicInfo/>} /> 
        <Route path="/propertyDetail" element={<PropertyDetail/>} />
        <Route path="/generalInfo" element={<GeneralInfo/>} />
         <Route path="/locationInfo" element={<LocationInfo/>} />
      </Routes>  


    </BrowserRouter>
     
  );
}

export default App;
