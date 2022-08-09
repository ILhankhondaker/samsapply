import React, { useEffect, useState } from "react";
import Into from "./Into";

const Intos = () => {

    const [IntosData, setIntosData] = useState([]);
    useEffect(() => {
        fetch("into.json")
            .then((res) => res.json())
            .then((data) => setIntosData(data));
    }, []);

    return (
        <div >
            <h1 className='text-center text-5xl font-bold m-20'>INTO (UK)</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    IntosData.map(into => <Into
                        key={into.id}
                        into={into}
                    ></Into>)
                }
            </div>

        </div>
    );
};

export default Intos;