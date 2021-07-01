import { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
import { Link } from 'react-router-dom'
import axios from "axios"


import './ItemListContainer.css'

export const ItemListContainer = () => {

    let [items, setItems] = useState([])

    useEffect(() => {
        axios('https://jsonfy.com/items').then((res) => setItems(res.data))
        
    },[])

    return (
        <>
            
            <ItemList items={items} />
            
        </>
    )
}

