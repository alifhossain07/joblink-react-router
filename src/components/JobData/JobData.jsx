import React from 'react';

const JobData = ({jobData}) => {
    const {id,logo,category_name,availability} = jobData;
    return (
        <div className='bg-sky-100 shadow-2xl p-10 space-y-4 rounded-3xl'>
            <img className='w-14' src={logo} alt="" />

            <h1 className='text-2xl font-semibold'>{category_name}</h1>
            <p className='text-lg '>{availability}</p>
        </div>
    );
};

export default JobData;