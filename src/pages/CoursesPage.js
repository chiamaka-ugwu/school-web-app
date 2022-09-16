import React from 'react'
import Courses from '../components/courses/Courses'
import Nav2 from '../components/nav/Nav2'

const CoursesPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav2 courses="active"/>
            <Courses />
        </>
    )
}

export default CoursesPage
