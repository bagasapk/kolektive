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
import TransactionTable from "./pages/TransactionTable";
import PrivateRoute from "./services/PrivateRoute";
import RestrictedRoute from "./services/RestrictedRoute";
import Admin from "./pages/Admin";
import AdminRoute from "./services/AdminRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landingpage} />
        <PrivateRoute path="/campaign" component={FormCampaign} />
        <Route exact path="/event" component={Event} />
        <PrivateRoute path="/event/:id" component={Donate} />
        <RestrictedRoute path="/register" component={Register} />
        <PrivateRoute path="/transactions" component={TransactionTable} />
        <PrivateRoute path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

export default App;
