import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar-Container'>
        <ul>
            <Link to="/"><li>All Products</li></Link>
            <Link to="/jewelery"><li>Jewelery</li></Link>
        </ul>
    </div>
  )
}

export default Navbar