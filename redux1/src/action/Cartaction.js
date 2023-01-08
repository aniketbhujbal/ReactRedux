import React from 'react'



export const addcart=(product)=>{

    return{
        type: 'add-to-cart',
        product:product, 
    }
}


export const removecart=(product)=>{

    return{
        type: 'remove-from-cart',
        product:product, 
    }
}
// function Cartaction() {
//   return (
//     <div>Cartaction</div>
//   )
// }

