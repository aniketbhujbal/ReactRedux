import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcart ,removecart} from '../action/Cartaction'

const products = [
    { id: 1, title: 'p1', price: 1000 },
    { id: 2, title: 'p2', price: 2000 },
    { id: 3, title: 'p3', price: 3000 },
    { id: 4, title: 'p4', price: 4000 },
    { id: 5, title: 'p5', price: 5000 },
    { id: 6, title: 'p6', price: 6000 },
]
function Product() {
//const cartItems=useSelector((state)=>state.cartItems)
const dispatch=useDispatch()
    const addtocart=(p)=>{
        dispatch(addcart(p))
    }

    return (
        <div>
            <table>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>price</td>
                    <td>action</td>
                </tr>

                {
                    products.map((p) => {
                        return(
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.price}</td>
                            {/* <td><button onClick={addtocart}>Add to cart</button></td> */}
                            <td><button onClick={()=>{
                                addtocart(p)
                            }}>Add to cart</button></td>
                        </tr>)
                    })
                }
            </table>
        </div>
    )
}

export default Product