import { ItemCount } from '../../containers/itemCount/ItemCount'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {

    return (
        <Link to='/detail/{item.id}'>
        <>

        <Card style={{ width: '18rem', margin: 40 }}>
        <Card.Img variant="top" width="200px" height="200px" src={item.photo_url} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            ${item.price}
            </Card.Text>
        </Card.Body>
        </Card>
            
        </>
        </Link>
    )
}