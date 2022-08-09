import React from 'react';

const Cambridge = ({ cambridge }) => {
    return (
        <div className="card lg:max-w-lg bg-gray-50 shadow-xl hover:scale-110 duration-500">
            <div className="card-body">

                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full  mr-5 imgbg">
                            <img src={cambridge.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className=' font-bold'>{cambridge.name}</h4>

                        <div className='flex'>
                            <p className='text-red-500'>{cambridge.location}</p>
                            <p className='institute badge'>{cambridge.inst}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cambridge;