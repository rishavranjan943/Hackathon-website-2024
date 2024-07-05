import React, { useState, useEffect } from 'react';
import './CursorFollower.css';

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.pageX, y: e.pageY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <img
            src="src/assets/images/LandingPage/cursor.svg"
            alt="Cursor Image"
            className="cursor-follower"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default CursorFollower;
