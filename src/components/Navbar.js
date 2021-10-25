import React, { useState} from "react";
import { FormControl } from "react-bootstrap";
import logoKolektive from "../images/logoKolektive.png"
import { AiOutlineSearch } from 'react-icons/ai'

export default function Navbar(){
    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    <img className="logoKolektive" src={logoKolektive}/>
                    <a href="/explore"> EXPLORE </a>
                </div>
            </div>
            {/* <button>open</button>    */}
            <div className="rightSide">
                <input type="text" placeholder="Search..."/>
                <button type="submit"> <AiOutlineSearch/> </button>
            </div>
        </div>

    )
} 