import React from "react";
import Nav from "../components/nav/Nav";
import SignUpOne from "../components/signup/SignUpOne";
import Footer from "../components/footer/Footer";

const SignupPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav signup="active" />
            <SignUpOne />
            <Footer />    
        </>
    );
};

export default SignupPage;
