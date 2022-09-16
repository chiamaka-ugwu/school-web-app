import React from 'react';
import Nav2 from '../components/nav/Nav2';
import Dashboard from '../components/dashboard/Dashboard';


const DashboardPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav2 />
            <Dashboard details="Student Details" />
        </>
    )
}

export default DashboardPage
