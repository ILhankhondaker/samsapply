import React, { useEffect, useState } from "react";
import Study from "./Study";

const Studys = () => {

    const [StudysData, setStudysData] = useState([]);
    useEffect(() => {
        fetch("studygroup.json")
            .then((res) => res.json())
            .then((data) => setStudysData(data));
    }, []);

    return (
        <div >
            <h1 className='text-center text-5xl font-bold m-20'>Study Group (UK) </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    StudysData.map(study => <Study
                        key={study.id}
                        study={study}
                    ></Study>)
                }
            </div>

        </div>
    );
};

export default Studys;