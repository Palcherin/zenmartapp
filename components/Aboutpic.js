import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Aboutpic.css';
import { Link } from 'react-router-dom'

export const Aboutpic = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='aboutpic'>
      <h1>Dont Miss Our <span>Offers</span></h1>
       <Carousel responsive={responsive}
       swipeable={true}
       showDots={true}
       autoPlay={true}
       autoPlaySpeed={5000}
       
       >
       
        <div className='family-offer'>
          <div className='family-container'>
            <img src='assets/fruits1.jpg' alt='family-pic'/>
            <h3>We offer family-offer every day! <br></br>
            get full basket of fruits with amazing DISCOUNTS<br></br>
            <p>ksh.350</p>
            <h6>ksh.70 OFF!</h6>
            FREE DELIVERY!!<br/>
            <button className='about-btn'>ADD TO CART</button>
            </h3>
          </div>
          
        </div>
        <div>
        <div className='family-offer'>
          <div className='family-container'>
            <img src='assets/manyfruits.jpg' alt='family-pic'/>
            <h3>We offer Large Fruit sales every day! <br></br>
            get full basket of fruits with amazing DISCOUNTS<br></br>
            <p>ksh.750</p>
            <h6>ksh.100 OFF!</h6>
            FREE DELIVERY!!<br/>
            <button className='about-btn'>ADD TO CART</button>
            </h3>
          </div>
          
        </div>
        </div>
        <div>
        <div className='family-offer'>
          <div className='family-container'>
            <img src='assets/veetables1.jpg' alt='family-pic'/>
            <h3>We fill your kitchen with all you need! <br></br>
            get full basket of kitchen products delivered to your house<br></br>
            <p>ksh.850</p>
            <h6>ksh.90 OFF!</h6>
            FREE DELIVERY!!<br/>
            <button className='about-btn'>ADD TO CART</button>
            </h3>
          </div>
          
        </div>
        </div>
        
        
        <div>
        <div className='family-offer'>
          <div className='family-container'>
            <img src='assets/sorted veetables.jpg' alt='family-pic'/>
            <h3>Are you lookin for products for your shop?! <br></br>
            We got you covered!!  <br></br>
            <p>ksh.1550</p>
            <h6>ksh.250 OFF!</h6>
            FREE DELIVERY!!<br/>
            <button className='about-btn'>ADD TO CART</button>
            </h3>
          </div>
          
        </div>
        </div>
       </Carousel>
    </div>
  )
}
