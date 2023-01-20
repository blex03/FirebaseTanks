import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Page Components
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/Signup" element = {<Signup />} />
          <Route path = "/Login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
