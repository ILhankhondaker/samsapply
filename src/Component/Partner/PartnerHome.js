import React from 'react';
import './PartnerHome.css'
import Partners from './Partners';
import { Link } from "react-router-dom";


const PartnerHome = () => {
    return (
        <div className='partnerbg'>
            <h1 className='text-center text-5xl font-bold partnerTitle'>Partner Institutes</h1>
            <p className='text-center text-white'>We have numerous partner institutions across the UK that offers range of courses on several levels and exclusive offers for our valued clients.<br></br>
                Enjoy a smooth connectivity with our listed partners!</p>
            <Partners></Partners>


            <div class="card-actions justify-center p-4">
                <button className=" btn  bg-red-500 justify-center  text-white seemore">  <Link className='text-white' to="partners-institutes">See More ►</Link></button>
            </div>
        </div>
    );
};

export default PartnerHome;