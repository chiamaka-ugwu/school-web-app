import React from 'react';
import './styles/reset-password.css';
import { Link } from 'react-router-dom';
import image from '../../Asset/images/forgotpwd.png';


const ResetPassword2 = () => {
    return (
        <>
            <main className='reset-section reset-section2'>
                <div className="left">
                    <h3>Reset Password</h3>
                    <form>
                        <input className='create-pwd-input reset-input reset-input2' type="text" placeholder='+234 123 456 7890' />
                        <h3 className='otp reset-otp'>Enter the OTP Sent to  your Phone Number </h3>
                        <div className="btn-container">
                            <div className="otp-btns">
                                <input type='text' className='btn' value="5" />
                                <input type='text' className='btn' />
                                <input type='text' className='btn' />
                                <input type='text' className='btn' />
                            </div>
                            <Link to='/create-new-password'> <input className='submit-btn' type="submit" value='Submit' /> </Link>
                        </div>
                    <p className='resend resend-otp'>Didn't Get OTP? <span>Resend OTP</span></p>
                    </form>
                </div>
                <div className="reset-img-container">
                    <img src={image} alt="forgot-pwd" />
                </div>
            </main>
        </>
    )
}

export default ResetPassword2
