import React, { useEffect, useState } from "react";
import Global from "./Global";

const Globals = () => {

    const [GlobalsData, setGlobalsData] = useState([]);
    useEffect(() => {
        fetch("gus.json")
            .then((res) => res.json())
            .then((data) => setGlobalsData(data));
    }, []);

    return (
        <div >
            <h1 className='text-center text-5xl font-bold m-20'>Global University Systems (GUS)</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    GlobalsData.map(global => <Global
                        key={global.id}
                        global={global}
                    ></Global>)
                }
            </div>

        </div>
    );
};

export default Globals;