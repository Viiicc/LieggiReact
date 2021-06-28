import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from "semantic-ui-react"
import './ItemCount.css'


export const ItemCount = ({stock, initial}) => {

    const [inputValue, setInputValue] = useState(initial)
    const [disabledStatus, setDisabledStatus] = useState(true)

    const onAdd = qty => {

        let newValue = Number(inputValue) + Number(qty)

        if(newValue > stock)
        {
            alert("No hay stock suficiente para su compra")

        } else {

            setInputValue(Number(inputValue) + Number(qty))

        }

    }

    useEffect (() => {
        if(inputValue == 1) {
            setDisabledStatus(true)
        } else {
            setDisabledStatus(false)
        }

    },[inputValue])

    return (
        <div class="qty">
            <p>Cantidad:</p>
            <Button inverted color='red' disabled={disabledStatus} onClick={()=> {onAdd(-1)}}>-</Button>
            <input class="quantityInput" type="number" value={inputValue}></input>
            <Button inverted color='green' onClick={()=> {onAdd(1)}}>+</Button>
        </div>
    )
}