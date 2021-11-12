import React, { useState } from "react";
import logoKolektive from "../images/logoKolektive.png";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import Login from "../pages/Login";
import Popup from "./Popup";
import { GoogleLogout } from "react-google-login";

export default function Navbar() {
  // const [showLinks, setShowLinks] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle = () => {
    setToggleOn(toggleOn ? false : true);
    console.log(toggleOn);
  };

  const logoutAccount = () => {
    localStorage.removeItem("token");;
    window.location.href = "/";
  };


  const clientId =
    "1007961814003-4p65g13vnqa0q2q0p8buaf4civv37eqi.apps.googleusercontent.com";

  const isLoggedIn = localStorage.getItem("token");
  return (
    <div style={toggleOn ? { height: "auto" } : {}} className="NavbarLP">
      <div className="col-xl-12 navbarBorder d-flex justify-content-around">
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
                className={toggleOn ? "d-none" : "d-block"}
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
            <a href="/transactions">TRANSACTION</a>
          </div>
        </div>
      </div>
      {isLoggedIn ? (
        <div
          className={`d-md-block col-3 flex-wrap col-lg-12 d-flex justify-content-lg-center ${
            toggleOn ? "d-block" : "d-none"
          }`}
        >
          <button className="btnRegis">Hello</button>
          <GoogleLogout
            clientId={clientId}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="btnLgn">
                Logout
              </button>
            )}
            onLogoutSuccess={logoutAccount}
          ></GoogleLogout>
        </div>
      ) : (
        <div
          className={`d-md-block col-3 flex-wrap col-lg-12 d-flex justify-content-lg-center ${
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
