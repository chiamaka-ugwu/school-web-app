import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Asset/images/login.png';
import '../signup/styles/signup.css';


const SignUpLecturer2 = () => {
    return (
        <>
            <section className='signup-section'>
                <div className="signup-details">
                    <h3 className='signup-label'>Sign Up</h3>
                    <form>
                        <input className='signup-input2' type="text" placeholder='UPH/2022XXX' />
                        <div className="details">
                            <h3>Staff Details</h3>
                        </div>
                        <div className="continue-group">
                            <Link to='/password'> <input className='submit-btn continue' type="submit" value='Continue' /> </Link>
                            <Link to="/signup" className='lecturer'>Sign Up As Student</Link>
                        </div>
                    </form>
                    <div className="new-group">
                        <h4>Not you?</h4>
                        <input className='create-pwd-input sign-in-input1 new-code' type="text" placeholder='Enter Staff code' />
                        <input className='submit-btn submit' type="submit" value='Submit' />
                    </div>
                </div>

                <div className="img-container img-cont">
                    <img src={image} alt="login" />
                </div>
            </section>
        </>
    )
}

export default SignUpLecturer2
