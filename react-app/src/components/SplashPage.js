import React from 'react';
import Footer from './Footer';

function SplashPage() {
    return (
        <>
            <div id='splash-container'>
                <div className='gif-container'>
                    <img id='banner-gif' src='https://media4.giphy.com/media/Hd3EXEZmacCoYtwVZR/giphy.gif?cid=ecf05e47591sypnoq8g6kmbz4q04e44gtzcm6s3mluu0qurl&rid=giphy.gif&ct=g' />
                </div>
                <div>
                    <p>words</p>
                    <p>scribble</p>
                </div>
                <div>
                    <p> : ) </p>
                    <a href='https://www.linkedin.com/in/ivy-huynh-43718821b/'><img className='prof-link' src='https://i.imgur.com/8jn6Vm2.png' /></a>
                    <a href='https://github.com/WellHelloIvy'><img className='prof-link' src='https://i.imgur.com/4LBqWMQ.png'/></a>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SplashPage;
