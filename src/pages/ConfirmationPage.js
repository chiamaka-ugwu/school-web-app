import React from 'react'
import Nav from '../components/nav/Nav';
import Confirmation from '../components/confirmation/Confirmation';
import Blank from '../components/confirmation/Blank';
import Footer from '../components/footer/Footer';


const ConfirmationPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav />
            <Blank />
            <Confirmation title="Sign Up Complete" link="/student-dashboard" linkText="Get Started" />
            <Footer />
        </>
    )
}

export default ConfirmationPage
