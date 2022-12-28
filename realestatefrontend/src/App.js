import "./App.css";

import Signup from "./signUp/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./signUp/Signin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
