import React from 'react';
import './styles/sign-in.css'
import { Link } from 'react-router-dom';
import image from '../../Asset/images/login.png';


const SignInLecturer = () => {
    return (
        <>
            <main className='sign-in'>
                <div className="left">
                    <h3>Sign In</h3>
                    <form>
                        <input className='create-pwd-input sign-in-input1' type="text" placeholder='Staff code' />
                        <input className='create-pwd-input sign-in-input2' type="password" placeholder='Password' />
                    </form>
                    <Link to="/lecturer-dashboard" className='create-pwd-btn sign-in-btn'>Sign In</Link>
                    <div className='links-group'>
                        <Link to="/signin" className='lecturer lecturer2'>Sign In As Student</Link>
                        <Link to="/reset-password" className='forgot-pwd'>Forgot Password?</Link>
                    </div>
                    <div className="group">
                        <p className='account'>Do not have an account?</p>
                        <Link to="/signup-lecturer" className='sign-up2'>Sign Up</Link>
                    </div>
                </div>

                <div className="right image-container">
                    <img src={image} alt="login2" />
                </div>
            </main>
        </>
    )
}

export default SignInLecturer
