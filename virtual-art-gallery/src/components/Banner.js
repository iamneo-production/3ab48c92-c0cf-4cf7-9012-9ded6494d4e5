import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Home.css';

function Banner() {
    return (
        <>
            <div className="gallery-entrance">
                <div className="gallery-entrance-background">
                    {/* Background image */}
                </div>
                <div className="gallery-entrance-content">
                    <h1 className="gallery-title">Virtual Art Gallery</h1>
                    <p className="welcome-message">Explore the world of art</p>
                    <NavLink to="/artwork" className="btn enter-button">Enter Gallery</NavLink>
                </div>
            </div>
        </>
    )
}

export default Banner