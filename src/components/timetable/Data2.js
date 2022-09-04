import React from 'react';
import './styles/table.css';

const Data2 = () => {
    return (
        <>
            <div className="days">
                <h4 className='day' tabIndex='1'>Monday</h4>
                <h4 className='day' tabIndex='1'>Tuesday</h4>
                <h4 className='day' tabIndex='1'>Wednesday</h4>
                <h4 className='day' tabIndex='1'>Thursday</h4>
                <h4 className='day' tabIndex='1'>Friday</h4>
            </div>
            <table className='table2'>
                <tr>
                    <th className='th2'>Time</th>
                    <th className='th2'>Course</th>
                    <th className='th2'>Venue</th>
                </tr>
                <tr>
                    <td className='td2'>8:00am - 9:00am</td>
                    <td className='td2'>Course 1</td>
                    <td className='td2'>Classroom 1</td>
                </tr>
                <tr>
                    <td className='td2'>9:00am - 10:00am</td>
                    <td className='td2'>Course 1</td>
                    <td className='td2'>Classroom 1</td>
                </tr>
                <tr>
                    <td className='td2'>10:00am - 11:00am</td>
                    <td className='td2'>Course 1</td>
                    <td className='td2'>Classroom 1</td>
                </tr>
                <tr>
                    <td className='td2'>11:00am - 12:00pm</td>
                    <td className='td2'>Course 1</td>
                    <td className='td2'>Classroom 1</td>
                </tr>
                <tr>
                    <td className='td2'>12:00pm - 1:00pm</td>
                    <td className='td2'>Course 1</td>
                    <td className='td2'>Classroom 1</td>
                </tr>
                <tr>
                    <td className='td2'>1:00pm - 2:00pm</td>
                    <td className='td2'>Course 1</td>
                    <td className='td2'>Classroom 1</td>
                </tr>
                <tr>
                    <td className='td2'>3:00pm - 4:00pm</td>
                    <td className='td2'>Course 1</td>
                    <td className='td2'>Classroom 1</td>
                </tr>
                <tr>
                    <td className='td2'>4:00pm - 5:00pm</td>
                    <td className='td2'>Course 1</td>
                    <td className='td2'>Classroom 1</td>
                </tr>
                <tr>
                    <td className='td2'>5:00pm - 6:00pm</td>
                    <td className='td2'>Course 1</td>
                    <td className='td2'>Classroom 1</td>
                </tr>
            </table>
        </>
    )
}

export default Data2
