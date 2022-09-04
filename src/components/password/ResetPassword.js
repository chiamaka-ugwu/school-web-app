import React from 'react';
import './styles/reset-password.css';
import { Link } from 'react-router-dom';
import image from '../../Asset/images/forgotpwd.png';


const ResetPassword = () => {
    return (
        <>
            <main className='reset-section'>
                <div className="left">
                    <h3 className='reset-h3'>Reset Password</h3>
                    <form>
                        <input className='create-pwd-input reset-input' type="text" placeholder='Enter your Phone number' />
                    </form>
                    <Link to="/reset-password2" className='create-pwd-btn'>Submit</Link>
                </div>
                <div className="reset-img-container">
                    <img src={image} alt="forgot-pwd" />
                </div>
            </main>
        </>
    )
}

export default ResetPassword
