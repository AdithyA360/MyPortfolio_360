import React from 'react';
import './Stars.css'; // Import the CSS file for the stars

const Stars = () => {
    return (
        <div className="stars">
            {Array.from({ length: 50 }).map((_, index) => (
                <div className="star" key={index}></div>
            ))}
        </div>
    );
};

export default Stars;
