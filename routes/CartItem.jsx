import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext';


export const CartItem = (props) => {
    const {id,imgSrc,name,price}=props.data
    const {addToCart, cartItems, removeFromCart,updateCartItemCount}=useContext(ShopContext)
    
  return (
    <>
    <div className='cartItems'>
        <img src={imgSrc}/>
        <div className='cart-description'>
            <p>{name}</p>
            <p>Ksh{price}</p>
            <div className='countHandler'>
                <button onClick={()=>addToCart(id)}>+</button>
                <input  value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={()=>removeFromCart(id)}>-</button>
            </div>
        </div>      
    </div>
     
    </> 
  )
}
