import React from 'react'
import Logo from '../Logo'
import Carrito from "../cartWidget/Cart"
import { Nav } from "react-bootstrap"
import  { Navbar }  from 'react-bootstrap'
import "./Navbar.css"


export default function NavBar() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><a href="#"><Logo/></a></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><a href="#" className="carrito"><Carrito/></a></Nav.Link>      
        </Nav>
      </Navbar>
    )
}
