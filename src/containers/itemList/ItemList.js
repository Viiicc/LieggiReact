import React from "react";
import {Item} from "../../components/Item/Item";

import ".ItemList.css"


export const ItemList= ({items}) =>{
    
    return (
        <div>
            {items.map((element) =>{
                return(<Item key={element.id} item={element}/>
                );
            })}
        </div>
        );
    
}


