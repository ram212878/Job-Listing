import React from 'react'
import { Link } from 'react-router-dom';
// import PostService from '../services/PostService';

const Home = () => {

  return (
    <>
      <div className='shadow-xl w-1/2 mx-auto my-auto mt-1'>
        <div className=' flex justify-center items-center width-4/5  h-32 text- space-x-4 '>

          <Link to="/Contact">
            <button
              className=' border-2 border-pink-600 px-3 rounded   text-cyan-30 h-14 tracking-wider hover:bg-pink-600 hover:text-white '>
              Post Job
            </button>
          </Link>

          <Link to="/Jobs">
            <button
              className=' border-2  border-green-800 px-3 rounded  text-cyan-30 h-14 tracking-wider  hover:bg-green-800 hover:text-white hover:shadow-2xl'>
              Search Jobs
            </button>
          </Link>

        </div>
      </div>

    </>
  )
}

export default Home