import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import { addcart ,removecart} from '../action/Cartaction'

function Cart() {
    const cartItems = useSelector((state)=>state.cartItems);
    const dispatch=useDispatch()

    const removefromcart = (p)=>{
        dispatch(removecart(p))
    }
  return (
    <div>Cart
        
            <table>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>price</td>
                    <td>action</td>
                </tr>

                {
                    cartItems.map((p) => {
                        return(
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.price}</td>
                            {/* <td><button onClick={addtocart}>Add to cart</button></td> */}
                            <td><button onClick={()=>{
                                removefromcart(p)
                            }}>remove from cart</button></td>
                        </tr>)
                    })
                }
            </table>
        </div>

  )
}

export default Cart