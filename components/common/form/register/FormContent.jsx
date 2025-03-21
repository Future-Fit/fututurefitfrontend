import apiConfig from "@/app.config";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons


const FormContent = ({ onReset, closeModal, myToast, myError }) => {
  const [logoImg, setLogoImg] = useState("");
  const [userType, setUserType] = useState(""); // Added state for user type
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [passwordconVisible, setPasswordConVisible] = useState(false); // State to toggle password visibility

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
    myError("")
    setLogoImg("");
    setRegistrationMessage(null);
    myToast(null);
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
    myToast(null);

    if (formData.password !== formData.confirmPassword) {
      myError("passwords do not match");
      setPasswordError("Passwords do not match");
      return; // Prevent form submission if passwords don't match
    }

    if (validatePassword(formData.password)) {
      // Password meets the criteria
      try {
        const { confirmPassword, ...dataToSend } = formData;
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
          myToast(responseData.message || "Registration successful!");
          setRegistrationMessage(responseData.message || "Registration successful!"); // Set message from API response
          setShowForm(false);
          closeModal();
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
            myToast("Thank you for signing up with FFI. A verification email has been sent to your email address. Please check your email address. You may need to check your spam folder.");

            setRegistrationMessage("Thank you for signing up with FFI. A verification email has been sent to your email address. Please check your email address. You may need to check your spam folder.")
            closeModal();
          } catch (error) {
            console.error("Failed to send verification email:", error);
          }

        } else {
          myToast(responseData.message || "Registration failed.");
          setRegistrationMessage(responseData.message || "Registration failed.");
          resetForm();
          myError("Registration failed. Email or Phone number is already registerd. So, please try to use another phone and/or email, Thank you");
          return
        }
      } catch (error) {
        // Handle network errors or other exceptions
        myToast("An error occured: " + error);
        setRegistrationMessage("An error occurred: " + error);
      }
    } else {
      myError("Password should contain at least 8 characters, including uppercase, lowercase, number, and special character.");
      setPasswordError("Password should contain at least 8 characters, including uppercase, lowercase, number, and special character.");
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "password") {
      myError("");
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };
  const togglePasswordConVisibility = () => {
    setPasswordConVisible(!passwordconVisible); // Toggle password visibility
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleUserTypeChange = (e) => {
    const selectedUserType = e.target.value;
    if (!selectedUserType) {
      alert("Please select user Type")
    } else {
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
            {/* {passwordError && <span className="error-message">{passwordError}</span>} */}
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
            {/* {passwordError && <span className="error-message">{passwordError}</span>} */}
          </div>

          <div className="form-group">
            <label style={{ display: 'inline-block', marginLeft: '5px' }}>User Type</label>
            <label style={{ color: 'red', display: 'inline-block' }}>*</label>
            <select value={userType} onChange={handleUserTypeChange} required>
              <option value="" disabled>Select user type...</option> {/* Add this line */}
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

    </>
  );
};

export default FormContent;
