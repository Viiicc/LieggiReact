import { ItemCount } from '../../containers/itemCount/ItemCount'

export const ItemDetail = ({item}) => {


    return (
        <>
        
        <h1>{item.name}</h1>

        <img src={item.photo_url} width="500px" height="auto" />

        <p>{item.description}</p>

        <ItemCount stock={item.stock} initial="1" />

        <h3>Precio: ${item.price}</h3>

        <button>Comprar</button>

        </>
    )
}