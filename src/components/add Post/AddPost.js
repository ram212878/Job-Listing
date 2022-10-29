import React, { useState } from 'react'
import PostService from '../services/PostService';

const AddPost = () => {

  const [post, setPost] = useState({
    profile: "",
    desc: "",
    exp: "",
    techs:[]
  });

  const handleChange=(e)=>{
    const value = e.target.value;
    if (e.target.name==="techs"){
      setPost({...post,[e.target.name]:value.split(",")})
    }
    else
    setPost ({...post,[e.target.name]:value});

  };

  const save = (e)=>{
    e.preventDefault();
    PostService.savePost(post).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err);
    })
  };

  const clear = ()=>{
    setPost({
      profile:"",
      desc:"",
      exp:"",
      techs:[]
    })
  };

  return (
    <div className='flex max-w-xl mx-auto shadow-2xl border-b-2'>
      <div className='mx-auto w-4/5 px-5 py-8'>
        <div className='text-center w-full font-bold text-2xl tracking-wider underline'>
          <h3> Post New Job</h3>
        </div>

        <div className='w-full my-4'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Profile
          </span>
          <input type='text'
           name="profile"
            value={post.profile}
            onChange= {(e)=>handleChange(e)}
            className='form-input rounded w-full form-input py-2 px-2 mt-2 border'/>

        </div>

        <div className='w-full my-4'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Experience
          </span>
          <input type='text' 
          name="exp" 
          value={post.exp} 
          className='form-input rounded w-full py-2 px-2 mt-2 border'
          onChange= {(e)=>handleChange(e)}
          ></input>
        </div>

        <div className='w-full my-4'>

          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Technologies
          </span>
          <input type='text' 
          name="techs" value={post.techs} 
          className='form-input rounded w-full py-2 px-2 mt-2 border'
          onChange= {(e)=>handleChange(e)}
           />
        </div>

        <div className='w-full my-4'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Description
          </span>
          <textarea name="desc" rows="4" value={post.desc} 
          className='  rounded w-full py-2 px-2 mt-2 border focus:caret-pink-500'
          onChange= {(e)=>handleChange(e)}
          />
        </div>

        <div className='flex flex-row h-12 my-4 space-x-3 ' >
          <button 
          onClick={save}
          className='rounded basis-1/2 text-white font-semibold bg-green-500 hover:bg-green-700   px-4' >
            Post Job
            </button>
          <button 
          onClick={clear}
          className='rounded basis-1/2 text-white font-semibold bg-red-500 hover:bg-red-700 px-4'>
            Clear
            </button>
        </div>

      </div>
    </div>
  )
}

export default AddPost