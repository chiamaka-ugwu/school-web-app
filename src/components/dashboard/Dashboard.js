import React from 'react';
import './styles/dashboard.css';
import bell from '../../Asset/images/bell.png';
import person from '../../Asset/images/person.png';
import { Link } from 'react-router-dom';
import notice from '../../Asset/images/notice.png';

const Dashboard = ({title, details}) => {
    return (
        <>
            <div className="dashboard">
                <div className="signout-container">
                    <img src={bell} alt="notification" />
                    <Link to="/signin">Sign Out</Link>
                </div>
                <div className="intro">
                    <img src={person} alt="personIcon" />
                    <h4>Hello Name Surname,</h4>
                </div>
                <h4 className='edit'>Edit Profile</h4>
                <div className="course-area staff-details">
                    <h4>{details}</h4>
                </div>   
                <div className="notice">
                    <img src={notice} alt="notice" />
                    <p>Some fields are locked and cannot be edited for security reasons, to make changes contact the school authority.</p>
                    <h4>Save</h4>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard
