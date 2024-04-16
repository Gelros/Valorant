import {React, useState} from 'react';
import Data from "../data/armes.json"
import ArmCard from './ArmCard';
import Boutons from './Boutons';


const Armes = () => {
    
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

    console.log(itemNumber)
    
    return (
        <div className='pos'>
            <Boutons 
            menuCategories={menuCategories}
            filterItems={filterItems}
            setItem={setItem}
            itemSelected={itemSelected}
            itemNumber={itemNumber}
            />
            <ArmCard 
            item={item}
            itemSelected={itemSelected}
            />
        </div>
    );
};

export default Armes;