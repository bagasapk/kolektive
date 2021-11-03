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
        <Route exact path="/" />row col-md-8 mx-auto my-5 py-2 p-5 campaignInput rounded
        <Route path="/donate" component={Donate} />
        <Route path="/campaign" component={FormCampaign} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
