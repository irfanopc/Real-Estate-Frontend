
import './App.css';

// import AddProperty from './components/AddProperty';
// import BasicInfo from './components/BasicInfo';

import Signup from "./signUp/Signup";
import Signin from './signUp/Signin';
import Home from './DisplayProp/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicInfo from './components/BasicInfo';

function App() {
  return (

 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/BasicInfo" element={<BasicInfo/>} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
