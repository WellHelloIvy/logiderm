import React from 'react';
import Footer from './Footer';

function SplashPage() {
    return (
        <>
            <div id='splash-container'>
                <div className='gif-container'>
                    <img id='banner-gif' src='https://media4.giphy.com/media/Hd3EXEZmacCoYtwVZR/giphy.gif?cid=ecf05e47591sypnoq8g6kmbz4q04e44gtzcm6s3mluu0qurl&rid=giphy.gif&ct=g' />
                </div>
                <div className='filler-div'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>scribble</p>
                </div>
                <div className='prof-div'>
                    <a href='programmatic-app.herokuapp.com'><img id='programmatic' src='https://i.imgur.com/NNFk4Us.png' /></a>
                    <div>
                        <a href='https://www.linkedin.com/in/ivy-huynh-43718821b/'><img className='prof-link linkedin' src='https://i.imgur.com/8jn6Vm2.png' /></a>
                        <a href='https://github.com/WellHelloIvy'><img className='prof-link github' src='https://i.imgur.com/4LBqWMQ.png' /></a>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default SplashPage;
