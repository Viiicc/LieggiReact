import  Item  from "../../components/Item/Item";

import "./ItemList.css"


export const ItemList= ({items}) =>{
    
    return (
        <div>
            {items.map((item) =>{
                return(<Item key={item.id} item={item}/>
                );
            })}
        </div>
        );
    
}


