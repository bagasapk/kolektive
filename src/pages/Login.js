import React from "react";
import { MdOutlinePeople } from 'react-icons/md'
import logoLogin from "../images/logoLogin.png"
import Navbar from "../components/Navbar"

const Form = () => {
  return (
  // <Navbar/>
  <div className="borderBox">
    <img className="logoLogin" src={logoLogin}/>
    <div className="loginContainer">
      <form action="/">
        <div className="loginRow">
          <div className="borderBoxLogin">
            <div className="textLogin">
              SIGN IN
              </div>
              <h6 className="txtLogin mx-auto">You don’t think you should login first and behave like human not robot.</h6>
            <input 
              type="text"
              name="email"
              placeholder="Email"
              required
             ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              ></input>
          </div>
        </div>
        <div className="loginRow2">
          {/* <div className="checkbox">
            <input type="checkbox"></input>
            <p className="rememberMe">Remember Me</p>
          </div> */}
          <div className="login">
            <button className="buttonLgn" type="submit"> SIGN IN</button>
          </div>
          <p className="createAcc"> You are new? <a href="/create" style={{color:"tomato"}}> Create new </a></p>
          {/* <a href="/forget" className="forgotPassword">
            Forgot Password?
          </a> */}
        </div>
        <div className="login">
          <button className="buttonGgl" type="submit">SIGN IN WITH GOOGLE</button>
        </div>
        <div className="login">
          <button className="buttonFb" type="submit">SIGN IN WITH FACEBOOK</button>
        </div>
        <div className="loginRow2">
        
          <div className="/">
            {/* <a href="/register" className="signUp">
              Sign Up
            </a> */}
          </div>
        </div>
      </form>
    </div>
  </div>
  );
};
export default Form;
