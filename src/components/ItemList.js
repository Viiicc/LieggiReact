import React from "react";
import {Item} from "./Item";


function ItemList() {

    this.state = {
        items: []
    };
    
    return (
        <div>
            {this.state.items.map((item) =>{
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

