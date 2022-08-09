import React, { useEffect, useState } from "react";
import Globalbs from "./Globalbs";

const Globalsbs = () => {

    const [GlobalsbsData, setGlobalsbsData] = useState([]);
    useEffect(() => {
        fetch("globalbank.json")
            .then((res) => res.json())
            .then((data) => setGlobalsbsData(data));
    }, []);

    return (
        <div >
            <h1 className='text-center text-5xl font-bold m-20'>Global Banking School (GBS)</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    GlobalsbsData.map(globalbs => <Globalbs
                        key={globalbs.id}
                        globalbs={globalbs}
                    ></Globalbs>)
                }
            </div>

        </div>
    );
};

export default Globalsbs;