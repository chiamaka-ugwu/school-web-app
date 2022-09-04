import React from 'react';
import './styles/password.css';
import { Link } from 'react-router-dom';
import image from '../../Asset/images/login2.png'

const CreatePassword = () => {
    return (
        <>
            <main className='create-section'>
                <div className="left">
                    <h3>Create Password</h3>
                    <form>
                        <input className='create-pwd-input' type="password" placeholder='Password' />
                        <input className='create-pwd-input' type="password" placeholder='Confirm Password' />
                    </form>
                    <Link to="/confirmation" className='create-pwd-btn'>Create Password</Link>
                </div>

                <div className="right">
                    <img src={image} alt="login2" />
                </div>
            </main>
        </>
    )
}

export default CreatePassword
