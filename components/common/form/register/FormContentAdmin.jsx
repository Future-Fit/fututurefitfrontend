import apiConfig from "@/app.config";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons
import { Toast } from 'react-bootstrap';

const FormContent = ({ onReset, closeModal, myAdminToast, myAdminError }) => {
  const [logoImg, setLogoImg] = useState("");
  const [userType, setUserType] = useState(""); // Added state for user type
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [passwordconVisible, setPasswordConVisible] = useState(false); // State to toggle password visibility
  const [error,setError] = useState(null);
  const [success,setSuccess] = useState(null);
  const initialUserTypeId = userType === "student" ? 5 : 4;
  const [formData, setFormData] = useState({
    user_type_id: initialUserTypeId,
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: ""
  });
  const [passwordError, setPasswordError] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const resetForm = () => {
    setFormData({
      user_type_id: 4,
      fname: "",
      lname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setPasswordError("");
    setError("")
    setLogoImg("");
    setRegistrationMessage(null);
    setSuccess(null);
    setUserData(null);
  };

  useEffect(() => {
    if (typeof onReset === 'function') {
      onReset(resetForm);
    }
  }, [onReset]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistrationMessage(null);
    setSuccess(null);

    if (formData.password !== formData.confirmPassword) {
      setError("passwords do not match");
      setPasswordError("Passwords do not match");
      return; // Prevent form submission if passwords don't match
    }

    if (validatePassword(formData.password)) {
      // Password meets the criteria
      try {
        const { confirmPassword, ...dataToSend } = formData;
        dataToSend["isVerifiedUser"] = true;
        const formDataToSend = new FormData();

        Object.keys(dataToSend).forEach(key => {
          formDataToSend.append(key, dataToSend[key]);
        });

        const response = await fetch(`${apiConfig.url}/users/create`, {
          method: "POST",
          body: formDataToSend,
        });
        const responseData = await response.json();

        if (response.ok) {
          setUserData(responseData.result); // Save user data to state
          setSuccess(responseData.message || "Registration successful!");
          setRegistrationMessage(responseData.message || "Registration successful!"); // Set message from API response
          setShowForm(false);
      
          resetForm();
          // Additional API call to send verification email
          try {

            await fetch(`${apiConfig.url}/auth/verify-email`, {

              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: formData.email,
              }),
            });
            setSuccess("Thank you for signing up with FFI. A verification email has been sent to your email. Please check your email. You many need to check your spam folder.");

            setRegistrationMessage("Thank you for signing up with FFI. A verification email has been sent to your email. Please check your email. You many need to check your spam folder.")
            closeModal();
          } catch (error) {
            console.error("Failed to send verification email:", error);
          }

        } else {
          setSuccess(responseData.message || "Registration failed.");
          setRegistrationMessage(responseData.message || "Registration failed.");
          resetForm();
          setError("Registration failed. Email or Phone number is already registerd. So, please try to use another phone and/or email, Thank you");
          return
        }
      } catch (error) {
        // Handle network errors or other exceptions
        setError("An error occured: " + error);
        setRegistrationMessage("An error occurred: " + error);
      }
    } else {
  setError("Password should contain at least 8 characters, including uppercase, lowercase, number, and special character.");
      setPasswordError("Password should contain at least 8 characters, including uppercase, lowercase, number, and special character.");
    }
  };


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };
  const togglePasswordConVisibility = () => {
    setPasswordConVisible(!passwordconVisible); // Toggle password visibility
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "password") {
      setError("");
      setPasswordError("");
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleUserTypeChange = (e) => {
    const selectedUserType = e.target.value;
    let userTypeId;

    if (!selectedUserType) {
      alert("Please select user Type");
      return;
    } else {
      // Assign user type ID based on selection
      if (selectedUserType === "admin") {
        userTypeId = 1;
      } else if (selectedUserType === "student") {
        userTypeId = 5;
      } else {
        userTypeId = 4;
      }
      setUserType(selectedUserType);
      setFormData({
        ...formData,
        user_type_id: selectedUserType === "student" ? 5 : 4 // Adjust user_type_id based on selection
      });
    }
  };

  return (
    <>
      {showForm && (
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{ display: 'inline-block', marginLeft: '5px' }}>First Name</label>
            <label style={{ color: 'red', display: 'inline-block' }}>*</label>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              required value={formData.fname}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label style={{ display: 'inline-block', marginLeft: '5px' }}>Last Name</label>
            <label style={{ color: 'red', display: 'inline-block' }}>*</label>

            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              required value={formData.lname}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange} />
          </div>

          <div className="form-group">
            <label style={{ display: 'inline-block', marginLeft: '5px' }}>Email Address</label>
            <label style={{ color: 'red', display: 'inline-block' }}>*</label>
            <input
              type="email"
              name="email"
              placeholder="Username" required
              value={formData.email}
              onChange={handleChange} />
          </div>

          <div className="form-group">
            <label style={{ display: 'inline-block', marginLeft: '5px' }}>Password</label>
            <label style={{ color: 'red', display: 'inline-block' }}>*</label>
            <input
              id="password-field"
              type={passwordVisible ? "text" : "password"} // Toggle between text and password              
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
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

          <div className="form-group">
            <label style={{ display: 'inline-block', marginLeft: '5px' }}>Confirm Password</label>
            <label style={{ color: 'red', display: 'inline-block' }}>*</label>
            <input
              id="confirm-password-field"
              type={passwordconVisible ? "text" : "password"} // Toggle between text and password              
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <div
              style={{
                position: 'absolute',
                top: '70%',
                right: '10px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onClick={togglePasswordConVisibility}
            >
              {passwordconVisible ? <FaEyeSlash /> : <FaEye />} {/* Toggle between eye icons */}
            </div>
          </div>

          <div className="form-group">
            <label style={{ display: 'inline-block', marginLeft: '5px' }}>User Type</label>
            <label style={{ color: 'red', display: 'inline-block' }}>*</label>
            <select value={userType} onChange={handleUserTypeChange} required>
              <option value="" disabled>Select user type...</option> {/* Add this line */}
              <option value="admin">Admin</option>
              <option value="job seeker">Job Seeker</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="theme-btn btn-style-one" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}

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

      
      <Toast
        onClose={() => {
          setSuccess('');
        }}
        show={Boolean(success)}
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
    </>
  );
};

export default FormContent;
