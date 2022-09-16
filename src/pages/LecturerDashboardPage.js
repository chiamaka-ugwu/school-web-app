import React from 'react';
import Nav4 from '../components/nav/Nav4';
import Dashboard from '../components/dashboard/Dashboard';

const LecturerDashboardPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav4 />
            <Dashboard details="Staff Details" />
        </>
    )
}

export default LecturerDashboardPage
