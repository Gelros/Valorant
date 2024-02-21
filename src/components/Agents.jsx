import {React, useState} from 'react';
import Data from "../data/persos.json"
import Cate from "./Cate"
import Boutons from "./Boutons"

const Agents = () => {
      
    //Stockage tableau de donnée persos dans un useState pour exporter la data
    const [item, setItem] = useState(Data)
    //Tableau pour les categories
    const menuCategories = [...new Set(Data.map((e) => e.categorie))]
    // Permet de filtrer la categorie selctionnée et de renvoyer le tableau filtrer
    const filterItems = (e) => {
        const newItems = Data.filter((newval) => newval.categorie === e)
        setItem(newItems)
    }

    let itemSelected = item[0].categorie

    let itemNumber = item.length
    
    return (
        <div className='pos agent'>
            <Boutons 
            menuCategories={menuCategories}
            filterItems={filterItems}
            setItem={setItem}
            itemSelected={itemSelected}
            itemNumber={itemNumber}
            />
            <Cate item={item}/>
        </div>
    );
};

export default Agents;