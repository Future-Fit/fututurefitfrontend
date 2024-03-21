"use client"
import apiConfig from "@/app.config";
import { useState } from "react";
import axios from "axios"; // Import axios


const Form = () => {

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const updateUser = async (data) => {
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
      alert('Password updated successfully');

      // Perform any success actions, like updating UI or state
    } catch (error) {
      console.error('Error updating Password:', error.response ? error.response.data : error);
      // Handle errors (e.g., show error message to the user)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if old and new passwords match
    if (formData.oldPassword === formData.newPassword) {
      alert('New password cannot be the same as old password');
      return;
    }
    // Validate new password
    if (!validatePassword(formData.newPassword)) {
      alert('Password should contain at least 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }
    // Check if confirm password matches new password
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Confirm password does not match new password');
      return;
    }
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
          <input type="password" name="oldPassword" value={formData.oldPassword} onChange={handleInputChange} required />
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
