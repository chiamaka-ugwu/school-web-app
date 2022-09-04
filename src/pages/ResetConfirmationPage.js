import React from 'react'
import Blank from '../components/confirmation/Blank'
import Confirmation from '../components/confirmation/Confirmation'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'

const ResetConfirmationPage = () => {
    return (
        <>
            <Nav />
            <Blank />
            <Confirmation title="Password Reset Successfully" link="/signin" linkText="Sign in" />
            <Footer />
        </>
    )
}

export default ResetConfirmationPage
