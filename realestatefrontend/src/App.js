
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./signUp/Signup";
import Signin from './signUp/Signin';
import PropertyDetail from './components/PropertyDetail';
import GeneralInfo from './components/GeneralInfo';
import LocationInfo from './components/LocationInfo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/PropertyDetail" element={<PropertyDetail/>} />
        <Route path="/GeneralInfo" element={<GeneralInfo/>} />

        <Route path="/LocationInfo" element={<LocationInfo/>} />
      </Routes>  

     
    </BrowserRouter>
    
    </div>
  );
}

export default App;
