import React from 'react';
import './Partner.css'
const Partner = ({ partner }) => {
    return (
        <div className="card lg:max-w-lg bg-gray-50 shadow-xl hover:scale-110 duration-500">
            <div className="card-body">

                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full  mr-5 imgbg">
                            <img src={partner.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className=' font-bold'>{partner.name}</h4>
                        <p className='text-red-500'>{partner.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;