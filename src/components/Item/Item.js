import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Item = ({item}) => (
  <Card>
    <Image src={item.imagen} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{item.nombre}</Card.Header>
      <Card.Description>
       {item.description}
      </Card.Description>
    </Card.Content>
    <Card.Content >
      <p>${item.precio}</p>
    </Card.Content>
  </Card>
)

export default Item