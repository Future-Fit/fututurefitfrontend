"use client"
import apiConfig from "@/app.config";
import { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const updateUser = async (data) => {
    if (validatePassword(data.newPassword)) {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          console.error('No access token found');
          return;
        }

        const response = await axios.put(`${apiConfig.url}/users/changePassword`, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Assuming the API returns the updated user details as response
        console.log('Password updated successfully:', response.data);
        // Perform any success actions, like updating UI or state
      } catch (error) {
        console.error('Error updating Password:', error.response ? error.response.data : error);
        // Handle errors (e.g., show error message to the user)
      }
    } else {
      alert('Password should contain 8 characters with upper case, lower case, special character, and number');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create DTO object from form data
    const userDto = { ...formData };
    updateUser(userDto);
    // Perform any further processing or submit the DTO object
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Old Password </label>
          <input type="password" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>New Password</label>
          <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
