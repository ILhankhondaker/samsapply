import React from 'react';
import './Aboutus.css'
import Mission from './Mission';
import Values from './Values';
import Vision from './Vision';

const Aboutus = () => {
    return (
        <div >
            <div className='top  ' > <h1 className='text-center text-5xl font-bold text-white mt-20'>About Us </h1></div>

            <Mission></Mission>
            <Vision></Vision>
            <Values></Values>
        </div>
    );
};

export default Aboutus;