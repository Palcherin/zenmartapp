import React, { useState } from 'react';
import { FaBars, FaShoppingBasket, FaTimes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {auth} from '../config/firebase'
import './Components.css';
import {PRODUCTS} from './ProjectData'


function Navbar({
  visibility
}) {
  
  const [click, setClick] = useState(false);
  const[userVisibility,setUserVisibility]=useState(false)
  const [productInCart,setProductInCart]=useState([])
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [query, setQuery]=useState("");
  


  

  return (
    
    <div className='navbar'  >
      {/* <Cart 
      visibility={cartVisibility}
      product={productInCart}
      
  /> */}
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          ZenMART
        </Link>
        {/* SEACH ITEMS AVAILABLE */}
        {/* <div className='searchterm'>
          <input type='text' 
          placeholder='Search for items...' 
          onChange={(e)=>setQuery(e.target.value)}
          />
          <ul>
            {PRODUCTS.filter(item.name.toLowerCase().includes(query)
            ).map((item)=>(
              <li key={item.id}>{item.name}</li>
            ))}
          </ul> 
          </div> */}
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes className='icons'/> : <FaBars className='icons'/>}
        </div>
        
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/fruits' className='nav-links' onClick={closeMobileMenu}>
              Fruits
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
            
          </li>
        </ul>
        
        <div className='nav-icons'>
          {/* <div style={{
      display:visibility? "block":"none"
    }}> */}

       <Link to='/useraccount' className='' onClick={()=>{
        setUserVisibility(true);
       }}>
        <FaUser className='account-icon' size={40}/> 
         
            </Link>:
        
        <Link to='/cart' className='' onClick={closeMobileMenu}>
        <FaShoppingBasket size={40}
         className='cart-icon'/>
            </Link>
      
        
        </div>
      </div>
    </div>
  );
}

export default Navbar;
