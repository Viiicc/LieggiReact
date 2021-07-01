import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Card from 'react-bootstrap/Card'


function Category() {
    const [category, setCategory] = useState([])
    const {param} = useParams()

    
    useEffect(() => {
      fetch('https://jsonfy.com/items/${param}')
    .then(response => response.json())
    .then(response => setCategory(response))

    }, [param])
   
    return (
        <>
        <div className="flex mb-50">
            <h1 className='titulo-cat' >{param}</h1>
        </div>
                        <div className="flex">

                  
           {category.map( categoria =>

                            <>

                            <Card style={{ width: '18rem', margin: 40 }}>
                                <Card.Img variant="top" width="200px" height="200px" src={categoria.photo_url} />
                                <Card.Body>
                                    <Card.Title>{categoria.name}</Card.Title>
                                    <Card.Text>
                                        {categoria.description}
                                    </Card.Text>
                                    <Card.Text>
                                    ${categoria.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            
                        </>
                
                )}
                    </div>
        </>
    )
}

export default Category