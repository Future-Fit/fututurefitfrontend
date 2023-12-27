"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import LoginPopup from './LoginPopup';
import MobileMenu from '@/components/header/MobileMenu';
import DefaulHeader2 from '@/components/header/DefaultHeader';
import FooterDefault from "../../../footer/common-footer";

const ResetPassword = ({ token }) => {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [resetInfo, setResetInfo] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [redirectTo, setRedirectTo] = useState(null); // Define the redirectTo state
    const [passwordError, setPasswordError] = useState("");

    console.log("Token:", token); // Add this line to debug

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return passwordRegex.test(password);
    };



    const resetPassword = async (e) => {
        e.preventDefault()
        setPasswordError("");
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (validatePassword(password)) {
            try {
                const response = await axios.post(`https://api.futurefitinternational.com/auth/reset-password/${token}`, {
                    newPassword: password,
                });
                setResetInfo(response.data); // Store response data in resetInfo state
                // Handle success (optional)
                console.log('Password reset successfully:', response.data);
                setPassword('');
                setConfirmPassword('');
                router.push('/login'); // Redirect to the login page after successful password reset
            } catch (error) {
                setError('Password reset failed due to token expiration, Please try again.');
                setPassword('');
                setConfirmPassword('');
            }
        } else {
            setPasswordError("Password should contain at least 8 characters, including uppercase, lowercase, number, and special character.");

        }
    };

    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"></span>

            {/* <!-- Header Span for hight --> */}

            <LoginPopup />
            {/* End Login Popup Modal */}

            <DefaulHeader2 />
            {/* End Header */}

            <MobileMenu />
            <div className="form-inner">
                {/* <!--Login Form--> */}
                <form onSubmit={resetPassword}>
                    <div className="form-group col-lg-7 col-md-12">
                        <label>New Password</label>
                        <input
                            type="password"
                            placeholder="New Password"
                            name='newPassword'
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        />
                        {passwordError && <span className="error-message">{passwordError}</span>}
                    </div>

                    <div className="form-group col-lg-7 col-md-12">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            name='confirmPassword'
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        />
                        {passwordError && <span className="error-message">{passwordError}</span>}
                    </div>

                    <div className="form-group col-lg-6 col-md-12">
                        <button
                            className="theme-btn btn-style-one"
                            type="submit"
                            name="log-in"
                            disabled={isSubmitting}
                        >
                            Change Password
                        </button>
                    </div>
                    {/* login */}
                </form>
                {/* End form */}


                {redirectTo && (
                    <Link href={redirectTo}>
                        <span>Redirecting...</span>
                    </Link>
                )}
                {resetInfo && (
                    <div className="reset-info">
                        <p style={{ color: 'green' }}>Password Changed Successfully,</p>
                    </div>
                )}
                {error && (
                    <div className="error-message" style={{ color: 'red', fontWeight: 'bold' }}>
                        {error}
                    </div>
                )}
            </div>
            {/* <FooterDefault /> */}
        </div>
    );
};

export default ResetPassword;
