import React from 'react'
import Menu from '../../Menu/Menu'

const Navbar = () => {
  return (
    <header>
      <div className="bg-gray-800">
        <div className='h-16 px-8 flex space-x-12 items-center'>
          <p className='text-white text-2xl '>
            Job Listing
          </p>
          <nav>
            <Menu />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar