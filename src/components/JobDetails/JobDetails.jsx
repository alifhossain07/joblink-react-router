import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiFillDollarCircle } from "react-icons/ai";
import { PiSubtitlesBold } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localstorage';

const JobDetails = ({onJobApplied}) => {

    const jobs = useLoaderData();
    const{id,} = useParams();

    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob =()=>{

            saveJobApplication(idInt);
            toast('You have successfully Applied into this job')
            

    };

    
    return (
        <div className='mt-20'>
            <h2 className='text-center text-2xl font-bold text-sky-700'>{job.job_title} at {job.company_name} </h2>
            <div className='mt-20 grid gap-10 md:grid-cols-5'>
                <div className='p-4  md:col-span-3'>

                    <div className='mb-5'>
                    <h1 className='text-2xl font-semibold text-sky-600'>Job Description</h1>
                    <p className='text-lg mt-4'>{job.job_description}</p>
                    </div>
                    
                    <div className='mb-5'>
                    <h1 className='text-2xl font-semibold text-sky-600'>Job Responsibility</h1>
                    <p className='text-lg mt-4'>{job.job_responsibility}</p>
                    </div>
                    
                    <div className='mb-5'>
                    <h1 className='text-2xl font-semibold text-sky-600'>Educational Requirements</h1>
                    <p className='text-lg mt-4'>{job.educational_requirements}</p>
                    </div>

                    <div className='mb-5'>
                    <h1 className='text-2xl font-semibold text-sky-600'>Experience</h1>
                    <p className='text-lg mt-4'>{job.experiences}</p>
                    </div>
                    
                
                   
                

                </div>
                <div className=' md:col-span-2 w-full p-4 '>
                
                <div>
                     <h1 className='text-2xl font-semibold border-b-4 border-blue-500 mb-4 text-sky-600 pb-4'>Job Details</h1>
                    <div className='text-lg font-semibold space-y-6'>
                        <h1 className='flex items-center gap-2'><AiFillDollarCircle className='text-2xl text-sky-500'/>Salary: {job.salary} (permonth)</h1>
                        <h1 className='flex items-center gap-2'><PiSubtitlesBold className='text-2xl text-sky-500'/>Job Title: {job.job_title}</h1>
                    </div>
                </div>

                <div className=''>
                     <h1 className='text-2xl font-semibold border-b-4 border-blue-500 mb-4 mt-20 pb-4 text-sky-600'>Contact Information</h1>
                    <div className='text-lg font-semibold space-y-6 '>
                        <h1 className='flex items-center gap-2'><FaPhone className=' text-sky-500 text-lg' />Phone: {job.contact_information.phone}</h1>

                        <h1 className='flex items-center gap-2'><MdOutlineMailOutline className=' text-sky-500 text-xl' />Email: {job.contact_information.email}</h1>

                        <h1 className='flex items-center gap-2'><FaLocationDot className=' text-sky-500' />Address: {job.contact_information.address}</h1>
                    </div>
                    <button onClick={handleApplyJob} className='btn btn-info mt-7 w-full text-white'>Apply Now</button>
                </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;