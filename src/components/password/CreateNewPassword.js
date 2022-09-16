import React from 'react';
import './styles/password.css';
import { Link } from 'react-router-dom';
import image from '../../Asset/images/login2.png'


const CreateNewPassword = () => {

    return (
        <>
            <main className='create-section'>
                <div className="left">
                    <h3>Create New Password</h3>
                    <form>
                        <input className='create-pwd-input' type="password" placeholder='New Password' />
                        <input className='create-pwd-input' type="password" placeholder='Confirm Password' />
                    </form>
                    <Link to="/reset-confirmation" className='create-pwd-btn'>Create Password</Link>
                </div>

                <div className="right">
                    <img src={image} alt="login2" />
                </div>
            </main>
        </>
    )
}

export default CreateNewPassword
