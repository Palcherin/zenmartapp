import React, {useContext} from 'react'
import { PRODUCTS } from '../components/ProjectData'
import { ShopContext } from '../context/ShopContext';
import {CartItem} from './CartItem'
import './Routes.css'
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cartItems,getTotalCartAmount}=useContext(ShopContext);
    

    const navigate=useNavigate();
  return (
    <>
    <div className='cart-container'>
        <div className='cart-title'>
            <h1>Your cart Items</h1>
        </div>
        <div className='cart-items'>
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id]!==0){
                    return <CartItem data ={product}/>
                    
                }
            })}
            
        </div>
        
        <div className='checkout'>
            <p>sub-total: Ksh.{totalAmount}</p>
            <div className='checkout-btns'>
            <button className='checkout-bttns' onClick={()=>navigate('/')}>Continue shoppin</button>
            <button className='checkout-bttns'>Checkout</button>
            </div>
            
        </div>
    </div></>
  )}
