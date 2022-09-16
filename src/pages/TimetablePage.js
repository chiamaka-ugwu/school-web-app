import React from 'react'
import Nav2 from '../components/nav/Nav2'
import Timetable from '../components/timetable/Timetable'

const TimetablePage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav2 timetable='active' />
            <Timetable />
        </>
    )
}

export default TimetablePage
