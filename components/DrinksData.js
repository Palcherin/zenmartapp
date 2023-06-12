import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Components.css';
import { Product } from './Product';
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
      imgSrc:'assets/Lemon juice.jpg',
      name:"Lemon Juice",
      price:"ksh.200",
      about:"Fresh hih qulity juicy berries",
    },
    {
      id:2,
      imgSrc:'assets/different juices.jpg',
      name:"Mixed fruit juices",
      price:"ksh.150",
      about:"Fresh hih qulity pineapples",
    },
    {
      id:3,
      imgSrc:"assets/cocktail.jpg",
      name:"Cocktail Juice",
      price:"ksh.200",
      about:"Fresh high qulity juicy Oranges",
    },
    {
      id:4,
      imgSrc:"assets/Melon.jpg",
      name:"Melon Juice",
      price:"ksh.50",
      about:"Fresh high qulity juicy berries"
    },
    {
      id:5,
      imgSrc:"assets/orane juice.jpg",
      name:"Orange Juice",
      price:"ksh.200",
      about:"Fresh high qulity juicy berries"
    },
    {
      id:6,
      imgSrc:"assets/pineapple juice.jpg",
      name:"Pineapple Juice",
      price:"ksh.200",
      about:"Fresh high qulity juicy berries"
    },
    {
      id:6,
      imgSrc:"assets/strawberryjuice.jpg",
      name:"Strawberry juice",
      price:"ksh.80",
      about:"Fresh high qulity juicy berries"
    },
    {
      id:6,
      imgSrc:"assets/applejuice.jpg",
      name:"Apple Juice",
      price:"ksh.200",
      about:"Fresh high qulity juicy berries"
    }
    
  ]
  const product=productData.map(items=><div>
  <Product imgSrc={items.imgSrc} name={items.name} price={items.price} about={items.about} />
  </div>
  
  )
  return (
    <div className='product-container'> 
  <h1>Our Weekly <span>Offers</span></h1>
    <Carousel 
    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    // autoPlaySpeed={4000}
   responsive={responsive}>
{vegetables_product}

</Carousel>;
</div>
  )