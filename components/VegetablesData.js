import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Components.css';

import React from 'react'
import { Weeklyproducts } from './Weeklyproducts';

const Vegetables=()=> {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5    
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  const PRODUCTS=[
    {
      id:1,
      imgSrc:'assets/kitchen1.jpg',
      name:"full weeks FRUITS products",
      offer:"FREE DEIVERY",
      price:"ksh.1500",
      about:"oranes,Red peper,manoes,carrots and tommatoes",
    },
    {
      id:2,
      imgSrc:'assets/kitchen1.jpg',
      name:"Fresh fruits",
      offer:"ksh.100 Discount",
      price:"ksh.550",
      about:"Fresh pineapples,Apples,Peas,rapes and Bananas",
    },
    {
        id:2,
        imgSrc:'assets/sorted veetables.jpg',
        name:"Fruits and veetables",
        offer:"A free red peper baskets",
        price:"ksh.2050",
        about:"For sellers",
      },
    {
      id:3,
      imgSrc:"assets/kitchen1.jpg",
      name:"basket of kitchen products",
      offer:"KSH.200",
      price:"ksh.580",
      about:"all kitchen spices and veestables",
    },
    {
      id:4,
      imgSrc:"assets/kitchen1.jpg",
      name:"kitchen veetables and fruits in 1",
      offer:"Free Delivery",
      price:"ksh.1500",
      about:"veetables and fruits"
    },
    {
      id:4,
      imgSrc:"assets/kitchen1.jpg",
      name:"kitchen veetables and fruits in 1",
      offer:"Free Delivery",
      price:"ksh.1500",
      about:"veetables and fruits"
    },
     {
      id:4,
      imgSrc:"assets/kitchen1.jpg",
      name:"kitchen veetables and fruits in 1",
      offer:"Free Delivery",
      price:"ksh.1500",
      about:"veetables and fruits"
    },
    {
      id:4,
      imgSrc:"assets/kitchen1.jpg",
      name:"kitchen veetables and fruits in 1",
      offer:"Free Delivery",
      price:"ksh.1500",
      about:"veetables and fruits"
    },
   
    
  ]
  
  const product=PRODUCTS.map(items=><div>
    <Vegetables imgSrc={items.imgSrc} name={items.name} price={items.price} about={items.about} />
    </div>
  )
  
  return (
    <div className='product-container'> 
  <h1>Our Weekly <span>Offers</span></h1>

       <Carousel 
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={4000}
       responsive={responsive}>
   {product}
 
  </Carousel>;
    </div>
  )
}