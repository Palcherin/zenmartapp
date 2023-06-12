import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import { Homepic } from './components/Homepic'
import Navbar from './components/Navbar'
import { About } from './routes/About'
import { Contacts } from './routes/Contacts'
import { Home } from './routes/Home'
import { Fruits } from './routes/Fruits'
import { Footer } from './components/Footer'
import { UserAccount } from './routes/UserAccount'
import { Cart } from './routes/Cart'
import { ShopContextProvider } from './context/ShopContext'

const App = () => {

  return (
    
    <>
<ShopContextProvider>
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/fruits' element={<Fruits/>}/>
      <Route path='/cart' element={ <Cart/>}/>
      {/* <Route path='/drinks'element={ <Drinks/> }/> */}
      <Route path='/useraccount' element={ <UserAccount/> }/>
    </Routes>
    <Footer/>
    </ShopContextProvider>
    </>
    
  )
}

export default App