import React, { useEffect, useState } from "react";
import Cambridge from "./Cambridge";

const Cambridges = () => {

    const [CambridgesData, setCambridgesData] = useState([]);
    useEffect(() => {
        fetch("cambridge.json")
            .then((res) => res.json())
            .then((data) => setCambridgesData(data));
    }, []);

    return (
        <div >
            <h1 className='text-center text-5xl font-bold m-20'>Cambridge Education Group </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    CambridgesData.map(cambridge => <Cambridge
                        key={cambridge.id}
                        cambridge={cambridge}
                    ></Cambridge>)
                }
            </div>

        </div>
    );
};

export default Cambridges;