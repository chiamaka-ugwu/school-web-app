import React from 'react';
import { Link } from 'react-router-dom';


const Nav3 = ({courses, timetable}) => {
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
                        <Link to="/lecturer-courses" className={`link ${courses}`}>Courses</Link>
                    </li>
                    <li>
                        <Link to="/lecturer-timetable" className={`link ${timetable}`}>Timetable</Link>
                    </li>
                </ul>
                <p id="menu">menu</p>
            </nav>
        </>
    )
}

export default Nav3
