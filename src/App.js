import logo from './logo.svg';
import './App.css';
import Login from'./pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Route path="/" component={Login}/>
    </Router>
      </div>
  );
}

export default App;
