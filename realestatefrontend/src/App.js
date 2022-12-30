
import './App.css';

// import AddProperty from './components/AddProperty';
// import BasicInfo from './components/BasicInfo';

import Signup from "./signUp/Signup";
import Signin from './signUp/Signin';
import Home from './DisplayProp/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
