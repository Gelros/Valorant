import {React, useState} from 'react';
import Data from '../data/persos.json'

const Cate = () => {

const tableau = [

    {
        "name" : "Initiateur",
        "role": "initiator"
    },
    {
        "name" : "Sentinelle",
        "role": "Sentinel"
    },
    {
        "name" : "Dueliste",
        "role": "Duelist"
    },
    {
        "name" : "Controlleur",
        "role": "Controler"
    }
]
    
    const [target, setTarget] = useState("")

    const change = (e) => {
        setTarget(e.target.attributes.value.value)
    }
  
    console.log(target);
    console.log(Data.data[0].role.displayName.includes(target));
   
    return (
        <div className='categories'>
            {
                tableau.map((e) => 
                    <ul>
                        <li className='color cursor' onClick={change} value={e.role}>{e.name}</li>
                    </ul>
                )
            }
        </div>
    );
};

export default Cate;