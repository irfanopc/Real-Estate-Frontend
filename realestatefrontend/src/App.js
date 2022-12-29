
import './App.css';

import Signup from "./signUp/Signup";
import Signin from './signUp/Signin';
function App() {
  return (
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
