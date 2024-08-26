import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";import { Link } from "react-router-dom";
;

const Job = ({job}) => {

    const{id,logo,job_title,company_name,location,salary,remote_or_onsite,job_type}=job;

    return (
        <div className="card mx-auto card-compact bg-gray-200 p-6 w-9/12 shadow-2xl mb-10">

           <div className="px-5 py-2 ">
           <img className="w-24 h-8 flex flex-grow"
                src={logo}
                alt="Shoes" />
           </div>

            <div className="card-body">

                <h2 className="mb-3 text-xl font-bold mt-4">{job_title}</h2>

                <h4 className="mb-3 text-gray-400 font-semibold text-xl ">{company_name}</h4>

                <div className="flex gap-6 text-lg mb-5 mt-3 text-purple-500 font-semibold">
                    <h1 className="border-4 border-blue-500 px-4 py-1">{remote_or_onsite}</h1>
                    <h1 className="border-4 border-blue-500 px-4 py-1">{job_type}</h1>
                </div>

                <div className="flex mb-4 flex-grow text-base gap-2 font-semibold text-gray-400">
                    <p className=" flex items-center gap-2"><IoLocationOutline /> {location}</p>
                    <p className="flex items-center gap-2"><CiDollar />  {salary}</p>
                </div>
                
                <div className="card-actions ">
                <Link to={`/job/${id}`}> <button className=" px-7 py-3 bg-sky-400 hover:bg-sky-300 duration-200 rounded-3xl text-white font-bold ">View Details</button></Link>
               
                </div>
            </div>
            </div>
    );
};

export default Job;