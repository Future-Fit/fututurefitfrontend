"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DefaultConfig from "app.config.js";

const FormContent = ({ onReset }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirectTo, setRedirectTo] = useState(null); // Define the redirectTo state
  const [rememberMe, setRememberMe] = useState(false); // Track the "Remember Me" checkbox state
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
    const storedPassword = localStorage.getItem("rememberedPassword");

    if (rememberMe && storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
    }
  }, [rememberMe]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login API request here using username and password
    console.log("datas are", username, password);
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
          const modalElement = document.getElementById("loginPopupModal");
          console.log(modalElement);
          modalElement.style.display  = "none";
          const modalBackDrop =  document.getElementsByClassName('modal-backdrop');
          modalBackDrop[0].style.display = "none";
          const body = document.getElementsByTagName("body");
          body[0].classList.remove("modal-open");
          body[0].style.overflow = "auto";
          router.push('/employers-dashboard/dashboard');
        } else if (user.user_type_id === 4) {
          const modalElement = document.getElementById("loginPopupModal");
          const modalBackDrop =  document.getElementsByClassName('modal-backdrop');
          modalBackDrop[0].style.display = "none";
          modalElement.style.display  = "none";
          const body = document.getElementsByTagName("body");
          body[0].classList.remove("modal-open");
          body[0].style.overflow = "auto";
          router.push('/candidates-dashboard/my-profile');
        }
      } else {
        setError(data.message || "Login failed");
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
      <h3>Sign In</h3>
      <h3 style={{ fontSize: '15px', fontWeight: 'lighter' }}>If you have already signed up with us, please sign in below.</h3>

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
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange} // Use the new handler for password change

            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input
                type="checkbox"
                name="remember-me"
                id="remember"
                checked={rememberMe}
                onChange={handleRememberMe} />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>

            <div className="bottom-box">
              <div className="text d-flex align-items-center justify-content-center">
                <Link
                  href="#"
                  className="call-modal signup"
                  data-bs-toggle="modal"
                  data-bs-target="#forgetPassPopupModal"
                >
                  Forgot Username/Password?
                </Link>
              </div>

              {/* <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial /> */}
            </div>
            {/* <a href="#" style={{ color: '#909090' }} className="pwd">
              Forgot Username/Password?
            </a> */}
          </div>
        </div>
        {/* forgot password */}

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

      {error && <div className="error-message" style={{ color: 'red', fontWeight: 'bold' }}>{error}</div>}

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
          >
            Sign Up
          </Link>
        </div>

        {/* <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial /> */}
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
