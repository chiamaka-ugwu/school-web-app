import React from 'react';
import Nav from '../components/nav/Nav';
import CreateNewPassword from '../components/password/CreateNewPassword';
import Footer from '../components/footer/Footer'


const CreateNewPwdPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav />
            <CreateNewPassword />
            <Footer />
        </>
    )
}

export default CreateNewPwdPage
