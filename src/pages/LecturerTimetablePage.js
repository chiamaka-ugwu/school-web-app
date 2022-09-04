import React from 'react';
import Nav4 from '../components/nav/Nav4';
import Timetable from '../components/timetable/Timetable';

const LecturerTimetablePage = () => {
    return (
        <>
            <Nav4 timetable="active"/>
            <Timetable />
        </>
    )
}

export default LecturerTimetablePage
