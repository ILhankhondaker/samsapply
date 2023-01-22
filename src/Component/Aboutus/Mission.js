import React from 'react';
import './Mission.css'
const Mission = () => {
    return (
        <div class="hero min-h-screen bg-base-200 mission p-5">
            <div class="hero-content flex-col lg:flex-row mt-10 ">
                {/* ====================banner img ============ */}

                <img src="https://samsapply.co.uk/landrick/images/Testimonial/Mission.svg" class="max-w-sm rounded-lg " />

                <div className='p-5'>

                    <h1 class="lg:text-7xl font-bold aboutUS-heading ">Our Mission</h1>

                    {/* ==========p text ============ */}

                    <p class="pt-6 aboutUs-title font-bold">SAMS offers students, agents and universities from all over the world to virtually connect and make the international admission process easier. Our Mission is to build a platform that will become a complete eco-system for the International Student Recruitment Sector</p>
                </div >

            </div>
        </div>
    );
};

export default Mission;