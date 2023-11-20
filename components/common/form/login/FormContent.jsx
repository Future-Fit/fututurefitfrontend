"use client"
import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { useState } from "react";
import { useRouter } from "next/router";

const FormContent = () => {

  // const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirectTo, setRedirectTo] = useState(null); // Define the redirectTo state


  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login API request here using username and password
    try {
      const response = await fetch("http://190.92.151.79:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      
      const data = await response.json();
      if (response.ok) {
        // Login successful
        const { accessToken, user } = data.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userType", user.user_type_id);

        // Redirect based on user type
        if (user.user_type_id === 1) {
          setRedirectTo("/candidates-dashboard/dashboard");
        } else if (user.user_type_id === 2) {
          setRedirectTo("/candidates-dashboard/dashboard");
        }else if (user.user_type_id === 3) {
          setRedirectTo("/employers-dashboard/dashboard");
        }
      } else {
        // Login failed, display error message
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred while logging in");
    }
  };
  return (
    <div className="form-inner">
      <h3>Login to FFI</h3>

      {/* <!--Login Form--> */}
      <form method="post"  onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            {/* <a href="#" className="pwd">
              Forgot password?
            </a> */}
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      {error && <div className="error-message" style={{color:'red', fontWeight:'bold'}}>{error}</div>}

      {redirectTo && (
        <Link href={redirectTo}>
          <span>Redirecting...</span>
        </Link>
      )}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
