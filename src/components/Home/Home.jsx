import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import Featuredjobs from '../FeaturedJobs/Featuredjobs';

const Home = () => {
    
    
    return (
        <div className='mt-28'>
        <Banner></Banner>
        <CategoryList></CategoryList>
        <Featuredjobs></Featuredjobs>
        </div>
    );
};

export default Home;