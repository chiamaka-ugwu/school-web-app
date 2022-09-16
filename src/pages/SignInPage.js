import React from 'react';
import Nav from '../components/nav/Nav';
import SignIn from '../components/sign-in/SignIn';
import Footer from '../components/footer/Footer'


const SignInPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav signin="active" />
            <SignIn />
            <Footer />
        </>
    )
}

export default SignInPage
