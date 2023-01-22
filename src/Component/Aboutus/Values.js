import React from 'react';

const Values = () => {
    return (
        <div class="hero min-h-screen bg-base-200 mission p-5">
            <div class="hero-content flex-col lg:flex-row mt-10 ">
                {/* ====================banner img ============ */}

                <img src="https://samsapply.co.uk/landrick/images/Testimonial/Values.svg" class="max-w-sm rounded-lg " />

                <div className='p-5'>

                    <h1 class="lg:text-7xl font-bold aboutUS-heading ">Our Values</h1>

                    {/* ==========p text ============ */}

                    <p class="pt-6 aboutUs-title font-bold">Our core values have shaped the culture and defined the character of our company, guiding how we behave and make decisions. Delivery: Put our users' interests at the heart of everything we do and deliver to the best of our abilities and resources. Integrity: Inspiring trust by taking responsibility, acting ethically, and providing reliable products and services. Respect: Showing respect for the business, the brand and the people by valuing diversity, ensuring an interesting and inclusive environment, and treating people as we would like to be treated ourselves. Being Best: Attracting, training and developing the best talent for our business, stretching our people and cultivating a “can do” attitude. Value Creation: Improving our users' journey through improved performance, creating long-term win-win relationships and focusing on execution excellence.</p>



                </div >

            </div>
        </div>
    );
};

export default Values;