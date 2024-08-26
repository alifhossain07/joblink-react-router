import { useEffect, useState } from "react";
import JobData from "../JobData/JobData";


const CategoryList = () => {

    const [jobData,setJobdata]= useState([]);
    
    useEffect(() => {
        fetch('/public/categories.json')
        .then(res => res.json())
        .then(data => setJobdata(data))

    },[]);

    return (
        <div className="space-y-14">
          
          <h1 className="text-4xl text-center mb-4  text-sky-700 font-bold">Job Category List</h1>
          <p className="text-center w-10/12 mx-auto text-lg ">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

          <div className="flex justify-around mt-10">

          {
                jobData.map((jobData, index) => (
                 <JobData key={index} jobData={jobData} /> // Pass job data to JobData component
                  ))
                }
          </div>
        </div>
    );
};

export default CategoryList;