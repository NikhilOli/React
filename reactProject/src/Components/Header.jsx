import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
        <div className="container flex justify-around items-center mt-4">
            <h1 className='text-2xl '>MyLogo</h1>
            <div className='flex justify-between gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/about' >About</Link>
                <Link to='contact' >Home</Link>
                
            </div>
            <div className=''>
                <button className='bg-orange-500 py-2 px-4 rounded mx-2'>Get Started</button>
                <button className='bg-orange-500 py-2 px-4 rounded'>Log In</button>
            </div>
        </div>
    </header>
</>
  )
}

export default Header
