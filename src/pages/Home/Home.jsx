import React from 'react';
import Banner from '../Banner/Banner';
import LatestProduct from '../LatestProduct/LatestProduct';

const Home = () => {
    return (
        <div>
            <div className="slider relative">
                <Banner />
            </div>
            <LatestProduct></LatestProduct>

        </div>
    );
};

export default Home;
