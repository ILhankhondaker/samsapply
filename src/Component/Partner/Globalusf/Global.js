import React from 'react';

const Global = ({ global }) => {
    return (
        <div className="card lg:max-w-lg bg-gray-50 shadow-xl hover:scale-110 duration-500">
            <div className="card-body">

                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full  mr-5 imgbg">
                            <img src={global.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className=' font-bold'>{global.name}</h4>

                        <div className='flex'>
                            <p className='text-red-500'>{global.location}</p>
                            <p className='institute badge'>{global.inst}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Global;