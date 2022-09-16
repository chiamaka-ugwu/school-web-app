import React from 'react'
import Nav from '../components/nav/Nav';
import ResetPassword2 from '../components/password/ResetPassword2';
import Footer from '../components/footer/Footer';


const ResetPwdPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav />
            <ResetPassword2 />
            <Footer />
        </>
    )
}

export default ResetPwdPage
