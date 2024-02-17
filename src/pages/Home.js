import React from 'react';
import Fond from "../components/Fond"
import Status from '../components/Status'
import Accueil from "../components/Accueil"
const Home = () => {
    
    return (
        <div className='main'>
            <Status/>
            <Fond/>
            <Accueil/>
        </div>
    );
};

export default Home;