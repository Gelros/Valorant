import React from 'react';
import Data from "../data/map.json"
import { useParams } from 'react-router-dom';

const MapCard = () => {
    const params = useParams()
    const id = params.id
    const data = Data.find((data) => data.name === id)
    
    return (
        <div className='map-det bg1'>
            <div className="map-desc">
                <div className="map-text">
                    <div className="bgtext">
                     <img src={data.background} alt="" />
                     <div className="container-text">
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                     </div>
                    </div>
                </div>

                <div className="map-plan">
                    <img src={data.lien} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MapCard;