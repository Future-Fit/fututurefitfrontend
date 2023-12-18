"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginPopup from './LoginPopup';
import MobileMenu from '@/components/header/MobileMenu';
import DefaulHeader2 from '@/components/header/DefaulHeader2';
import FooterDefault from "../../../footer/common-footer";

const VerifyEmail = ({ token }) => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [verifyInfo, setVerifyInfo] = useState(null);

    console.log("Token:", token); // Add this line to debug

    const verifyEmail = async (e) => {
        try {
            const response = await axios.post(`https://api.futurefitinternational.com/auth/verifyEmail/${token}`);
            setVerifyInfo(response.data);
            console.log('Email Verified:', response.data);
            router.push('/');
        } catch (error) {
            // Handle errors
            setError('Token Expired.');
        }
    }

    useEffect(() => {
        verifyEmail(); // Trigger verification on component mount
    }, [token]);
    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"></span>

            {/* <!-- Header Span for hight --> */}

            <LoginPopup />
            {/* End Login Popup Modal */}

            <DefaulHeader2 />
            {/* End Header */}

            <MobileMenu />

            <div className="page-wrapper dashboard">
            {/* ... Other components and content */}
            <p style={{ color: 'green' }}>{error ? error : 'Thank You, Email Verified'}</p>
        </div>
            {/* <FooterDefault /> */}
        </div>
    );

};
export default VerifyEmail;
