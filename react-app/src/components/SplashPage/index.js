import React from 'react';
import './SplashPage.css'

function SplashPage() {
    return (
        <>
            <div id='splash-container'>
                <img id='logo' alt='logiderm logo' src='https://i.imgur.com/m66mLpK.png' />
                <div className='gif-container'>
                    <img id='banner-gif' alt='' src='https://i.imgur.com/ovB1AZi.jpg' />
                </div>
                <div className='prof-div'>
                    <a href='https://www.linkedin.com/in/ivy-huynh-43718821b/'>
                        <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                    <a href='https://github.com/WellHelloIvy'>
                        <i class="fab fa-github-square fa-3x"></i>
                    </a>
                    <a href='http://programmatic-app.herokuapp.com'>
                        <i class="far fa-smile fa-3x"></i>
                    </a>
                </div>
                <div className='dev'>
                    <b>About the Developer:</b>
                </div>
            </div>
        </>
    )
}

export default SplashPage;
