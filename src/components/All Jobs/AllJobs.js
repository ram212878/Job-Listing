import React, { useEffect, useState } from 'react'
import PostApiService from '../services/PostService';
import Card from './Card';

const AllJobs = () => {
    const [search, setSearch] = useState("");
    const [filterResult, setfilterResult] = useState([]);
    const [jobs, setJobs] = useState([]);

    const handleSearch = async (e) => {
        setSearch(e.target.value);
        // setfilterResult([]);
        if(search.length<2){
            setfilterResult(jobs);
            return;
        }
        PostApiService.search(search).then((data)=>{
            setfilterResult(data);
        });
        console.log(filterResult);
    }

    useEffect(() => {
        document.title = " Job || All Jobs";
        const getAllJobs = () => {
            PostApiService.getPosts().then((data)=>{
                setJobs(data);
                console.log(filterResult);
                if(filterResult===null || filterResult.length<=0){
                    setfilterResult(jobs);
                }
            });
        }
        getAllJobs();

    }, []);

    return (
        <div className='w-full mx-auto  '>
            <div>
                <input type="text" name="search" value={search} placeholder='enter keyword for search ...' 
                className=' flex mx-auto rounded w-4/5 border border-red-500 focus:border-2 outline-none focus:bord md:w-1/2 form-input px-2 py-3 mt-2'
                    onChange={handleSearch}
                />
                <p className=' mx-auto w-max mt-5 font-bold underline'> ALL JOBS</p>
                <div className=' mt-2 grid grid-cols-1 md:grid-cols-3 px-3 space-x-2 space-y-2'>
                    {
                       filterResult!==null &&  filterResult.length > 0
                            ? filterResult.map((post) => <Card key={post.id}  item={post} />) : "No data Found"
                    }
                </div>

            </div>
        </div>
    )
}

export default AllJobs