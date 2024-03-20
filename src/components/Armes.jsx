import {React, useState} from 'react';
import Data from "../data/armes.json"
import ArmCard from './ArmCard';

const Armes = () => {
    
    const [item, setItem] = useState(Data)
    
    return (
        <div className='pos'>
            <ArmCard item={item}/>
        </div>
    );
};

export default Armes;