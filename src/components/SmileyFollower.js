import React, { useEffect, useState, useRef } from 'react';
import './SmileyFollower.css';

const SmileyFollower = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
    const [expression, setExpression] = useState('normal'); // normal, excited, thinking, searching
    const [lastMoveTime, setLastMoveTime] = useState(Date.now());
    const lastPositionRef = useRef({ x: 0, y: 0, time: Date.now() });
    const idleTimerRef = useRef(null);
    const searchAnimationRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const now = Date.now();
            const timeDiff = now - lastPositionRef.current.time;

            // Stop searching animation if it's running
            if (searchAnimationRef.current) {
                clearInterval(searchAnimationRef.current);
                searchAnimationRef.current = null;
            }

            // Calculate mouse speed
            const distance = Math.sqrt(
                Math.pow(e.clientX - lastPositionRef.current.x, 2) +
                Math.pow(e.clientY - lastPositionRef.current.y, 2)
            );
            const speed = timeDiff > 0 ? distance / timeDiff : 0;

            // Update expression based on speed
            if (speed > 2) {
                setExpression('excited');
            } else {
                setExpression('normal');
            }

            // Calculate eye position (relative to smiley position in top-left)
            const smileyX = 40; // position of smiley center
            const smileyY = 40;
            const maxDistance = 8; // max eye movement in pixels

            const angle = Math.atan2(e.clientY - smileyY, e.clientX - smileyX);
            const distance_normalized = Math.min(
                Math.sqrt(Math.pow(e.clientX - smileyX, 2) + Math.pow(e.clientY - smileyY, 2)) / 200,
                1
            );

            setEyePosition({
                x: Math.cos(angle) * maxDistance * distance_normalized,
                y: Math.sin(angle) * maxDistance * distance_normalized
            });

            setLastMoveTime(now);
            lastPositionRef.current = { x: e.clientX, y: e.clientY, time: now };

            // Reset idle timer
            clearTimeout(idleTimerRef.current);
            idleTimerRef.current = setTimeout(() => {
                setExpression('thinking');
            }, 2000);
        };

        const handleScroll = () => {
            setExpression('excited');
            clearTimeout(idleTimerRef.current);
            idleTimerRef.current = setTimeout(() => {
                setExpression('normal');
            }, 500);
        };

        const handleMouseLeave = () => {
            setExpression('searching');

            // Animate eyes looking around in a circle
            let angle = 0;
            searchAnimationRef.current = setInterval(() => {
                angle += 0.15;
                const searchRadius = 6;
                setEyePosition({
                    x: Math.cos(angle) * searchRadius,
                    y: Math.sin(angle) * searchRadius
                });
            }, 50);
        };

        const handleMouseEnter = () => {
            setExpression('normal');
            if (searchAnimationRef.current) {
                clearInterval(searchAnimationRef.current);
                searchAnimationRef.current = null;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        // Initial idle timer
        idleTimerRef.current = setTimeout(() => {
            setExpression('thinking');
        }, 2000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            clearTimeout(idleTimerRef.current);
            if (searchAnimationRef.current) {
                clearInterval(searchAnimationRef.current);
            }
        };
    }, []);

    return (
        <div className="smiley-follower">
            <svg width="60" height="60" viewBox="0 0 100 100">
                {/* Face */}
                <circle cx="50" cy="50" r="45" fill="#FFD93D" stroke="#333" strokeWidth="2" />

                {/* Left Eye */}
                <g className="eye">
                    <ellipse
                        cx={35 + eyePosition.x}
                        cy={40 + eyePosition.y}
                        rx={expression === 'excited' ? '8' : '6'}
                        ry={expression === 'excited' ? '12' : '8'}
                        fill="#333"
                    />
                </g>

                {/* Right Eye */}
                <g className="eye">
                    <ellipse
                        cx={65 + eyePosition.x}
                        cy={40 + eyePosition.y}
                        rx={expression === 'excited' ? '8' : '6'}
                        ry={expression === 'excited' ? '12' : '8'}
                        fill="#333"
                    />
                </g>

                {/* Mouth - changes based on expression */}
                {expression === 'normal' && (
                    <path
                        d="M 30 65 Q 50 75 70 65"
                        stroke="#333"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                    />
                )}

                {expression === 'excited' && (
                    <>
                        <circle cx="50" cy="65" r="12" fill="#333" />
                        <circle cx="50" cy="65" r="8" fill="#FF6B6B" />
                    </>
                )}

                {expression === 'thinking' && (
                    <>
                        <ellipse cx="50" cy="65" rx="10" ry="6" fill="#333" />
                        {/* Thought bubble dots */}
                        <circle cx="75" cy="25" r="3" fill="#333" opacity="0.5" />
                        <circle cx="82" cy="18" r="4" fill="#333" opacity="0.5" />
                        <circle cx="90" cy="12" r="5" fill="#333" opacity="0.5" />
                    </>
                )}

                {expression === 'searching' && (
                    <>
                        <path
                            d="M 35 68 Q 50 65 65 68"
                            stroke="#333"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Question mark above head */}
                        <text x="75" y="20" fontSize="16" fill="#333" opacity="0.6">?</text>
                    </>
                )}

                {/* Blush marks */}
                <circle cx="20" cy="55" r="6" fill="#FFB6C1" opacity="0.4" />
                <circle cx="80" cy="55" r="6" fill="#FFB6C1" opacity="0.4" />
            </svg>
        </div>
    );
};

export default SmileyFollower;
