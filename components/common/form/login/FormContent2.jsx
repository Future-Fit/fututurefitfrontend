"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DefaultConfig from "app.config.js";
import { Toast } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons

import GlobalConfig from "@/Global.config";

const FormContent2 = ({ onReset }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirectTo, setRedirectTo] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const router = useRouter();

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const clearError = () => {
    setError(""); // Clear the error message
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    clearError(); // Clear error when username changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    clearError(); // Clear error when password changes
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setError("");
    setRedirectTo(null);
    setRememberMe(false);
    // Reset other states as needed
  };

  useEffect(() => {
    if (typeof onReset === 'function') {
      onReset(resetForm);
    }
  }, [onReset]);


  useEffect(() => {
    // Check if "Remember Me" is selected and populate fields if credentials exist in local storage
    const storedUsername = localStorage.getItem("rememberedUsername");
    // const storedPassword = localStorage.getItem("rememberedPassword");

    if (rememberMe && storedUsername) {
      setUsername(storedUsername);
      // setPassword(storedPassword);
    }
  }, [rememberMe]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${DefaultConfig.url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      // Parse JSON response safely
      const data = await response.json();
      console.log("Login Response:", data); // Debugging

      if (!response.ok) {
        if (response.status === 403) {
          console.log("User email is not verified. Sending verification email...");
          await fetch(`${DefaultConfig.url}/auth/verify-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: username }),
          });
          setError("Email not verified. A verification link has been sent to your email.");
        } else {
          setError(data.message || "Login failed");
        }
        return;
      }

      // Ensure data structure is valid
      if (!data || !data.data || !data.data.accessToken || !data.data.user) {
        setError("Invalid response from server");
        console.error("Unexpected API response:", data);
        return;
      }

      // Extract user details
      const { accessToken, user } = data.data;
      console.log("User Info:", user); // Debugging

      // Save user details to localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userType", user.user_type_id);
      localStorage.setItem("loggedInUserId", user.id);
      localStorage.setItem("expiry", Date.now() + 30 * 60 * 1000); // Set expiration time
      // Check if redirectAfterLogin is stored
      const redirectPath = localStorage.getItem("redirectAfterLogin");

      if (redirectPath) {
        console.log("Redirecting to saved path:", redirectPath);
        localStorage.removeItem("redirectAfterLogin"); // Clear after using
        router.push(redirectPath);
      } else {
        // Redirect based on user type
        switch (user.user_type_id) {
          case 1:
            // router.push("/admin-dashboard/dashboard");
            window.location.reload();
            break;
          case 3:
            // router.push("/employers-dashboard/dashboard");
            window.location.reload();
            break;
          case 4:
            // router.push("/jobseeker-dashboard/my-profile");
            window.location.reload();
            break;
          case 5:
            // router.push("/student-dashboard/my-profile");
            window.location.reload();
            break;
          default:
            setError("Unknown user type");
            console.error("Unhandled user type:", user.user_type_id);
        }
      }
    } catch (error) {
      console.error("Login error:", error); // Improved debugging
      setError("An error occurred while logging in. Please try again.");
    }
  };


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rememberMe) {
      // If "Remember Me" is checked, store credentials in local storage
      localStorage.setItem("rememberedUsername", username);
      localStorage.setItem("rememberedPassword", password);
    } else {
      // If not checked, clear stored credentials
      localStorage.removeItem("rememberedUsername");
      localStorage.removeItem("rememberedPassword");
    }
    handleLogin(e); // Proceed with login
  };

  return (
    <div className="form-inner">
      <div style={{ display: "grid", justifyContent: "center", fontWeight: "600", fontSize: "24px", color: GlobalConfig.Fgr1Clr }}>
        Sign In
      </div> <br />
      <div className="col-lg-6 col-md-12" style={{ color: GlobalConfig.Fgr1Clr }}>
        <strong> <i className="la la-user"></i> Sign in to your account here... </strong>
      </div>

      {/* <!--Login Form--> */}
      <form method="post" onSubmit={handleSubmit} >
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required value={username}
            onChange={handleUsernameChange}
          />

        </div>
        {/* username */}

        <div className="form-group" style={{ position: 'relative' }}>
          <label>Password</label>
          <input
            type={passwordVisible ? "text" : "password"} // Toggle between text and password
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <div
            style={{
              position: 'absolute',
              top: '70%',
              right: '10px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Toggle between eye icons */}
          </div>
        </div>
        {/* password */}

        <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="field-outer">
            <input
              type="checkbox"
              name="remember-me"
              id="remember"
              checked={rememberMe}
              onChange={handleRememberMe}
            />
            <label htmlFor="remember" className="remember" style={{ marginLeft: '5px' }}>
              <span className="custom-checkbox"></span>
              <span style={{ verticalAlign: 'middle' }}>Remember me</span>
            </label>
          </div>
          <div className="text">
            <Link
              href="#"
              className="call-modal signup"
              data-bs-toggle="modal"
              data-bs-target="#forgetPassPopupModal"
              style={{ color: GlobalConfig.LnkClr, textDecoration: "underline" }}
            >
              Forgot Username/Password?
            </Link>
          </div>
        </div>

        <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Sign In
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

      <div
        className="bottom-box">
        <div
          className="text d-flex align-items-center justify-content-center">
          If you don&apos;t have an account with us, please&nbsp;
          <Link
            href="#"
            className="call-modal"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
            style={{ color: GlobalConfig.LnkClr, textDecoration: "underline" }}
          >
            Sign Up
          </Link>
        </div>

      </div>
      {/* End bottom-box LoginWithSocial */}

      <Toast
        onClose={() => {
          setError('');
        }}
        show={Boolean(error)}
        delay={900000}
        autohide
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '200px',
          zIndex: 10000,
        }}
      >
        <Toast.Header closeButton={true}>
          <strong className="me-auto" style={{ color: 'red', fontSize: '20px' }}>Error</strong>
          {/* Increased font size for the title */}
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)', color: 'red', fontSize: '18px' }}>{error}</Toast.Body>
        {/* Increased font size for the body */}
      </Toast>
    </div>
  );
};

export default FormContent2;
