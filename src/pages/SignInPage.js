import React from 'react';
import Nav from '../components/nav/Nav';
import SignIn from '../components/sign-in/SignIn';
import Footer from '../components/footer/Footer'


const SignInPage = () => {
    return (
        <>
            <Nav signin="active" />
            <SignIn />
            <Footer />
        </>
    )
}

export default SignInPage
