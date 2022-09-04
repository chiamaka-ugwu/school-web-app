import React from 'react';
import bell from '../../Asset/images/bell.png';
import person from '../../Asset/images/person.png';
import { Link } from 'react-router-dom';
import Data from '../course-reg/Data';

const Courses = () => {
    return (
        <>
            <div className="dashboard course-reg">
                <div className="signout-container">
                    <img src={bell} alt="notification" />
                    <Link to="/signin">Sign Out</Link>
                </div>
                <div className="intro">
                    <img src={person} alt="personIcon" />
                    <h4>Hello Name Surname,</h4>
                </div>
                <p className='dashboard-title'>Courses</p>
                <div className="course-area2">
                    <Data />
                </div>   
            </div>
        </>
    )
}

export default Courses
