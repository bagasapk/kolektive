import React from "react";
import logoKolektive from "../images/logoKolektive.png"
import { AiOutlineSearch } from 'react-icons/ai'

export default function Navbar(){
    // const [showLinks, setShowLinks] = useState(false);
    return (
        <div className="NavbarLP" style={{justifyContent:"center"}}>
            <div className="leftSide">
                <div className="links">
                    <img alt="logo" className="logoKolektiveLP" src={logoKolektive} style={{alignItems:"center",display:"center"}}/>
                </div>
            </div>
            <div className="rightSide"style={{justifyContent:"flex-end",display:"flex",float:"right"}}>
                <div className="links">
                    <a href="/explore"> HOME </a>
                    <a href="/event">EVENT</a>
                    <a href="/news">NEWS</a>
                </div>
            </div>
            <button className="btnRegis">Register</button>
            <button className="btnLgn">Sign In</button>
        </div>

    )
} 