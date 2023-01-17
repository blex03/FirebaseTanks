import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Page Components
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>

          <Route path = "/Signup">
            <Signup />
          </Route>

          <Route path = "/Login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
