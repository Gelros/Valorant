import React from 'react';
import vid from "../assets/ValoAnimFond.mp4"

const Fond = () => {
    const loc = window.location.href
    let locClear = loc.substring(22)
    return (
        <div className="bloc">
            
            <video src={vid} autoPlay muted loop ></video>

            
            {
            locClear === "" ?
            "" 
            :
            <div className="sombre delay"></div>
            }
            
            
        </div>
    );
};

export default Fond;