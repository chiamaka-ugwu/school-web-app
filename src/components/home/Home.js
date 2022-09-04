import React from 'react';
import './style/home.css';
import image1 from "../../Asset/images/image1.png"

const Home = () => {
    return (
        <main className='home'>
            <div className="home-left">
                <h2>Lorem Ipsum</h2>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="home-right">
                <img src={image1} alt="" id="image" />
                <div className="btn-container">
                    <button className="active"></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </main>
    )
}

export default Home
