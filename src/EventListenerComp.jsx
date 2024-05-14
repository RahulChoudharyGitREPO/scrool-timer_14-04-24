import React, { useEffect, useState } from 'react';

const EventListenerComponent = () => {
    const [scrollCount, setScrollCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollCount(prevCount => prevCount + 1);
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '200vh', }}>
            <h2>Event Listener Component</h2>
            <p>This component listens for scroll events.</p>
            <p>Scroll Event Count: {scrollCount}</p>
        </div>
    );
};

export default EventListenerComponent;
