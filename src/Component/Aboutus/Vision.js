import React from 'react';
import './Vision.css'
const Vision = () => {
    return (
        <div class="hero min-h-screen bg-base-200 aboutt vision p-5">
            <div class="hero-content flex-col lg:flex-row mt-10 ">

                <div className='p-5'>

                    <h1 class="lg:text-7xl font-bold text-red-500 ">Our Vision</h1>

                    {/* ==========p text ============ */}

                    <p class="pt-6 text-white font-bold ">Our vision is to provide world-class technology solutions that streamline all aspects of the international student recruitment and admissions journey for prospective students, study abroad agents and educational institutions.</p>


                </div >

                {/* ====================banner img ============ */}

                <img src="https://samsapply.co.uk/landrick/images/Testimonial/Vision.svg" class="max-w-sm rounded-lg " />

            </div>
        </div>
    );
};

export default Vision;