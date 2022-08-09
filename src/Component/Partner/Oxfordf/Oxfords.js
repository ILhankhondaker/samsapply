import React, { useEffect, useState } from "react";
import Oxford from "./Oxford";

const Oxfords = () => {

    const [OxfordsData, setOxfordsData] = useState([]);
    useEffect(() => {
        fetch("oxford.json")
            .then((res) => res.json())
            .then((data) => setOxfordsData(data));
    }, []);

    return (
        <div >
            <h1 className='text-center text-5xl font-bold m-20'>Oxford International Education Group </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    OxfordsData.map(oxford => <Oxford
                        key={oxford.id}
                        oxford={oxford}
                    ></Oxford>)
                }
            </div>

        </div>
    );
};

export default Oxfords;