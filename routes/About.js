import React from'react'
import { Aboutpic } from '../components/Aboutpic'
import { FAQS } from '../components/FAQS'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='about-container'>
      <h5>We are committed to provide you with quality and SATSIFYIN products.Read more about <span>ZenMART</span>below</h5>
      <FAQS/>
    </div>
  )
}
