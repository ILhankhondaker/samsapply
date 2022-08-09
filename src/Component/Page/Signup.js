import React from 'react';
import './Signup.css'
import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <div className='p-20'>
            <div className='signup p-20'>
                <h1 className='text-center text-white text-3xl signupTitle '>Don't have a contract with a British University?</h1>
                <h1 className='text-center  text-4xl signupTitleSecond'>Grow your business with SAMS Apply</h1>

                <div class="card-actions justify-center p-4">
                    <button className=" btn  bg-red-500 justify-center  text-white seemore">  <Link className='text-white' to="aboutus">Sign UP Now</Link></button>
                </div>
                <p className='text-center text-white mb-10 font-bold'>Sign up in 5 mins and start sending students to global destinations</p>

            </div>

        </div>
    );
};

export default Signup;