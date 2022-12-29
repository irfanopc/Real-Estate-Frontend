
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./DisplayProp/Home";
import Sidebar from "./SideBar/Sidebar";

function App() {
  return (
    <BrowserRouter className="App">
    {/* <Sidebar/> */}
    <Home/>
    </BrowserRouter>
  )
}
export default App;