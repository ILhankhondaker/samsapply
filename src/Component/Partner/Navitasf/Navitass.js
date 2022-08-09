import React, { useEffect } from 'react';
import { useState } from 'react';
import Navitas from './Navitas';

const Navitass = () => {

    const [NavitassData, setNavitassData] = useState([]);
    useEffect(() => {
        fetch("navitas.json")
            .then((res) => res.json())
            .then((data) => setNavitassData(data));
    }, []);

    return (
        <div>
            <h1 className='text-center text-5xl font-bold m-20'>Navitas (UK)</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    NavitassData.map(navitas => <Navitas
                        key={navitas.id}
                        navitas={navitas}
                    ></Navitas>)
                }
            </div>

        </div>
    );
};

export default Navitass;