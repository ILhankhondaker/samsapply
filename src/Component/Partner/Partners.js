import React, { useEffect, useState } from "react";
import Partner from "./Partner";

const Partners = () => {

    const [partnersData, setpartnersData] = useState([]);
    useEffect(() => {
        fetch("partner.json")
            .then((res) => res.json())
            .then((data) => setpartnersData(data));
    }, []);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>
                {
                    partnersData.map(partner => <Partner
                        key={partner.id}
                        partner={partner}
                    ></Partner>)
                }
            </div>
        </div>
    );
};

export default Partners;