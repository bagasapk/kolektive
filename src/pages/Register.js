import React from "react";
import logoKolektive from "../logo/Logo.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import peep2 from "../images/big-image-2.png";
import { useForm } from "react-hook-form";
import AuthenticationService from "../services/AuthenticationService";
import GoogleLogin, { useGoogleLogin } from "react-google-login";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const clientId =
    "1007961814003-4p65g13vnqa0q2q0p8buaf4civv37eqi.apps.googleusercontent.com";

  const onSuccess = (res) => {
    // localStorage.setItem("token",'Bearer '+res.tokenId);
    AuthenticationService.loginGoogle(res.profileObj)
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.success.token);
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  const onFailure = (res) => {
    console.log("Login Failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  const onSubmit = (data) =>
    AuthenticationService.register(data)
      .then((response) => {
        localStorage.setItem("token", response.data.success.token);
        console.log(response.data);
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
      });

  return (
    <div className="d-md-flex register">
      <div className="d-none col-md-6 d-md-block sideRegister p-4 text-start">
        <img
          className="img-fluid w-50"
          alt="kolektive"
          src={logoKolektive}
        ></img>
        <p className="col-xl-8 sideTitle pt-5 text-md-start px-md-3 px-lg-5 text-xl-center">
          Dari Patungan, Raih Kenyataan
        </p>
      </div>
      <div className="col-md-7 col-xl-8 formRegister p-4 p-md-0 p-lg-5 py-md-5 text-start">
        <h1 className="p-2 titleRegister text-center">Create Account</h1>
        <div className="px-3 px-md-5 mx-md-5 mx-lg-0">
          <div className="borderRegister"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="inputRegister d-flex flex-column justify-content-between pt-4"
          >
            <input
              {...register("firstName", { required: true })}
              type="text"
              placeholder="First Name"
            ></input>
            <input
              {...register("lastName", { required: true })}
              type="text"
              placeholder="Last Name"
            ></input>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
            ></input>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
            ></input>
            <input
              {...register("c_password", { required: true })}
              type="password"
              placeholder="Confirm Password"
            ></input>
            <button className="px-5 mx-auto" type="submit">
              Create
            </button>
          </form>
          <div className="text-center">
            <span className="spanReg">
              Already have account?{" "}
              <a href="/" style={{ color: "tomato", fontWeight: "bold" }}>
                Go here
              </a>
            </span>
          </div>
          <div className="d-flex justify-content-center pt-1">
            <p className="titleRegister">OR</p>
          </div>
          <div className="d-lg-flex justify-content-center flex-lg-wrap">
            <GoogleLogin
              clientId={clientId}
              render={() => (
                <button
                  style={{ border: "none" }}
                  onClick={signIn}
                  className="d-flex justify-content-center googleButton p-1 p-lg-2 mx-auto"
                >
                  <img
                    className="rounded"
                    style={{ background: "white" }}
                    alt="google"
                    src={google}
                  ></img>
                  <p className="m-0 p-2 align-self-center googleText">
                    SIGN IN WITH GOOGLE
                  </p>
                </button>
              )}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
      <div className="d-none d-md-none d-lg-block peep">
        <img className="img-fluid" alt="peep2" src={peep2}></img>
      </div>
    </div>
  );
};

export default Register;
