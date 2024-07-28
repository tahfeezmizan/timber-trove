import React from 'react';
import Banner from '../Banner/Banner';
import LatestProduct from '../LatestProduct/LatestProduct';
import HandPick from '../HandPick/HandPick';
import Newsletter from '../Newsletter/Newsletter';
import Kitchen from '../Kitchen/Kitchen';
import OurBlog from '../OurBlog/OurBlog';

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
            <OurBlog></OurBlog>
        </div>
    );
};

export default Home;
