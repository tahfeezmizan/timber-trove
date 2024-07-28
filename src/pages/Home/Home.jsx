import React from 'react';
import Banner from '../Banner/Banner';
import LatestProduct from '../LatestProduct/LatestProduct';
import HandPick from '../HandPick/HandPick';
import Newsletter from '../Newsletter/Newsletter';
import Kitchen from '../Kitchen/Kitchen';

const Home = () => {
    return (
        <div>
            <div className="slider relative">
                <Banner />
            </div>
            <LatestProduct></LatestProduct>
            <HandPick></HandPick>
            <Newsletter></Newsletter>
            <Kitchen></Kitchen>
        </div>
    );
};

export default Home;
