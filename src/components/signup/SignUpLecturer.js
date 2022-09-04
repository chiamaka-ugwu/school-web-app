import React from 'react';
import image from "../../Asset/images/login.png";
import { Link } from 'react-router-dom';


const SignUpLecturer = () => {
    return (
        <>
            <main className='signup-page'>
                <div className="left">
                    <h3 className='signup-h3'>Sign Up</h3>
                    <form>
                        <input className='signup-input' type="text" placeholder='Enter Your Staff Code' />
                    </form>
                    <Link to="/signup-lecturer2" className='sign-up'>Sign Up</Link>
                    <Link to="/signup" className='lecturer'>Sign Up As Student</Link>
                </div>

                <div className="right">
                    <img src={image} alt="login" />
                </div>
            </main>
        </>
    )
}

export default SignUpLecturer
