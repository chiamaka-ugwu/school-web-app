import React, { useState } from "react";
import "./styles/nav.css";
import { Link } from "react-router-dom";

const Nav = ({signin, signup}) => {
    const [menu, setMenu] = useState(false);
    

    return (
        <nav>
            <div className="logo">
                <h3>
                    <Link to="/" className="logo-link">Logo</Link>
                </h3>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/signin" className={`link ${signin}`}>Sign in</Link>
                    </li>
                    <li>
                        <Link to="/signup" className={`link ${signup}`}>Sign up</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/course-reg" className="link">Course Registration</Link>
                    </li>
                    <li>
                        <Link to="/timetable" className="link">Timetable</Link>
                    </li>
                    <li>
                        <Link to="/courses" className="link">Courses</Link>
                    </li>
                </ul>
            </div>
            <p id="menu">menu</p>
        </nav>
  );
};

export default Nav;
