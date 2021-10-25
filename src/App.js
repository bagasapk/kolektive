import logo from './logo.svg';
import './App.css';
import Login from'./pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import CarouselImg from './components/CarouselImg';
import { CarouselData } from './components/CarouselData'
import Event from "./pages/Event"

function App() {
  return (
    <div className="App">
        <Router>
        {/* <Navbar/>
        <CarouselImg slides={CarouselData}/> */}
        <Route path="/navbar" component={Navbar}/>
        <Route path="/login" component={Login}/>
        <Route path="/event" component={Event}/>
    </Router>
      </div>
  );
}

export default App;
