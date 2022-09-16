import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/nav2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'


const Nav2 = ({courseReg, courses, timetable}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    return (
        <>
            <nav className='nav2'>
                <div className="logo2">
                    <h3>
                        <Link to="/" className='logo-link'>Logo</Link>
                    </h3>
                </div>
                <ul className='links2 f'>
                    <li>
                        <Link to="/course-reg" className={`link ${courseReg}`} onClick={toggle}>Course Registration</Link>
                    </li>
                    <li>
                        <Link to="/courses" className={`link ${courses}`} onClick={toggle}>Courses</Link>
                    </li>
                    <li>
                        <Link to="/timetable" className={`link ${timetable}`} onClick={toggle}>Timetable</Link>
                    </li>
                </ul>
                <ul className={open ? "links2" : "n"}>
                    <li>
                        <Link to="/course-reg" className={`link ${courseReg}`} onClick={toggle}>Course Registration</Link>
                    </li>
                    <li>
                        <Link to="/courses" className={`link ${courses}`} onClick={toggle}>Courses</Link>
                    </li>
                    <li>
                        <Link to="/timetable" className={`link ${timetable}`} onClick={toggle}>Timetable</Link>
                    </li>
                </ul>
                <div id="menu" onClick={toggle}><FontAwesomeIcon icon={open ? faClose : faBars} size="lg"  /></div>
            </nav>
            
        </>
    )
}

export default Nav2
