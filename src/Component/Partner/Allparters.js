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

            {/* institutes.json = 63  */}
            <Institutes></Institutes>

            {/* navitas.json = 12  */}
            <Navitass></Navitass>

            {/* oxford.json = 6 */}
            <Oxfords></Oxfords>

            {/* 13 */}
            <Cambridges></Cambridges>

            {/*into.json= 11 */}
            <Intos></Intos>

            {/* studygroup.json = 18  */}
            <Studys></Studys>

            {/* kaplan.json= 15  */}
            <Kaplans></Kaplans>

            {/* qa.json = 7 */}
            <Qas></Qas>

            {/* gus.josn= 4   */}
            <Globals></Globals>

            {/*globalbank.json= 2 */}
            <Globalsbs></Globalsbs>
        </div>
    );
};

export default Allparters;