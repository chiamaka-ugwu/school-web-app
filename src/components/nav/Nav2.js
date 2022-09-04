import React from 'react';
import { Link } from 'react-router-dom';
import './styles/nav2.css'

const Nav2 = ({courseReg, courses, timetable}) => {
    return (
        <>
            <nav className='nav2'>
                <div className="logo2">
                    <h3>
                        <Link to="/" className='logo-link'>Logo</Link>
                    </h3>
                </div>
                <ul className='links2'>
                    <li>
                        <Link to="/course-reg" className={`link ${courseReg}`}>Course Registration</Link>
                    </li>
                    <li>
                        <Link to="/courses" className={`link ${courses}`}>Courses</Link>
                    </li>
                    <li>
                        <Link to="/timetable" className={`link ${timetable}`}>Timetable</Link>
                    </li>
                </ul>
                <p id="menu">menu</p>
            </nav>
        </>
    )
}

export default Nav2
