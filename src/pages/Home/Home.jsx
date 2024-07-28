import React from 'react';
import Banner from '../Banner/Banner';
import LatestProduct from '../LatestProduct/LatestProduct';
import HandPick from '../HandPick/HandPick';

const Home = () => {
    return (
        <div>
            <div className="slider relative">
                <Banner />
            </div>
            <LatestProduct></LatestProduct>
            <HandPick></HandPick>

        </div>
    );
};

export default Home;
