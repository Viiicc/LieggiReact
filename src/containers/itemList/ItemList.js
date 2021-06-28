import { useEffect } from 'react';
import { useState } from 'react';
import  Item  from "../../components/Item/Item";
import axios from "axios"

import "./ItemList.css"


function ItemList() { 
    
    const [items, setItems] = useState([]);

    useEffect(()=>{
        axios("../ItemListContainer/Productor.json").then((res) => setItems(res.data));
    },[]);

    return (
        <div>
            {items.map((item) =>{
                return(<Item key={item.id} items={item}/>
                );
            })}
        </div>
        );
    
}

export default ItemList
