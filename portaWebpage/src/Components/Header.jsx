import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <header>
            <nav className='flex justify-around items-center mt-4 border-b-[1px] border-b-green-400 pb-9'>
                <Link to=''><img src="https://themewagon.github.io/porta1/images/logo.png" alt="" /></Link>
                <div className="navbar flex justify-evenly gap-5 items-center text-green-600 font-bold">
                    <Link className='uppercase hover:text-blue-700 ' to=''>Home</Link>
                    <Link className='uppercase hover:text-blue-700 ' to='/about'>About</Link>
                    <Link className='uppercase hover:text-blue-700 ' to='/gallery'>Gallery</Link>
                    <Link className='uppercase hover:text-blue-700 ' to='/services'>Services</Link>
                    <Link className='uppercase hover:text-blue-700 ' to='/contact'>Contact</Link>
                </div>
                <button className='py-2 px-5 bg-green-600 font-semibold text-white'>Buy Now</button>
            </nav>
        </header>
    </>
  )
}

export default Header