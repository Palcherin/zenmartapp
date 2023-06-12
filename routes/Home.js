import React from 'react' 
import { PRODUCTS } from '../components/ProjectData'
import { Product } from '../components/Product'
import './Routes.css'

export const Home = (props) => {
  
  return (
    <>
    <div className='home-container'>
      <div className='home-title'>
        <h1>Explore for <span>More</span></h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product)=> <Product data={product}/>)}
      </div>
      
        
    </div>
    </>
  )
}
