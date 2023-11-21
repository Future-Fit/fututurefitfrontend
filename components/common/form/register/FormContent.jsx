import { useState } from "react";

const FormContent = () => {

  const [logoImg, setLogoImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const [formData, setFormData] = useState({
    user_type_id: 4,
    fname: "",
    lname: "",
    phone: "",
    gender: "M",
    date_of_birth: "",
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
        formDataToSend.append('user_image', selectedFile); // Make sure this matches the backend

        Object.keys(dataToSend).forEach(key => {
          formDataToSend.append(key, dataToSend[key]);
        });

        const response = await fetch("http://190.92.151.79:8000/users/create", {
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
            gender: "M",
            date_of_birth: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          // Reset logo image
          setLogoImg("");

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
        <label>First Name</label>
        <input type="text" name="fname" placeholder="First Name" required value={formData.fname}
          onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" name="lname" placeholder="Last Name" required value={formData.lname}
          onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" name="phone" placeholder="Phone Number" required value={formData.phone}
          onChange={handleChange} />
      </div>

      <div className="form-group col-md-12">
        <label>Gender</label>
        {/* <select name="gender" value={formData.gender} */}
        <input type="text" name="gender" placeholder="Gender" required value={formData.gender}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input type="text" name="date_of_birth"
          placeholder="1991/11/22"
          required
          value={formData.date_of_birth}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="Username" required
          value={formData.email}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Password</label>
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
        <label>Confirm Password</label>
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

      <div className="uploading-outer">
        <div className="uploadButton">
          <input
            className="uploadButton-input"
            type="file"
            name="user_image" // Updated to match the backend field name
            accept="image/*"
            id="upload"
            required
            onChange={handleFileChange}
          />
          <label className="uploadButton-button ripple-effect" htmlFor="upload">
            Upload Logo
          </label>
          <span className="uploadButton-file-name"></span>
        </div>
        {logoImg && (
          <div className="image-preview">
            <img src={logoImg} alt="Preview" />
          </div>
        )}
        <div className="text">
          Max file size is 1MB, Minimum dimension: 330x300 And
          Suitable files are .jpg & .png
        </div>
      </div>


      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register Now
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
