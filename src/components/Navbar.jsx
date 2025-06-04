import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
            <div className="container">
                <Link className='navbar-brand' to='/'>WebApp</Link>
                <div>
                <Link className='btn btn-outline-light me-2' to='/'>Home</Link>
                <Link className='btn btn-outline-light' to='/cart'>Cart</Link>

                </div>
            </div>

        </nav>
    
    </>
  )
}

export default Navbar