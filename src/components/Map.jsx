import React, {useState} from 'react';
import Data from "../data/map.json"
import Cate from './Cate';

const Map = () => {

    const [item, setItem] = useState(Data)
    console.log(item);

    return (
        <div className='pos'>
            <Cate item={item}/>
        </div>
    );
};

export default Map;