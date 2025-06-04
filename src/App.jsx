import React from 'react'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import Home from './pages/Home'
import {CartProvider} from './context/CartContext'
import CartPage from './pages/CartPage'

function App() {
  return (
    <>
    <CartProvider> 

        <Router>
            <Navbar/>
            <div className="container mt-2">
               <Routes>
                  <Route path='/' element={<Home/>}/> 
                  <Route path='/cart' element={<CartPage/>}/> 
              </Routes>
            </div>
        </Router>
    
     </CartProvider>
    </>
  )
}

export default App