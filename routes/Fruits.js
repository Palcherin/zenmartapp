import React from 'react'
import { PRODUCTS } from '../components/Fruitsoffer'
import { Product } from '../components/Product'

export const Fruits = (props) => {
  

  return (
    <>
    <div className='home-container'>
      <div className='home-title'>
        <h1>Fruits and <span>Products</span></h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product)=> <Product data={product}/>)}
      </div>
      
        
    </div>
    </>
  )
}
