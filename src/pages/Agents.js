import React from 'react';
import Fond from "../components/Fond"
import Status from "../components/Status"
import Agent from "../components/Agents"
import Cate from '../components/Cate';
const Agents = () => {

    return (
        <div className='main '>
            <Status/>
            <Fond/>
            <Cate/>
            <Agent/>
            
        </div>
    );
};

export default Agents;