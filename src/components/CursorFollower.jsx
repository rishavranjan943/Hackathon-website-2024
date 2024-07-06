import React, { useState, useEffect } from 'react';
import './CursorFollower.css';

const CursorFollower = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.pageX, y: e.pageY });
            setTimeout(() => {
                setFollowerPosition({ x: e.pageX, y: e.pageY });
            }, 100); // Delay the follower for a trailing effect
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <img
                src="src/assets/images/LandingPage/cursor1.svg"
                alt="Custom Cursor"
                className="custom-cursor"
                style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
            />
            <img
                src="src/assets/images/LandingPage/cursor.svg"
                alt="Cursor Follower"
                className="cursor-follower"
                style={{ left: `${followerPosition.x}px`, top: `${followerPosition.y}px` }}
            />
        </>
    );
};

export default CursorFollower;
