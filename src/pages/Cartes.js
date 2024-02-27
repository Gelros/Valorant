import React from 'react';
import Fond from "../components/Fond"
import Status from '../components/Status'
import Map from '../components/Map';

const Cartes = () => {
    return (
        <div className='main '>
            <Status/>
            <Fond/>
            <Map/>
        </div>
    );
};

export default Cartes;