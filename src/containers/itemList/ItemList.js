import { Link } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Item } from '../../components/Item/Item'

import './ItemList.css'

export const ItemList = ({items}) => {

    return (
        <>

        <Container>
            {items.map(element => {
                return (
                    <Link to='/detail/{element.id}'>
                        <div key={element.id}> 
                  
                            <Item  item={element} />
               
                        </div> 
                    </Link>
                )
                
            })}
        </Container>

        </>
    )
}