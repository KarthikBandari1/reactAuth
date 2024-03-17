import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import SignIn from "./components/SignIn"
import Dashboard from "./components/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <ProtectedRoute exact path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
  
  );
}

export default App;
