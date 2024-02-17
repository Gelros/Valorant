import React from 'react';
import Fond from "../components/Fond"
import Status from "../components/Status"
import  Agent from "../components/Agents"
import data from "../data/persos.json"
const Agents = () => {

    return (
        <div className='main '>
            <Status/>
            <Fond/>
            <Agent Data={data}/>
        </div>
    );
};

export default Agents;