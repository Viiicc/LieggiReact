import { ItemCount } from '../itemCount/ItemCount';
import  ItemList   from '../itemList/ItemList';



import './ItemListContainer.css'

export const ItemListContainer = () => {

    return (
        <div className="Estilo1">


            <ItemCount stock="12" initial="1"/>
            
            <ItemList/>
        </div>
    )
}

