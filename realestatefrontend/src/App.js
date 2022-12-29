
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"; 



import Signup from "./signUp/Signup";
import Signin from './signUp/Signin';
import Home from './DisplayProp/Home';

function App() {
  return (
    <div className="App">

   
      
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
     

    
    </div>
  );
}

export default App;
