import { useEffect } from 'react';
import { useState } from 'react';
import { ItemCount } from '../itemCount/ItemCount';
import { ItemList }  from '../ItemList/ItemList';



import './ItemListContainer.css'

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('./Productor.json')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => {
            console.error(error)
        })
    },[])


    return (
        <div className="Estilo1">


            <ItemCount stock="12" initial="1"/>
            
            <ItemList/>
        </div>
    )
}

