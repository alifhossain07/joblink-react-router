import React, { useState } from 'react';
import { useEffect } from 'react';
import Job from '../Job/Job';

const Featuredjobs = () => {

    const[jobs,setJobs]= useState([]);
    
    useEffect(() => {
        fetch('jobs.json')
       .then(res => res.json())
       .then(data => setJobs(data));
       
    }, []);



    return (
        <div className='mt-16' >
            <h1 className='text-4xl mb-4 text-center'>Featured Jobs :{jobs.length}</h1>
            <p className='text-xl text-center'>Explore thousands of job opportunities with all the information you need. Its your future. </p>
            <div className='grid mt-10 grid-cols-2 gap-4'>
            {
                jobs.map(job => <Job key={job.id} job={job}></Job> )
            }

            </div>
        </div>
    );
};

export default Featuredjobs;