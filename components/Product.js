import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './Components.css';
import { ShopContext } from '../context/ShopContext';

export const Product = (props) => {
  const {id,imgSrc, name,price,about}=props.data
  const {addToCart, cartItems}=useContext(ShopContext)

  const cartItemsAmount=cartItems[id]
  
  return (
    <>
    <div className='products-card'>
    <div className='product'>
      <img className='product-pic ' src={imgSrc} alt='products'/> 
      <div className='product-description'>
      <h2 className='name'><b>{name}</b></h2>
      <p className='price'>Ksh.{price}</p>
      <p className='about'>{about}</p>
      </div>
      <button className='product-btn' onClick={()=>addToCart(id)}>
        ADD TO CART
      {cartItemsAmount >0 && <>( {cartItemsAmount } )</>}
      </button>
    
     
    </div> 
    </div>
    </>
  )
}
