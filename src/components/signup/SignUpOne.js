import React from 'react';
import './styles/signup.css';
import image from "../../Asset/images/login.png";
import { Link } from 'react-router-dom';

const SignUpOne = () => {
    return (
        <>
            <main className='signup-page'>
                <div className="left">
                    <h3 className='signup-h3'>Sign Up</h3>
                    <form>
                        <input className='signup-input' type="text" placeholder='Enter Your Matriculation / Registration Number' />
                    </form>
                    <Link to="/signup2" className='sign-up'>Sign Up</Link>
                    <Link to="/signup-lecturer" className='lecturer'>Sign Up As Lecturer</Link>
                </div>

                <div className="right">
                    <img src={image} alt="login" />
                </div>
            </main>
        </>
    )
}

export default SignUpOne

