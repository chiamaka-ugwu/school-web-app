import React from 'react';
import Nav from '../components/nav/Nav';
import SignUpTwo from '../components/signup/SignUpTwo';
import Footer from '../components/footer/Footer';

const SignupPage2 = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav signup="active" />
            <SignUpTwo />
            <Footer />    
        </>
    )
}

export default SignupPage2
