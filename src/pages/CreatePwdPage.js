import React from 'react';
import Nav from '../components/nav/Nav';
import CreatePassword from '../components/password/CreatePassword';
import Footer from '../components/footer/Footer';

const CreatePwdPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav />
            <CreatePassword />
            <Footer />
        </>
    )
}

export default CreatePwdPage
