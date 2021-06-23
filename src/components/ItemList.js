import React, {useState} from "react";
import {Item} from "./Item";


function ItemList() {
    const [items, setItems] = useState(Item);
    
    return (
        <div>
            {items.map((item) =>{
                return(
                    <ul key={item.id}>
                        <li>{item.name} - ${item.price}</li>
                    </ul>
                );
            })}
        </div>
        );
    
}
export default ItemList

