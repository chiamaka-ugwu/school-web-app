import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons'



const Nav4 = ({courses, timetable}) => {
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
                        <Link to="/lecturer-courses" className={`link ${courses}`} onClick={toggle}>Courses</Link>
                    </li>
                    <li>
                        <Link to="/lecturer-timetable" className={`link ${timetable}`} onClick={toggle}>Timetable</Link>
                    </li>
                </ul>
                <ul className={open ? "links2" : "n"}>
                    <li>
                        <Link to="/lecturer-courses" className={`link ${courses}`} onClick={toggle}>Courses</Link>
                    </li>
                    <li>
                        <Link to="/lecturer-timetable" className={`link ${timetable}`} onClick={toggle}>Timetable</Link>
                    </li>
                </ul>
                <div id="menu" onClick={toggle}><FontAwesomeIcon icon={open ? faClose : faBars} size="lg"  /></div>
            </nav>
        </>
    )
}

export default Nav4
