import React from 'react';
import Nav4 from '../components/nav/Nav4';
import Courses2 from '../components/courses/Courses2';


const LecturerCoursesPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav4 courses="active" />
            <Courses2 />

        </>
    )
}

export default LecturerCoursesPage
