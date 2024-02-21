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
                        <NavLink className={`nav-link color ${loc === "http://localhost:3000/" ? "color-active" : ""}`} to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className={`nav-link color ${loc === "http://localhost:3000/agents" ? "color-active" : ""}`} to="/agents">Agents</NavLink>
                    </li>
                    <li>
                        <NavLink className={`nav-link color ${loc === "http://localhost:3000/cartes" ? "color-active" : ""}`} to="/cartes">Cartes</NavLink>
                    </li>
                    <li>
                        <NavLink className={`nav-link color ${loc === "http://localhost:3000/esport" ? "color-active" : ""}`} to="/esport">Esport</NavLink>
                    </li>
                
              </div>  
        </div>
    );
};

export default Status;