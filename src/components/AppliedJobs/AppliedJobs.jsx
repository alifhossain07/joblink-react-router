import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const[appliedJobs, setAppliedJobs] = useState([]);
   
    

    useEffect(() => {  
        const storedJobIds = getStoredJobApplication();  
        const jobsApplied =[];
        if (jobs.length > 0) { 
            
       

            for(const id of storedJobIds) {
                const job = jobs.find((job) => job.id === id);
                if(job){
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
          
        }  
    }, []);  


    return (
        <div className="mt-32 mb-14">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-sky-700 mb-10">Jobs I Applied : {appliedJobs.length}</h2>
            <ul>
                {
                    appliedJobs.map(job => 
                        <li key={job.id}>
                        <div className='bg-sky-100 shadow-2xl mb-5 p-10 w-11/12 space-y-4 md:w-3/6 mx-auto rounded-3xl'>
                        <img className='w-14' src={job.logo} alt="" />

                        <h1 className='text-2xl font-semibold'>{job.job_title}</h1>
                        <p className='text-lg '>{job.company_name}</p>
                        <p className='text-lg '>{job.location}</p>
                        <p className='text-lg '>{job.job_type}</p>
                        <p className='text-lg '>{job.salary}</p>

                    </div>
                            
                 </li>
                    )
                }
            </ul>

        </div>
    );
};

export default AppliedJobs;
