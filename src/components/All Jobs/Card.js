import React from 'react'
import PostApiService from '../services/PostService';

const Card = ({ item }) => {
  
  return (
    <div className=' shadow-2xl max-h-80 border border-teal-700 hover:border-pink-600  rounded overflow-hidden mt-1 px-2 py-3 bg-white'>
       <button className='button block border bg-red-600 text-white rounded w-max px-2 py-1 relative left-3/4 ' 
      onClick={()=>{
        PostApiService.delete(item.id);
      }}>Delete</button>
      <div className='font-light '><span className='font-semibold'>Profile</span> :{item.profile}</div>
      <div className='font-light '><span className='font-semibold'>Exp </span>: {item.exp}</div>
      <div className='font-light '><span className='font-semibold'>description</span>: {item.desc}</div>
      <div className='font-light '><span className='font-semibold'>technologies</span> :{item.techs.join(",")}
     
      </div>
    </div>
  );
}

export default Card