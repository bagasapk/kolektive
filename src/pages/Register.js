import React, { useRef, useState } from "react";
import logoKolektive from "../logo/Logo.png";
import google from "../images/google.png";
import peep2 from "../images/big-image-2.png";
import { useForm } from "react-hook-form";
import AuthenticationService from "../services/AuthenticationService";
import GoogleLogin, { useGoogleLogin } from "react-google-login";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit, setError, formState, watch } = useForm();
  const { errors } = formState;
  const [success, setSuccess] = useState(false);
  const password = useRef({});
  password.current = watch("Password", "");
  // password.current = watch;

  const clientId =
    "1007961814003-4p65g13vnqa0q2q0p8buaf4civv37eqi.apps.googleusercontent.com";

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
            `Welcome Booster, Have fun!`,
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
    AuthenticationService.register(data)
      .then((response) => {
        localStorage.setItem("token", response.data.success.token);
        console.log(response.data);
        setSuccess(!success);
        if (!success) {
          Swal.fire(
            "Success!",
            `Welcome ${data.firstName}, Have fun!`,
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
    <div className="d-md-flex register">
      <div className="d-none col-md-6 d-md-block sideRegister p-4 text-start">
        <a href="/">
          <img
            className="logoKolektiveLP"
            alt="kolektive"
            src={logoKolektive}
          ></img>
        </a>
        <p className="col-xl-8 sideTitle pt-5 text-md-start mt-5 px-md-3 px-lg-5 text-xl-center">
          Dari Patungan, Raih Kenyataan
        </p>
        <p className="text-center sideText col-md-11 col-xl-8 pt-5 text-md-start p-md-3 px-lg-5 text-xl-center">
          Daftarkan diri anda dan anda bisa memiliki kesempatan untuk menjadI
          kolega dikolektive.com
        </p>
      </div>
      <div className="col-md-7 col-xl-8 formRegister p-4 p-md-0 p-lg-5 py-md-5 text-start">
        <h1 className="p-2 titleRegister text-start">Create Account</h1>
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
            {errors.firstName && (
              <span className="errorText text-start">
                This field is required
              </span>
            )}
            <input
              {...register("lastName", { required: true })}
              type="text"
              placeholder="Last Name"
            ></input>
            {errors.lastName && (
              <span className="errorText text-start">
                This field is required
              </span>
            )}
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
            ></input>
            {errors.email && (
              <span className="errorText text-start">
                This field is required
              </span>
            )}
            <input
              {...register("password", {
                required: "You must specify a password",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
              type="password"
              placeholder="Password"
            ></input>
            {errors.password && (
              <span className="errorText text-start">
                {errors.password.message}
              </span>
            )}
            <input
              {...register("c_password", {
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm Password"
            ></input>
            {errors.c_password && (
              <span className="errorText text-start">
                {errors.c_password.message}
              </span>
            )}
            {errors.apiError && (
              <span className="errorText text-start">
                Email sudah digunakan, silahkan login atau registrasi
                menggunakan email lain
              </span>
            )}
            <button className="px-5 mx-auto" type="submit">
              Sign Up
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
