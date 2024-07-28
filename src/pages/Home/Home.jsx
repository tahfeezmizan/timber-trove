import React from 'react';
import Banner from '../Banner/Banner';
import LatestProduct from '../LatestProduct/LatestProduct';
import HandPick from '../HandPick/HandPick';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <div className="slider relative">
                <Banner />
            </div>
            <LatestProduct></LatestProduct>
            <HandPick></HandPick>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
