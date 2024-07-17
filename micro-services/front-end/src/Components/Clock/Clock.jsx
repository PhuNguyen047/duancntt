import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const getFormattedTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    };

    const getGreeting = () => {
        const hours = new Date().getHours();
        return hours < 12 ? 'GOOD MORNING' : 'GOOD AFTERNOON';
    };

    const [currentTime, setCurrentTime] = useState(getFormattedTime());
    const [greeting, setGreeting] = useState(getGreeting());

    const updateTime = () => {
        setCurrentTime(getFormattedTime());
        setGreeting(getGreeting());
    };

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <h1 className='title'>{currentTime}</h1>
            <h2>{greeting}</h2>
        </div>
    );
}

export default Clock;
