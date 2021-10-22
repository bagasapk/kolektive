import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Donate from "./pages/Donate";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/donate" component={Donate} />
      </Router>
    </div>
  );
}

export default App;
