import React from 'react';
import './styles/sign-in.css'
import { Link } from 'react-router-dom';
import image from '../../Asset/images/login.png';

const SignIn = () => {
    return (
        <>
            <main className='sign-in'>
                <div className="left">
                    <h3>Sign In</h3>
                    <form>
                        <input className='create-pwd-input sign-in-input1' type="text" placeholder='Matriculation / Registration Number' />
                        <input className='create-pwd-input sign-in-input2' type="password" placeholder='Password' />
                    </form>
                    <Link to="/student-dashboard" className='create-pwd-btn sign-in-btn'>Sign In</Link>
                    <div className='links-group'>
                        <Link to="/sign-in-lecturer" className='lecturer lecturer2'>Sign In As Lecturer</Link>
                        <Link to="/reset-password" className='forgot-pwd'>Forgot Password?</Link>
                    </div>
                    <div className="group">
                        <p className='account'>Do not have an account?</p>
                        <Link to="/signup" className='sign-up2'>Sign Up</Link>
                    </div>
                </div>

                <div className="right image-container">
                    <img src={image} alt="login2" />
                </div>
            </main>
        </>
    )
}

export default SignIn
