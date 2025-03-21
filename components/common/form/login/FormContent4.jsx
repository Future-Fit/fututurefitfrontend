"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DefaultConfig from "app.config.js";
import { Toast } from 'react-bootstrap';

import GlobalConfig from "@/Global.config";

const FormContent4 = ({ onReset }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirectTo, setRedirectTo] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState();
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
    // Perform login API request here using username and password
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
      const data = await response.json();
      if (response.ok) {
        // Login successful
        const { accessToken, user } = data.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userType", user.user_type_id);
        localStorage.setItem("loggedInUserId", user.id);
        if (user.user_type_id === 3) {
          // const modalElement = document.getElementById("loginPopupModal");
          // console.log(modalElement);
          // modalElement.style.display = "none";
          // const modalBackDrop = document.getElementsByClassName('modal-backdrop');
          // modalBackDrop[0].style.display = "none";
          // const body = document.getElementsByTagName("body");
          // body[0].classList.remove("modal-open");
          // body[0].style.overflow = "auto";
          // router.push('/employers-dashboard/dashboard');
          window.location.reload();
        } else if (user.user_type_id === 4) {
          // const modalElement = document.getElementById("loginPopupModal");
          // const modalBackDrop = document.getElementsByClassName('modal-backdrop');
          // modalBackDrop[0].style.display = "none";
          // modalElement.style.display = "none";
          // const body = document.getElementsByTagName("body");
          // body[0].classList.remove("modal-open");
          // body[0].style.overflow = "auto";
          // router.push('/candidates-dashboard/my-profile');
          window.location.reload();
        }
      } else {
        // If login fails
        if (response.status === 403) {
          // If status is 403 (Forbidden), send verification link
          try {
            const verificationResponse = await fetch(`${DefaultConfig.url}/auth/verify-email`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: username,
              }),
            });

            if (verificationResponse.ok) {
              setError("Since your email is not verfified, we have sent you verification link. Please check your email. Thank you");
            } else {
              setError("Failed to send verification link");
            }
          } catch (error) {
            setError("Failed to send verification link");
            console.error("Error sending verification link:", error);
          }
        } else {
          setError(data.message || "Login failed");
        }
      }
    } catch (error) {
      console.error("What is the error here", error); // Log the specific error for debugging
      setError("An error occurred while logging in");
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rememberMe) {
      // If "Remember Me" is checked, store credentials in local storage
      localStorage.setItem("rememberedUsername", username);
    } else {
      // If not checked, clear stored credentials
      localStorage.removeItem("rememberedUsername");
    }
    handleLogin(e); // Proceed with login
  };
  return (
    <div className="form-inner">
      <div style={{ display: "grid", justifyContent: "center", fontWeight: "600", fontSize: "24px", color: GlobalConfig.Fgr1Clr }}>
        Academic Institution Portal
      </div> <br />
      <div className="col-lg-6 col-md-12" style={{ color: GlobalConfig.Fgr1Clr }}>
        <strong> <i className="la la-user"></i> Academic Institution Admin </strong>
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

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {/* password */}

        <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="field-outer" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="input-group checkboxes square">
              <input
                type="checkbox"
                name="remember-me"
                id="remember"
              // checked={rememberMe}
              // onChange={handleRememberMe}
              />
              <label htmlFor="remember" className="remember" style={{ marginLeft: '5px' }}>
                <span className="custom-checkbox"></span>
                <span style={{ verticalAlign: 'middle' }}>Remember me</span>
              </label>
            </div>
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
          If you don&apos;t have an account with us, &nbsp;
          {/* <Link
            href="/contact"
            className="call-modal"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
            style={{ color: GlobalConfig.LnkClr, textDecoration: "underline" }}
          >
            Contact Us
          </Link> */}

          <Link href="/contact" style={{
            color: GlobalConfig.LnkClr, textDecoration: "underline" 
          }}>
            Contact Us!
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

      {/* <Toast
        onClose={() => {
          setError('');
        }}
        show={Boolean(error)}
        delay={180000}
        autohide
        style={{
          position: 'fixed',
          top: '50%', // Adjust the top position
          left: '50%', // Adjust the left position
          transform: 'translate(-50%, -50%)', // Center the toast using transform
          minWidth: '200px',
          zIndex: 10000, // Ensure the Toast is above the backdrop
        }}
      >
        <Toast.Header closeButton={true}>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </Toast> */}

      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent4;
