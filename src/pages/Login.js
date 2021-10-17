import React from "react";

const Form = () => {
  return (
    <div className="loginContainer">
      <form action="/">
        <div className="loginRow">
          <div className="borderBoxLogin">
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
          <div className="checkbox">
            <input type="checkbox"></input>
            <p className="rememberMe">Remember Me</p>
          </div>
          <div className="login">
            <input type="submit" value="Login"></input>
          </div>
          <a href="/forget" className="forgotPassword">
            Forgot Password?
          </a>
        </div>
        <div className="loginRow2">
          OR
          <div className="/">
            <a href="/register" className="signUp">
              Sign Up
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
