
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./signUp/Signup";
import Signin from './signUp/Signin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/home" element={"welcome to home page"} />
      </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
