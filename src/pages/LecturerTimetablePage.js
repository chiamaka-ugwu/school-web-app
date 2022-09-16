import React from 'react';
import Nav4 from '../components/nav/Nav4';
import Timetable from '../components/timetable/Timetable';

const LecturerTimetablePage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav4 timetable="active"/>
            <Timetable />
        </>
    )
}

export default LecturerTimetablePage
