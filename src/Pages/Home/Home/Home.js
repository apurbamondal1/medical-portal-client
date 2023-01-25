import React from 'react';
import InfoCard from '../../../Info/InfoCard';
import InfoCards from '../../../Info/InfoCards';

import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
        </div>
    );
};

export default Home;