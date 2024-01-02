"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiConfig from '@/app.config';

const SocialNetworkBox = ({company}) => {
  const token = localStorage.getItem("accessToken");
   
  const [socialMediaFields, setSocialMediaFields] = useState();
const setData = (company)=>{
var data =   {
    facebook: company?.facebook,
    X: company?.X,
    linkedIn: company?.linkedIn,
    googlePlus: company?.googlePlus,
  }
  setSocialMediaFields(data);
}
useEffect(()=>{
  setData(company);
},[company])
  const handleChange = (event) => {
    // Update the state when input values change
    const { name, value } = event.target;
    setSocialMediaFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request using Axios to save the data
      await axios.post(`${apiConfig.url}/company/social`,  socialMediaFields , {headers:{
        Authorization:`Bearer ${token}`
      }});

      alert('Data saved successfully!');
    } catch (error) {
      console.log(error,"error saving social");
      alert('Error saving data:', error);
    }
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* ... (existing code) */}

        {/* Input for Facebook */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Facebook</label>
          <input
            type="text"
            name="facebook"
            placeholder="www.facebook.com/Invision"
            value={socialMediaFields?.facebook}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input for X */}
        <div className="form-group col-lg-6 col-md-12">
          <label>X</label>
          <input
            type="text"
            name="X"
            placeholder=""
            value={socialMediaFields?.X}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input for Linkedin */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Linkedin</label>
          <input
            type="text"
            name="linkedIn"
            placeholder=""
            value={socialMediaFields?.linkedIn}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input for Google Plus */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Google Plus</label>
          <input
            type="text"
            name="googlePlus"
            placeholder=""
            value={socialMediaFields?.googlePlus}
            onChange={handleChange}
            required
          />
        </div>

        {/* Button to save the data */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default SocialNetworkBox;
