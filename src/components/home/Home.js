import React from 'react';
import './style/home.css';
import image1 from "../../Asset/images/image1.png";
import image2 from "../../Asset/images/image2.png";
import image3 from "../../Asset/images/image3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
    return (
        <main className='home'>
            <div className="home-left">
                <h2>Lorem Ipsum</h2>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="home-right">
                <Carousel autoPlay
                    infiniteLoop
                    showArrows={false}

                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                        const defStyle = { marginLeft: 20, marginTop: '10', color: "transparent", cursor: "pointer",  width: "15px", height: "15px", borderRadius: "100%", padding: "6px", fontSize : "1px" 
                    };
                    const style = isSelected
                        ? { ...defStyle, backgroundColor: "#559F94" }
                        : { ...defStyle, backgroundColor: "#C4C4C4" };
                        return (
                            <span
                            style={style}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                        >
                            {index}
                        </span>
                        );
                    }}>
                    <div>
                        <img src={image1} alt="image1" />
                    </div>
                    <div>
                        <img src={image2} alt="image2" />
                    </div>
                    <div>
                        <img src={image3} alt="image3" />
                    </div>
                </Carousel>
                {/* <img src={image1} alt="" id="image" />
                <div className="btn-container">
                    <button className="active"></button>
                    <button></button>
                    <button></button>
                </div> */}
            </div>
        </main>
    )
}

export default Home
