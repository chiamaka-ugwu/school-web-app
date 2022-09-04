import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Asset/images/login.png';
import './styles/signup.css'

const SignUpTwo = () => {
    return (
        <>
        <section className='signup-section'>
            <div className="signup-details">
                <h3 className='signup-label'>Sign Up</h3>
                <form>
                    <input className='signup-input2' type="text" placeholder='U2022/3020XXX' />
                
                    <div className="details">
                        <h3>Student's Details</h3>
                    </div>
                    <h3 className='otp'>Enter the OTP Sent to  your Phone Number </h3>
                    <div className="btn-container">
                        <div className="otp-btns">
                            <input type='text' className='btn' value="5" />
                            <input type='text' className='btn' />
                            <input type='text' className='btn' />
                            <input type='text' className='btn' />
                        </div>
                        <Link to='/password'> <input className='submit-btn' type="submit" value='Submit' /> </Link>
                    </div>
                    <p className='resend'>Didn't Get OTP? <span>Resend OTP</span></p>
                </form>
            </div>

            <div className="img-container">
                <img src={image} alt="login" />
            </div>
        </section>
    </>
    )
}

export default SignUpTwo
