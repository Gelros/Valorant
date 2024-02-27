import React from 'react';
import vid from "../assets/ValoAnimFond.mp4"

const Fond = () => {
    const loc = window.location.href

    return (
        <div className="bloc">
            
            <video src={vid} autoPlay muted loop ></video>

            
            {
            loc === "http://localhost:3000/" ? 
            "" 
            :
            <div className="sombre delay"></div>
            }
            
            
        </div>
    );
};

export default Fond;