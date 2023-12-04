"use client"
import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DefaultConfig from "app.config.js";

const ForgetPassword = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirectTo, setRedirectTo] = useState(null); // Define the redirectTo state
  const [rememberMe, setRememberMe] = useState(false); // Track the "Remember Me" checkbox state

  const router = useRouter();


  return (
    <div className="form-inner">
      <h3>Reset Your Password</h3>
      <h3 style={{ fontSize: '15px', fontWeight: 'lighter' }}>Reset Password</h3>

      {/* <!--Login Form--> */}
      <form method="post" >
        <div className="form-group">
          <label>Email Address</label>
          <input type="text" name="username" placeholder="Email Address" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Reset Password
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      {error && <div className="error-message" style={{ color: 'red', fontWeight: 'bold' }}>{error}</div>}

      {redirectTo && (
        <Link href={redirectTo}>
          <span>Redirecting...</span>
        </Link>
      )}

      <div className="bottom-box">
        <div className="text d-flex align-items-center justify-content-center">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
