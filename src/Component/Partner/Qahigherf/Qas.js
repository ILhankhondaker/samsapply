import React, { useEffect, useState } from "react";
import Qa from "./Qa";

const Qas = () => {

    const [QasData, setQasData] = useState([]);
    useEffect(() => {
        fetch("qa.json")
            .then((res) => res.json())
            .then((data) => setQasData(data));
    }, []);

    return (
        <div >
            <h1 className='text-center text-5xl font-bold m-20'>QA Higher Education </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    QasData.map(qa => <Qa
                        key={qa.id}
                        qa={qa}
                    ></Qa>)
                }
            </div>

        </div>
    );
};

export default Qas;
