"use client"
import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DefaultConfig from "app.config.js";
import axios from "axios"; // Import Axios for making HTTP requests
import ResetPassword from "./ResetPassword";
import apiConfig from "@/app.config";

const ForgetPassword = () => {

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [redirectTo, setRedirectTo] = useState(null); // Define the redirectTo state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetInfo, setResetInfo] = useState(null);
  const [showResetDialog, setShowResetDialog] = useState(false); // State to control the reset password dialog

  const router = useRouter();

  useEffect(() => {
    if (resetInfo?.success) {
      console.log('Showing Reset Dialog');
      setShowResetDialog(true);
    }
  }, [resetInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${apiConfig.url}/auth/forget-password`, {
        email: username
      });
      setResetInfo(response.data);
      setShowResetDialog(true);
    } catch (error) {
      if (error.response && error.response.data.message === 'User email does not exist.') {
        setError("User email does not exist.");
      } else {
        setError("Password reset failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  useEffect(() => {
    if (showResetDialog) {
      const timer = setTimeout(() => {
        setShowResetDialog(false);
      }, 5000); // 5 seconds timeout

      return () => clearTimeout(timer);
    }
  }, [showResetDialog]);

  const modalClass = `modal fade ${showResetDialog ? 'show' : ''}`;


  return (

    <div className="form-inner">
      <h3>Reset Your Password</h3>
      <h3 style={{ fontSize: '15px', fontWeight: 'lighter' }}>Reset Password</h3>

      {/* <!--Login Form--> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            name="username"
            placeholder="Email Address"
            required value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
            disabled={isSubmitting}
          >
            Reset Password
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
      {/* {resetInfo && (
          <div className="reset-info">
            <p style={{ color: 'green' }}>Password reset email sent successfully, Please check your email</p>
          </div>
        )} */}

      {resetInfo && (
        <div className="reset-info">
          <p style={{ color: "green" }}>{resetInfo.message}</p>
        </div>
      )}
      {error && (
        <div className="error-message" style={{ color: "red", fontWeight: "bold" }}>
          {error}
        </div>
      )}

      <div className="bottom-box">
        <div className="text d-flex align-items-center justify-content-center">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
            style={{ color: 'blue' }}
          >
            Sign Up
          </Link>
        </div>
      </div>
      {error && (
        <div className="error-message" style={{ color: 'red', fontWeight: 'bold' }}>
          {error}
        </div>
      )}
    </div>

  );
};

export default ForgetPassword;
