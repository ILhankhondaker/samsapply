import React from 'react';
import Cambridges from './Cambridgef/Cambridges';
import Globalsbs from './Globalbsf/Globalsbs';
import Globals from './Globalusf/Globals';
import Institutes from './Institutesf/Institutes';
import Intos from './Intof/Intos';
import Kaplans from './Kaplanf/Kaplans';
import Navitass from './Navitasf/Navitass';
import Oxfords from './Oxfordf/Oxfords';
import Qas from './Qahigherf/Qas';
import Studys from './Studyf/Studys';

const Allparters = () => {
    return (
        <div className='pt-20 p-10' >

            <Institutes></Institutes>
            <Navitass></Navitass>
            <Oxfords></Oxfords>
            <Cambridges></Cambridges>
            <Intos></Intos>
            <Studys></Studys>
            <Kaplans></Kaplans>
            <Qas></Qas>
            <Globals></Globals>
            <Globalsbs></Globalsbs>
        </div>
    );
};

export default Allparters;