import React from 'react';
import './Reasons.css'

const Reasons = () => {
    return (
        <div className='bgcolor py-5'>
            <h1 className='text-center text-5xl m-2 font-bold text-red-500'>Reasons to Choose SAMS Apply</h1>
            <p className='text-center  mb-5'>We are determined to provide a virtual platform that not only assures connectivity with international admission process but,<br />
                also ensures other services that will energize the operation</p>

            <div className=' grid lg:grid-cols-4 grid-flow-raw  m-3 '>

                {/* ==============item 1 ============== */}
                <div class="card w-5/5   rounded-0  g-color boxx">
                    <figure class="pt-10  ">
                        <div class="avatar rounded-full ring ring-red-500 border-0">
                            <div class="w-16 m-4   ">
                                <img className='' src="https://samsapply.co.uk/landrick/images/Testimonial/easy_sign-up%20(2).svg" />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="card-title font-bold">Easy to Sign Up</h2>
                    </div>
                </div>
                {/* ==============item 2 ============== */}
                <div class="card w-5/5   rounded-0  g-color boxx">
                    <figure class="pt-10  ">
                        <div class="avatar rounded-full ring ring-red-500 ">
                            <div class="w-16 m-4  ring-offset-base-100 ring-offset-2 ">
                                <img className='' src="https://samsapply.co.uk/landrick/images/Testimonial/client.svg" />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="card-title font-bold">Excellent Client Service</h2>
                    </div>
                </div>
                {/* ==============item 3 ============== */}
                <div class="card w-5/5   rounded-0  g-color boxx">
                    <figure class="pt-10  ">
                        <div class="avatar rounded-full ring ring-red-500">
                            <div class="w-16 m-4  ring-offset-base-100 ring-offset-2 ">
                                <img className='' src="https://samsapply.co.uk/landrick/images/Testimonial/application.svg" />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="textstyle font-bold ">Fast Application Turnarounds</h2>
                    </div>
                </div>
                {/* ==============item 4 ============== */}
                <div class="card w-5/5   rounded-0  g-color boxx">
                    <figure class="pt-10  ">
                        <div class="avatar rounded-full ring ring-red-500">
                            <div class="w-16 m-4  ring-offset-base-100 ring-offset-2 ">
                                <img className='' src="https://samsapply.co.uk/landrick/images/Testimonial/university.svg" />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="card-title font-bold">Top Ranked Universities</h2>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Reasons;