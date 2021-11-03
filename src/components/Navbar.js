import React, { useState } from "react";
import logoKolektive from "../images/logoKolektive.png";
import { AiOutlineSearch } from "react-icons/ai";
import Popup from "./Popup";
import Login from '../pages/Login'

export default function Navbar() {
  // const [showLinks, setShowLinks] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links">
          <img alt="logo" className="logoKolektive" src={logoKolektive} />
          <a href="/explore"> EXPLORE </a>
        </div>
      </div>
      {/* <button>open</button>    */}
      <div className="rightSide">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <AiOutlineSearch />
        </button>
        <button className="d-none d-md-block" type="button" onClick={togglePopup}>
          Masuk
        </button>
      </div>
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
  );
}
