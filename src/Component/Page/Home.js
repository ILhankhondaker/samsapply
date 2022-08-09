import React from 'react';
import PartnerHome from '../Partner/PartnerHome';
import About from './About';
import Features from './Features';
import Introducing from './Introducing';
import Item from './Item';
import Reasons from './Reasons';
import Signup from './Signup';
import CarouselFadeExample from './Slider';

const Home = () => {
    return (
        <div>

            <Introducing></Introducing>
            <About></About>
            <Item></Item>
            <PartnerHome></PartnerHome>
            <CarouselFadeExample></CarouselFadeExample>
            <Features></Features>
            <Reasons></Reasons>
            <Signup></Signup>
        </div>
    );
};

export default Home;