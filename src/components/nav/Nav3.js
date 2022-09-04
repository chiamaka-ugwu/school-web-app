import React from 'react';
import { Link } from "react-router-dom";



const Nav3 = ({signin, signup}) => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h3>
                        <Link to="/" className="logo-link">Logo</Link>
                    </h3>
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/signin-lecturer" className={`link ${signin}`}>Sign in</Link>
                        </li>
                        <li>
                            <Link to="/signup-lecturer" className={`link ${signup}`}>Sign up</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/course-reg" className="link">Course Registration</Link>
                        </li>
                        <li>
                            <Link to="/lecturer-timetable" className="link">Timetable</Link>
                        </li>
                        <li>
                            <Link to="/lecturer-courses" className="link">Courses</Link>
                        </li>
                    </ul>
                </div>
                <p id="menu">menu</p>
            </nav>
        </>
    )
}

export default Nav3
