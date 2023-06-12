import React from 'react'
import { Link } from 'react-router-dom'
import './FAQS.css'
import picture12 from '../assets/Basket5.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export const FAQS = () => {
  return (
    <div className='faqs'>
        <div className='faqa-container'>
            <div className='faqs-pic'>
              <img src={picture12}  alt='faqs-pic'/>
            </div>
            <div className='faqs-text'>
              <h1> <span>ZenMART</span> </h1>
              <p>There have been an increased nned for healthy fruits and veetables for a lon time in our hourseholds. This need is not always met dure to some difficulties like inaccessibility of ealty products and also the hih cost of the products. Thats where <span>ZenMART</span>comes in.</p>
              <h6><span>Products</span></h6>
              <p>There's all you need in terms of veetables and fruits at <span>ZenMART</span>. Our team works tirelessly everyday to make sure we have healthy,quality and easily accessible products everyday. We offer freee Delivery of products above ksh.250</p>
              <Link to="/" className='faqs-btn'> EXPLORE</Link>
              <h6>Follow our socials for more information</h6>
              <ul>
                <FaFacebook className='faqs-icons'/>
                <FaWhatsapp className='faqs-icons'/>
                <FaTwitter className='faqs-icons'/>
                <FaInstagram className='faqs-icons'/>

              </ul>
            </div>
        </div>
    </div>
  )
}
