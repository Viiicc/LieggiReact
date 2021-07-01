import React, { useEffect, useState } from "react"
import  {ItemDetail}  from "../../components/ItemDetail/ItemDetail"
import axios from "axios"



export default function ItemDetailContainer ({ match }){
    console.log("MATCH",match);
   console.log("ID",match.params.id) ;

   let elementID = match.params.id

    const [item, setItem] = useState([]);

    useEffect(() => {
        axios('https://jsonfy.com/items/${elementID}').then((res)=> setItem(res.data))
        
    },[elementID]);


    return (
        <>

        {item.map(element => {
                        return (
                        <ItemDetail key={element.id} item={element} />
                                  
                            
                            
                            )
                        
                    })}

        </>
    )
}