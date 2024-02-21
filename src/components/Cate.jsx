import React from 'react';


const Cate = ({item}) => {
  
    return (
        <div className='all'>
            {
                item?.map((e) => (
                    <div key={e.uuid} className="card">
                        <img src={e.displayIcon} alt="" />
                    </div>
                ))
            }
        </div>
    );
};

export default Cate;