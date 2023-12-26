import React, { useState, useEffect } from 'react';

const CookiesPopup = () => {
    const [acceptedCookies, setAcceptedCookies] = useState(false);
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (cookiesAccepted) {
            setAcceptedCookies(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setAcceptedCookies(true);
        setShowPopup(false);
    };

    const rejectCookies = () => {
        setShowPopup(false);
    };

    if (!showPopup || acceptedCookies) {
        return null; // If cookies are accepted or popup is hidden, don't render it
    }

    return (
        <div className="cookies-popup" 
        style={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            background: '#fff', 
            padding: '10px', 
            boxShadow: '0px -2px 10px rgba(0,0,0,0.1)' }}>
            <p>This website uses cookies to improve user experience.</p>
            <div>
                <button onClick={acceptCookies} style={{ marginRight: '10px' }}>Accept</button>
                <button onClick={rejectCookies}>Reject</button>
            </div>
        </div>
    );
};

export default CookiesPopup;
