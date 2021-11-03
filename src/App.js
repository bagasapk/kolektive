import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Donate from "./pages/Donate";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Event from "./pages/Event";
import Landingpage from "./pages/Ladingpage";
import FormCampaign from "./pages/FormCampaign";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landingpage} />
        <Route path="/campaign" component={FormCampaign} />
        <Route path="/donate" component={Donate} />
        <Route path="/event" component={Event} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
