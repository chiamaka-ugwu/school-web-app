import React from 'react';
import Nav3 from '../components/nav/Nav3';
import SignUpLecturer from '../components/signup/SignUpLecturer';
import Footer from '../components/footer/Footer'


const SignUpLecturerPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav3 signup="active" />
            <SignUpLecturer />
            <Footer />
        </>
        
    )
}

export default SignUpLecturerPage
