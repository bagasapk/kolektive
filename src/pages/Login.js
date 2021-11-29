import React, { useState } from "react";
import logoLoginz from "../images/logoLogin.png";
import { useForm } from "react-hook-form";
import AuthenticationService from "../services/AuthenticationService";
import GoogleLogin, { useGoogleLogin } from "react-google-login";
import google from "../images/google.png";
import Swal from "sweetalert2";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const clientId =
    "1007961814003-4p65g13vnqa0q2q0p8buaf4civv37eqi.apps.googleusercontent.com";
  const [success, setSuccess] = useState(false);
  const onSuccess = (res) => {
    // localStorage.setItem("token",'Bearer '+res.tokenId);
    AuthenticationService.loginGoogle(res.profileObj)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.success.token);
        setSuccess(!success);
        if (!success) {
          Swal.fire(
            "Success!",
            `Hello Booster, Let's help others!`,
            "success"
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            }
          });
        }
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
    AuthenticationService.login(data)
      .then((response) => {
        localStorage.setItem("token", response.data.success.token);
        console.log(response.data);
        setSuccess(!success);
        if (!success) {
          Swal.fire(
            "Success!",
            `Hello Booster, Let's help others!`,
            "success"
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            }
          });
        }
      })
      .catch((e) => {
        setError("apiError", { message: e });
      });

  return (
    // <Navbar/>
    <div className="borderBox">
      <img alt="logo" className="logoLogin" src={logoLoginz} />
      <div className="loginContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginRow">
            <div className="borderBoxLogin">
              <div className="textLogin">SIGN IN</div>
              <h6 className="txtLogin mx-auto">
                You don’t think you should login first and behave like human not
                robot.
              </h6>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="Email"
              ></input>
              {errors.email && (
                <p className="errorText text-center m-0">
                  This field is required
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                {...register("password", {
                  required: "This field is Required",
                })}
                placeholder="Password"
              ></input>
              {errors.password && (
                <p className="errorText text-center m-0">
                  This field is required
                </p>
              )}
            </div>
          </div>
          <div className="loginRow2">
            {/* <div className="checkbox">
            <input type="checkbox"></input>
            <p className="rememberMe">Remember Me</p>
          </div> */}
            <div className="login">
              <button className="buttonLgn" type="submit">
                {" "}
                SIGN IN
              </button>
            </div>
            {errors.apiError && (
              <p className="errorText text-center m-0">
                Email atau Password salah
              </p>
            )}
            <p className="createAcc">
              {" "}
              You are new?{" "}
              <a href="/register" style={{ color: "tomato" }}>
                {" "}
                Create new{" "}
              </a>
            </p>
            {/* <a href="/forget" className="forgotPassword">
            Forgot Password?
          </a> */}
          </div>
          <p className="titleRegister">OR</p>
          <GoogleLogin
            clientId={clientId}
            render={() => (
              <button
                style={{ border: "none" }}
                onClick={signIn}
                className="d-flex justify-content-between googleButton p-1 p-lg-2 mx-auto"
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
        </form>
      </div>
    </div>
  );
};
export default Form;
