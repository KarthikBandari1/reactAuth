import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
//import Dashboard from "./components/Dashboard";
//import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        {/* <ProtectedRoute exact path="/" component={Dashboard} /> */}
      </Switch>
    </Router>
  );
}

export default App;
