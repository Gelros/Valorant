import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../assets/jett.png"

const Status = () => {
    let loc = window.location.href
    return (
        <div className="status">
              <img src={Logo} alt="logo Valorant" className='logo-valo'/>
              <div className="nav">
                
                    <li>
                        <NavLink className={`nav-link color ${loc.includes("agents") || loc.includes("armes") || loc.includes("cartes") ? "" : "color-active"}`} to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className={`nav-link color ${loc.includes("agents") ? "color-active" : ""}`} to="/agents">Agents</NavLink>
                    </li>
                    <li>
                        <NavLink className={`nav-link color ${loc.includes("cartes") ? "color-active" : ""}`} to="/cartes">Cartes</NavLink>
                    </li>
                    <li>
                        <NavLink className={`nav-link color ${loc.includes("armes") ? "color-active" : ""}`} to="/armes">Armes</NavLink>
                    </li>
                
              </div>  
        </div>
    );
};

export default Status;