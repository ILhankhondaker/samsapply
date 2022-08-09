import React, { useEffect, useState } from "react";
import Institute from "./Institute";

const Institutes = () => {

    const [InstitutesData, setInstitutesData] = useState([]);
    useEffect(() => {
        fetch("institutes.json")
            .then((res) => res.json())
            .then((data) => setInstitutesData(data));
    }, []);

    return (
        <div >
            <h1 className='text-center text-5xl font-bold m-20'>Institutes We Represent </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                {
                    InstitutesData.map(institute => <Institute
                        key={institute.id}
                        institute={institute}
                    ></Institute>)
                }
            </div>

        </div>
    );
};

export default Institutes;