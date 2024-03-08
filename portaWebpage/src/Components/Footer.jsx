import React from 'react'

function Footer() {
  return (
    <>
    <footer className='flex justify-around items-center border-2 h-36 mt-8 text-green-600 bg-white'>
      <div className='flex justify-around gap-6 items-center t'>
        <a href="https://facebook.com">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Google+</a>
        <a href="">Linkedin</a>
        <a href="">Dribble</a>
      </div>
      <div>
        <p>Copyright © CurlyArts 2018. All Right Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer