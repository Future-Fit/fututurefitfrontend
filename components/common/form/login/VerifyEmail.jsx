"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginPopup from './LoginPopup';
import MobileMenu from '@/components/header/MobileMenu';
import DefaulHeader2 from '@/components/header/DefaultHeader';
import FooterDefault from "../../../footer/common-footer";
import apiConfig from '@/app.config';

const VerifyEmail = ({ token }) => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true); // New loading state
    const [verifyInfo, setVerifyInfo] = useState(null);

    const verifyEmail = async () => {
        try {
            // const response = await axios.post(`${apiConfig.url}/auth/verifyEmail/${token}`);
            const response = await axios.post(`https://api.futurefitinternational.com/auth/verifyEmail/${token}`);
            setVerifyInfo(response.data);
            console.log('Email Verified:', response.data);
        } catch (error) {
            setError('The verification link we sent you has expired; please sign up again.');
        } finally {
            setLoading(false); // Set loading to false once verification completes (either success or error)
        }
    }

    useEffect(() => {
        verifyEmail();
    }, [token]);

    return (
        <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LoginPopup />
            <DefaulHeader2 />
            <MobileMenu />

            <div style={{ marginTop: '120px', textAlign: 'center' }}>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : (
                    <>
                        <p style={{ color: 'green' }}>Thank you! Your email is verified. Please sign in using the link below.</p>
                        <div className="form-group" style={{ paddingTop: '40px' }}>
                            <button
                                className="theme-btn btn-style-one"
                                type="submit"
                                name="log-in"
                                onClick={() => router.push('/login')}
                            >
                                Sign In
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* <FooterDefault /> */}
        </div>
    );

};
export default VerifyEmail;
