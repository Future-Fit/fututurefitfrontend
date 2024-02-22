import GlobalConfig from '@/Global.config';
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

    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowResize);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleWindowResize);
            }
        };
    }, []);

    if (!showPopup || acceptedCookies) {
        return null; // If cookies are accepted or popup is hidden, don't render it
    }

    return (
        // Check for screen size and adjust popup: for mobile - 100%, for eveything else - 380px
        <div className="cookies-popup" style={{ minWidth: "310px", width: windowWidth < 578 ? "100%" : "310px",
            position: 'fixed', bottom: 0, left: 0, background: GlobalConfig.BgrClr2, borderRadius: '5px',
            padding: '10px', boxShadow: '0px -2px 10px rgba(0,0,0,0.1)', zIndex: '1000'
        }}>
            <p>We use cookies to improve user experience.</p>
            <p>Learn more about our cookie policy&nbsp;
                <a target='_blank' href="/security" style={{
                    textDecorationLine: "underline", color: GlobalConfig.Fgr1Clr
                }}>here:</a>
            </p>
            <div>
                <button onClick={acceptCookies} style={{
                    color: GlobalConfig.Fgr1Clr, marginRight: '10px'
                }}>Accept</button>
                <button onClick={rejectCookies} style={{
                    color: GlobalConfig.Fgr1Clr
                }}
                >Reject</button>
            </div>
        </div>
    );
};

export default CookiesPopup;
