import React from "react";
import logoKolektive from "../logo/Logo.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import peep2 from "../images/big-image-2.png";
import { useForm } from "react-hook-form";
import AuthenticationService from "../services/AuthenticationService";

const Register = () => {
  const { register, handleSubmit } = useForm();

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
    <div className="d-flex">
      <div className="sideRegister p-4 text-start">
        <img
          className="img-fluid w-50"
          alt="kolektive"
          src={logoKolektive}
        ></img>
        <p className="sideTitle pt-5">Dari Patungan, Raih Kenyataan</p>
      </div>
      <div className="formRegister p-5 text-start">
        <h1 className="p-2 titleRegister">Create Account</h1>
        <div className="px-5 mx-4">
          <div className="borderRegister"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="inputRegister d-flex flex-column justify-content-between pt-4"
          >
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="First Name"
            ></input>
            <input type="text" placeholder="Last Name"></input>
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
          <div className="d-flex justify-content-around">
            <div className="d-flex justify-content-between googleButton p-2">
              <img
                className="rounded"
                style={{ background: "white" }}
                alt="google"
                src={google}
              ></img>
              <p className="m-0 align-self-center googleText">
                SIGN IN WITH GOOGLE
              </p>
            </div>
            <div className="d-flex justify-content-between facebookButton p-2">
              <img
                className="p-1 rounded"
                style={{ background: "white" }}
                alt="google"
                src={facebook}
              ></img>
              <p className="m-0 align-self-center googleText">
                SIGN IN WITH FACEBOOK
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="peep">
        <img alt="peep2" src={peep2}></img>
      </div>
    </div>
  );
};

export default Register;
