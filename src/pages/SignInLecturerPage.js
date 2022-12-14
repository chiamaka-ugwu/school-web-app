import React from 'react'
import Nav3 from '../components/nav/Nav3';
import SignInLecturer from '../components/sign-in/SignInLecturer';
import Footer from '../components/footer/Footer'


const SignInLecturerPage = () => {
    window.scroll(0,0)
    return (
        <>
            <Nav3 signin="active" />
            <SignInLecturer />
            <Footer />
        </>
    )
}

export default SignInLecturerPage
