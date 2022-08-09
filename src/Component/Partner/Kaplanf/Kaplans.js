import React, { useEffect, useState } from "react";
import Kaplan from "./Kaplan";

const Kaplans = () => {

    const [KaplansData, setKaplansData] = useState([]);
    useEffect(() => {
        fetch("kaplan.json")
            .then((res) => res.json())
            .then((data) => setKaplansData(data));
    }, []);

    return (
        <div >
            <h1 className='text-center text-5xl font-bold m-20'>Kaplan International Pathway (UK)</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    KaplansData.map(kaplan => <Kaplan
                        key={kaplan.id}
                        kaplan={kaplan}
                    ></Kaplan>)
                }
            </div>

        </div>
    );
};

export default Kaplans;