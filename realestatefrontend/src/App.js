
import './App.css';

import AddProperty from './components/AddProperty';
import BasicInfo from './components/BasicInfo';

import Signup from "./signUp/Signup";
import Signin from './signUp/Signin';
function App() {
  return (

    <div className="BasicInfo">
     <BasicInfo/>
      {/* <AddProperty/> */}

    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup/>} />
 
      </Routes>
    </BrowserRouter>

    

    </div>
  );
}

export default App;
