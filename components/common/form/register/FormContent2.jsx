import apiConfig from "@/app.config";
import { useState } from "react";
import { Toast } from 'react-bootstrap';


const FormContent2 = () => {

  const [logoImg, setLogoImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const [formData, setFormData] = useState({
    user_type_id: 3,
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: ""
  });
  const [passwordError, setPasswordError] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState(null);
  const [userData, setUserData] = useState(null); // New state for user data

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected File:', file);
      setSelectedFile(file);
      setLogoImg(URL.createObjectURL(file));
    }
  };

  // logo image
  const logoHandler = (file) => {
    setLogoImg(file);
  };

  const resetForm = () => {
    setFormData({
      user_type_id: 3,
      fname: "",
      lname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setPasswordError("");
    setLogoImg("");
    setRegistrationMessage(null);
    setUserData(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistrationMessage(null);

    // const formDataToSend = { ...formData, file: selectedFile }; // Include the file in the form data

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return; // Prevent form submission if passwords don't match
    }

    if (validatePassword(formData.password)) {
      // Password meets the criteria
      try {
        const { confirmPassword, ...dataToSend } = formData;
        const formDataToSend = new FormData();
        // formDataToSend.append('user_image', selectedFile); // Make sure this matches the backend

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
          setRegistrationMessage(responseData.message || "Registration successful!"); // Set message from API response

          resetForm()

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
             
            setRegistrationMessage("Verification email sent successfully!, Please Check Your Email")
          } catch (error) {
            console.error("Failed to send verification email:", error);
            setRegistrationMessage("Failed to send verification email")

          }

        } else {
          setRegistrationMessage(responseData.message || "Registration failed");
        }
      } catch (error) {
        // Handle network errors or other exceptions
        setRegistrationMessage("An error occurred: " + error);

        // console.error("An error occurred", error);
      }
    } else {
      setPasswordError("Password should contain at least 8 characters, including uppercase, lowercase, number, and special character.");
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "password") {
      setPasswordError("");
      // }
    }
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${year}/${month}/${day}`;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>

      <div className="form-group">
        <label style={{ display: 'inline-block', marginLeft: '5px' }}>Business/Institution Name</label>
        <label style={{ color: 'red', display: 'inline-block' }}>*</label>
        <input type="text" name="fname" placeholder="Business/Institution Name" required value={formData.fname}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label style={{ display: 'inline-block', marginLeft: '5px' }}>Email Address</label>
        <label style={{ color: 'red', display: 'inline-block' }}>*</label>
        <input type="email" name="email" placeholder="Username" required
          value={formData.email}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label style={{ display: 'inline-block', marginLeft: '5px' }}>Password</label>
        <label style={{ color: 'red', display: 'inline-block' }}>*</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* {passwordError && <span className="error-message">{passwordError}</span>} */}
      </div>

      <div className="form-group">
        <label style={{ display: 'inline-block', marginLeft: '5px' }}>Confirm Password</label>
        <label style={{ color: 'red', display: 'inline-block' }}>*</label>
        <input
          id="confirm-password-field"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {/* {passwordError && <span className="error-message">{passwordError}</span>} */}
      </div>
      <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="theme-btn btn-style-one" type="submit">
          Submit
        </button>
      </div>

      <Toast
        onClose={() => {
          setFormData('');
          setPasswordError('');
          setRegistrationMessage('');
        }}
        show={Boolean(registrationMessage || passwordError)} // Show toast if there's a message
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
        <Toast.Header closeButton={true} style={{ fontSize: '15px' }}>
          <strong className="me-auto" style={{ fontSize: '20px' }}>
            {passwordError ? 'Error' : 'Message'}
          </strong>
          {/* Increased font size for the title */}
        </Toast.Header>
        <Toast.Body style={{ fontSize: '18px' }}>
          {passwordError ? passwordError : registrationMessage}
          {/* Increased font size for the body */}
        </Toast.Body>
      </Toast>
    </form>
  );
};

export default FormContent2;
