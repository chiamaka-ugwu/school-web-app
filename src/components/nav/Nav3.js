import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons'




const Nav3 = ({signin, signup}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    return (
        <>
            <nav>
                <div className="logo">
                    <h3>
                        <Link to="/" className="logo-link">Logo</Link>
                    </h3>
                </div>
                <div className="links false">
                    <ul>
                        <li>
                            <Link to="/sign-in-lecturer" className={`link ${signin}`} onClick={toggle}>Sign in</Link>
                        </li>
                        <li>
                            <Link to="/signup-lecturer" className={`link ${signup}`} onClick={toggle}>Sign up</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/course-reg" className="link" onClick={toggle}>Course Registration</Link>
                        </li>
                        <li>
                            <Link to="/lecturer-timetable" className="link" onClick={toggle}>Timetable</Link>
                        </li>
                        <li>
                            <Link to="/lecturer-courses" className="link" onClick={toggle}>Courses</Link>
                        </li>
                    </ul>
                </div>
                <div className={open ? "links " : "none"}>
                    <ul>
                        <li>
                            <Link to="/sign-in-lecturer" className={`link ${signin}`} onClick={toggle}>Sign in</Link>
                        </li>
                        <li>
                            <Link to="/signup-lecturer" className={`link ${signup}`} onClick={toggle}>Sign up</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/course-reg" className="link" onClick={toggle}>Course Registration</Link>
                        </li>
                        <li>
                            <Link to="/lecturer-timetable" className="link" onClick={toggle}>Timetable</Link>
                        </li>
                        <li>
                            <Link to="/lecturer-courses" className="link" onClick={toggle}>Courses</Link>
                        </li>
                    </ul>
                </div>
                <div id="menu" onClick={toggle}><FontAwesomeIcon icon={open ? faClose : faBars} size="lg"  /></div>
            </nav>
        </>
    )
}

export default Nav3
