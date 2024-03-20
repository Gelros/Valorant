import React from 'react';
import Fond from "../components/Fond"
import Status from '../components/Status'
import Weapons from "../components/Armes"

const Armes = () => {
    return (
        <div className='main '>
            <Status/>
            <Fond/>
            <Weapons/>
        </div>
    );
};

export default Armes;