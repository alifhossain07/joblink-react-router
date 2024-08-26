import React, { useState } from 'react';
import { useEffect } from 'react';
import Job from '../Job/Job';

const AllJobs = () => {

    const[jobs,setJobs]= useState([]);
 
    
    useEffect(() => {
        fetch('jobs.json')
       .then(res => res.json())
       .then(data => setJobs(data));
       
    }, []);
    
    

    return (
        <div className='mt-10 ' >
           
            <div className='md:grid mt-20 md:grid-cols-2 gap-4'>
            {
                jobs.map(job => <Job key={job.id} job={job}></Job> )
            }
            </div>
           
        </div>
    );
};

export default AllJobs;