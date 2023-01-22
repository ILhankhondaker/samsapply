import React from 'react';
import PartnerHome from '../Partner/PartnerHome';
import About from './About';
import UncontrolledExample from './Carousel';
import Features from './Features';
import Introducing from './Introducing';
import Item from './Item';
import Reasons from './Reasons';
import Signup from './Signup';

const Home = () => {
    return (
        <div>

            <Introducing></Introducing>
            <About></About>
            <Item></Item>
            <PartnerHome></PartnerHome>
            <UncontrolledExample></UncontrolledExample>
            <Features></Features>
            <Reasons></Reasons>
            <Signup></Signup>
        </div>
    );
};

export default Home;