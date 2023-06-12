import React from 'react'
import './Components.css';
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaPlaystore, FaStreetView, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import { Link ,useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className="footer-container">
        <div className='footer'>
            <div className='link-section'>
            <h4>Our services</h4>
                <ul className='link-list'>
                  <Link className='links' to="/"> visit our Fruits & products Shop</Link>
                  <Link className='links' to='/contacts,'>Reach us wisth any concerns/complains</Link>
                  <Link className='links' to='about'>Read more about ZenMART</Link>
                  <button className='contact-bttns' onClick={()=>navigate('htpps//:www.zenmart.com')}>Contact us</button>
                </ul>
                
            </div>
          
            <div className='help-section'>
              <h4>ZenMART </h4>
              <p> <FaStreetView/> : P.O BOX 4430-5222  
                NAIROBI,KENYA</p>
                <p><FaPhone/> :+254 743666719/ +254 799357770</p>
                <p><FaEnvelope/> :info@zenmart.com</p>
                <button className='contact-bttns' onClick={()=>navigate('/contacts')}>Contact us</button>
                
              
            </div>
            <div className='socials-section'>
            <h4>Our socials</h4>
              <p>Follow ZenMART on all social media platforms...</p>
              <FaTwitter className='footer-icons'/>
              <FaFacebook className='footer-icons'/>
              <FaInstagram className='footer-icons'/>
              <FaLinkedin className='footer-icons'/>
              <FaWhatsapp/><br></br>
              <button className='contact-bttns' onClick={()=>navigate('/home')}>Shop With Us</button>

            </div>
            
        </div>
    </div>
  )
}
