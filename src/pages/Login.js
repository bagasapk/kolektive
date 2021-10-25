import React from "react";
import logoLogin from "../images/logoLogin.png"
import { useForm } from "react-hook-form";
import AuthenticationService from "../services/AuthenticationService";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) =>
    AuthenticationService.login(data)
      .then((response) => {
        localStorage.setItem("token", response.data.success.token);
        console.log(response.data);
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
      });
  return (
  // <Navbar/>
  <div className="borderBox">
    <img alt="logo" className="logoLogin" src={logoLogin}/>
    <div className="loginContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="loginRow">
          <div className="borderBoxLogin">
            <div className="textLogin">
              SIGN IN
              </div>
              <h6 className="txtLogin mx-auto">You don’t think you should login first and behave like human not robot.</h6>
            <input 
              type="text"
              {...register("email", { required: true })}
              placeholder="Email"
              required
             ></input>
          </div>
          <div>
            <input
              type="password"
              {...register("password", { required: true })}
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
