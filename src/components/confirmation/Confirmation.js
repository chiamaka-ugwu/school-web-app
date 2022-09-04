import React from 'react';
import './styles/confirmation.css';
import image from '../../Asset/images/confirm.png';
import { Link } from 'react-router-dom';

const Confirmation = ({title, link, linkText}) => {
    return (
        <>
            <section className='confirmation'>
                <h3>{title}</h3>
                <div className="confirm-img-container">
                    <img src={image} alt="confirm" />
                </div>
                <Link className='get-started' to={link}>{linkText}</Link>
            </section>
        </>
    )
}

export default Confirmation
