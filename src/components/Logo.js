import React, { Fragment } from 'react'
import imagen from '../LOGO.png'


function Logo() {
    return (
        <Fragment>
        <img src={imagen} width='100px' height='auto' /> 
        </Fragment>
    )
}

export default Logo