import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

export const Drinks = (props) => {
    return (
      <>
      
      <div className='drinks-card'>
        <img className='drinks-pic ' src={props.imgSrc} alt='products'/> 
        <h2 className='name'>{props.name}</h2>
        <p className='price'>{props.price}</p>
        <p className='about'>{props.about}</p>
        
          <button className='product-btn'>ADD TO CART</button>
    
        
      </div></>
    )
  }
  