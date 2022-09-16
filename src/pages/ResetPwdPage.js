import React from 'react'
import Nav from '../components/nav/Nav';
import ResetPassword from '../components/password/ResetPassword';
import Footer from '../components/footer/Footer';


const ResetPwdPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav />
            <ResetPassword />
            <Footer />
        </>
    )
}

export default ResetPwdPage
