import React, { useState } from 'react';
import { useEffect } from 'react';
import Job from '../Job/Job';

const Featuredjobs = () => {

    const[jobs,setJobs]= useState([]);
    const[dataLength,setDataLength] = useState([4]);
    const [showAll, setShowAll] = useState(false);
    
    useEffect(() => {
        fetch('jobs.json')
       .then(res => res.json())
       .then(data => setJobs(data));
       
    }, []);
    
    const toggleJobs = () => {
        if (showAll) {
            setDataLength(4);
        } else {
            setDataLength(jobs.length);
        }
        setShowAll(!showAll);
    };


    return (
        <div className='mt-36 ' >
            <h1 className='text-3xl mb-4 text-center font-bold text-sky-700'>Featured Jobs</h1>
            <p className='text-base text-center '>Explore thousands of job opportunities with all the information you need. Its your future. </p>
            <div className='grid mt-20 grid-cols-2 gap-4'>
            {
                jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job> )
            }
            </div>
            <div className='text-center '>
            <button
                    onClick={toggleJobs}
                    className='px-6 py-4 rounded-full hover:bg-sky-700 duration-200 bg-sky-500 text-white font-semibold'
                >
                    {showAll ? 'Show Less Jobs' : 'Show All Jobs'}
                </button>
            </div>
        </div>
    );
};

export default Featuredjobs;