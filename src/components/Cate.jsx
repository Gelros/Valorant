import React from 'react';
import {Link} from 'react-router-dom'


const Cate = ({item}) => {

    let loc = window.location.href
  
    return (
        <div className='all'>
            {
                loc.includes("agents") ?
                item?.map((e) => (
                    <Link to={`/${e.uuid}`} key={e.uuid} className="card">
                        <img src={e.displayIcon} alt="" />
                    </Link>
                )) :

                item?.map((e) => (
                    <Link to={`/cartes/${e.name}`} key={e.name} className="map-card">
                        <div className="container">
                            <img src={e.background} alt={e.name} className='bg-map' />
                            <h1>{e.name}</h1>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Cate;