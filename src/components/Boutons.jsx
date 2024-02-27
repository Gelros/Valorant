import React from 'react';
import Data from "../data/persos.json"
import Logo from "../assets/logo-valo.png"

const Boutons = ({menuCategories, filterItems, setItem, itemSelected, itemNumber}) => {

    return (
        <div className='cat'>

            <button className="btn" color onClick={() => setItem(Data)}>
                        <img className='val' src={Logo} alt="" />
            </button>
            {
                menuCategories.map((e) => (
                    <button className={`btn color ${itemNumber > 10 ? "" : e === itemSelected ? "color2" : ""}`} onClick={() => filterItems(e)} key={e}>
                        {e}
                    </button>
                ))
            }
            
        </div>
    );
};

export default Boutons;