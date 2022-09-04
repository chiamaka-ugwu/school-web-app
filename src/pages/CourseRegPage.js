import React from 'react'
import Nav2 from '../components/nav/Nav2';
import CourseReg from '../components/course-reg/CourseReg'


const CourseRegPage = () => {
    return (
        <>
            <Nav2 courseReg="active" />
            <CourseReg />

        </>
    )
}

export default CourseRegPage
