import React, { useState ,} from 'react';
import './styles/course-reg.css';
import bell from '../../Asset/images/bell.png';
import person from '../../Asset/images/person.png';
import { Link } from 'react-router-dom';
import Data from './Data';
import Confirmation from '../confirmation/Confirmation';


const CourseReg = () => {
    const [open, setOpen] = useState(false);
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
                <p className='dashboard-title'>Course Registration</p>
                <div className="course-area2">
                    <Data />
                </div>   
                <h4 className='submit-courses' onClick={() => setOpen(true)}>Submit</h4>
            </div>
            {open && <Confirmation setOpen={setOpen} title="Course Registeration Successful" linkText="View Courses" link="/courses"/>}

        </>
    )
}

export default CourseReg
