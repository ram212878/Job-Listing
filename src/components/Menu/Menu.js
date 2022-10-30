import React from 'react'
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <div id="menu" className='text-white space-x-2' >
      <ul className='flex items-center '>
        <li >
          <Link to='/' className='px-2 py-2 hover:bg-orange-500' >Home </Link>
        </li>

        <li >
          <Link to='/Jobs' className='px-2 py-2 hover:bg-orange-500 ' >Jobs </Link>
        </li>
        <li>
          <Link to='/About' className='px-2 py-2 hover:bg-orange-500 ' >About </Link>
        </li>
        <li>
          <Link to='/Contact' className='px-2 py-2 hover:bg-orange-500 ' >Contact </Link>
        </li>
      </ul>


    </div>
  )
}

export default Menu