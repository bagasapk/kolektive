import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Donate from "./pages/Donate";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Event from "./pages/Event";
import FormCampaign from "./pages/FormCampaign";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/event" component={Event} />
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/donate" component={Donate} />
        <Route path="/campaign" component={FormCampaign} />
      </Router>
    </div>
  );
}

export default App;
