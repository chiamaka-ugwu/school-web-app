import React from 'react';
import Nav from '../components/nav/Nav';
import Home from '../components/home/Home';
import Footer from '../components/footer/Footer'


const HomePage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav />
            <Home />
            <Footer />
        </>
    );
}

export default HomePage
