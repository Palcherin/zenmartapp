import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Components.css';

import React from 'react'
import { Product } from './Product';

export const Homepic=()=> {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
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
      items: 1
    }
  };
  const productData=[
    {
      id:1,
      imgSrc:'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name:"Juicy Berries",
      price:"ksh.200",
      about:"Fresh hih qulity juicy berries",
    },
    {
      id:2,
      imgSrc:'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name:"Fresh Pineapples",
      price:"ksh.150",
      about:"Fresh hih qulity pineapples for you",
    },
    {
      id:3,
      imgSrc:"https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name:"Oranges",
      price:"ksh.200",
      about:"Fresh high qulity juicy Oranges",
    },
    {
      id:4,
      imgSrc:"https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name:"Avocado",
      price:"ksh.50",
      about:"Fresh high qulity juicy berries"
    },
    {
      id:5,
      imgSrc:"https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name:"Juicy Berries",
      price:"ksh.200",
      about:"Fresh high qulity juicy berries"
    },
    {
      id:6,
      imgSrc:"https://images.unsplash.com/photo-1612144515333-e8b9db423782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name:"Juicy Berries",
      price:"ksh.200",
      about:"Fresh high qulity juicy berries"
    }
    
  ]
  const product=productData.map(items=><div>
  <Product imgSrc={items.imgSrc} name={items.name} price={items.price} about={items.about} /></div>
  )
  
  return (
    <div className='product-container'> 
  <h1>Explore <span>More</span></h1>

       <Carousel responsive={responsive}>
   {product}
 
  </Carousel>;
    </div>
  )
}
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };
// swipeable={false}
// draggable={false}
// showDots={true}
// responsive={responsive}
// ssr={true} // means to render carousel on server-side.
// infinite={true}
// autoPlay={this.props.deviceType !== "mobile" ? true : false}
// autoPlaySpeed={1000}
// keyBoardControl={true}
// customTransition="all .5"
// transitionDuration={500}
// containerClass="carousel-container"
// removeArrowOnDeviceType={["tablet", "mobile"]}
// deviceType={this.props.deviceType}
// dotListClass="custom-dot-list-style"
// itemClass="carousel-item-padding-40-px"

