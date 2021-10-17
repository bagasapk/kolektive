import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Register} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
