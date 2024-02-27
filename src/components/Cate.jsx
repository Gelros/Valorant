import React from 'react';
import {Link} from 'react-router-dom'


const Cate = ({item}) => {
  
    return (
        <div className='all'>
            {
                item?.map((e) => (
                    <Link to={`property/${e.uuid}`} key={e.uuid} className="card">
                        <img src={e.displayIcon} alt="" />
                    </Link>
                ))
            }
        </div>
    );
};

export default Cate;