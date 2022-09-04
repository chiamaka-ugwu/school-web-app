import React from 'react'
import Nav2 from '../components/nav/Nav2'
import Timetable from '../components/timetable/Timetable'

const TimetablePage = () => {
    return (
        <>
            <Nav2 timetable='active' />
            <Timetable />
        </>
    )
}

export default TimetablePage
