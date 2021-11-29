import React, { useState } from "react";
import logoKolektive from "../images/logoKolektive.png";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import Login from "../pages/Login";
import Popup from "./Popup";
import { GoogleLogout } from "react-google-login";
import { set } from "react-hook-form";
import Swal from "sweetalert2";

export default function Navbar() {
  // const [showLinks, setShowLinks] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle = () => {
    setToggleOn(toggleOn ? false : true);
    console.log(toggleOn);
  };

  const logoutAccount = () => {
    localStorage.removeItem("token");
    setSuccess(!success);
    if (!success) {
      Swal.fire("Sucess Logout!", "See you later!", "success").then(
        (result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          }
        }
      );
    }
  };

  const clientId =
    "1007961814003-4p65g13vnqa0q2q0p8buaf4civv37eqi.apps.googleusercontent.com";

  const isLoggedIn = localStorage.getItem("token");
  return (
    <div
      style={toggleOn ? { height: "auto", display: "inline" } : {}}
      className="NavbarLP"
    >
      <div className="col-xl-12 col-md-7 col-lg-7 navbarBorder d-flex justify-content-around">
        <div className="leftSide">
          <div className="links">
            <a href="/">
              <img
                alt="logo"
                className={`logoKolektiveLP ${toggleOn ? "d-none" : "d-block"}`}
                src={logoKolektive}
                style={{ alignItems: "center", display: "center" }}
              />
            </a>
            <button
              type="button"
              className="borderNone d-md-none"
              onClick={handleToggle}
            >
              <IoIosPlay
                style={{ fontSize: "3rem", color: "white" }}
                className={toggleOn ? "d-none" : "d-block "}
              />
              <IoIosPause
                style={{ fontSize: "3rem", color: "white" }}
                className={toggleOn ? "d-block" : "d-none"}
              />
            </button>
          </div>
        </div>
        <div
          className="rightSide"
          style={
            {
              // justifyContent: "flex-end",
              // display: "flex",
              // float: "right",
            }
          }
        >
          <div
            className={` links d-flex align-items-center ${
              toggleOn ? "d-block flex-column" : "d-none d-md-flex"
            }`}
          >
            <a href="/#"> HOME </a>
            <a href="/event">EVENT</a>
            {isLoggedIn ? <a href="/transactions">TRANSACTION</a> : null}
          </div>
        </div>
      </div>
      {isLoggedIn ? (
        <div
          className={`d-md-block flex-wrap col-lg-12 d-md-flex justify-content-lg-start justify-content-xl-center ${
            toggleOn ? "d-block" : "d-none"
          }`}
        >
          <button className="btnRegis">Hello</button>
          {/* <GoogleLogout
            clientId={clientId}
            render={(renderProps) => (
            )}
            onLogoutSuccess={logoutAccount}
          ></GoogleLogout> */}
          <button onClick={logoutAccount} className="btnLgn">
            Logout
          </button>
        </div>
      ) : (
        <div
          className={`d-md-block flex-wrap col-lg-12 d-md-flex justify-content-lg-start justify-content-xl-center ${
            toggleOn ? "d-block" : "d-none"
          }`}
        >
          <button
            onClick={() => (window.location.href = "/register")}
            className="btnRegis"
          >
            Register
          </button>
          <button onClick={togglePopup} className="btnLgn">
            Sign In
          </button>
          {isOpen && (
            <Popup
              content={
                <>
                  <Login></Login>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      )}
    </div>
  );
}
