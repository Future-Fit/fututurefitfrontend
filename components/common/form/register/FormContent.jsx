import { useState } from "react";

const FormContent = () => {

  const [logoImg, setLogoImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const [formData, setFormData] = useState({
    user_type_id: 4,
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

        Object.keys(dataToSend).forEach(key => {
          formDataToSend.append(key, dataToSend[key]);
        });

        const response = await fetch("https://api.futurefitinternational.com/users/create", {
          method: "POST",
          body: formDataToSend,
        });
        const responseData = await response.json();

        if (response.ok) {
          setUserData(responseData.result); // Save user data to state
          setRegistrationMessage(responseData.message || "Registration successful!"); // Set message from API response

          setFormData({
            fname: "",
            lname: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          setLogoImg("");

        } else {
          setRegistrationMessage(responseData.message || "Registration failed");
        }
      } catch (error) {
        // Handle network errors or other exceptions
        setRegistrationMessage("An error occurred: " + error);
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
        <label style={{ display: 'inline-block', marginLeft: '5px' }}>First Name</label>
        <label style={{ color: 'red', display: 'inline-block' }}>*</label>

        {/* <label>First Name *</label> */}
        <input type="text" name="fname" placeholder="First Name" required value={formData.fname}
          onChange={handleChange} />
      </div>
      <div className="form-group">
        <label style={{ display: 'inline-block', marginLeft: '5px' }}>Last Name</label>
        <label style={{ color: 'red', display: 'inline-block' }}>*</label>

        <input type="text" name="lname" placeholder="Last Name" required value={formData.lname}
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
        {passwordError && <span className="error-message">{passwordError}</span>}
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
        {passwordError && <span className="error-message">{passwordError}</span>}
      </div>

      <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="theme-btn btn-style-one" type="submit">
          Sign Up
        </button>
      </div>
      {registrationMessage && (
        <div className={registrationMessage === "Registration successful!" ? "success-message" : "error-message"}>
          {registrationMessage}
          {userData && registrationMessage === "Registration successful!" && (
            <div>
              {/* Display userData here */}
              <p>User ID: {userData.id}</p>
              <p>Email: {userData.email}</p>
              {/* Display other user data as needed */}
            </div>
          )}
        </div>
      )}
    </form>
  );
};

export default FormContent;
