
'use client'

import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";

const FormInfoBox = () => {
  const [userDetail, setUserDetail] = useState(null);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mname: '',
    date_of_birth: '',
    gender: '',
    city: '',
    residency: '', //new entry
    citizenship: '',
    phone: '',
    email: '',
    education_level: '',
    no_years_education: '', //new entry
    english_prof: '',
    other_lang: '',
    work_experience: '', //new entry to make student and job seeker profile the same
    availability: '', //new entry to make student and job seeker profile the same 
    program: [],
    provinces: [],
    allowSearch: '',
    description: '',
  });
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handler function for handling changes in the multi-selector input field
  const handleChange = (event) => {
    // Get the selected options from the event
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);

    // Update the state with the selected options
    setSelectedOptions(selectedValues);
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map((country) => ({
          label: country.name.common, // or country.name.official based on your preference
          value: country.cca2, // 2-letter country code, you might want to use country name instead
        }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountries(countryNames);
      } catch (error) {
        console.error('Failed to fetch countries:', error);
      }
    };

    fetchCountries();
  }, []);



  const updateUser = async (data) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No access token found");
        return;
      }

      const response = await axios.put(`${apiConfig.url}/users/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Assuming the API returns the updated user details as response
      console.log('User profile updated successfully:');
      // Perform any success actions, like updating UI or state
      alert("User profile updated successfully.")
    } catch (error) {
      console.error("Error updating user details:", error.response ? error.response.data : error);
      alert("Error updating user details.")
      // Handle errors (e.g., show error message to the user)
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("loggedInUserId");
    const token = localStorage.getItem("accessToken");
    console.log('user id', userId);
    if (userId) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`${apiConfig.url}/users/me`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          console.log('Response from server:');
          setUserDetail(response.data);
          setFormData(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
      fetchUserDetails();
    }
  }, []);
  const handleSubmit = (event) => {

    event.preventDefault();
    // Create DTO object from form data
    const userDto = { ...formData };
    updateUser(userDto);
    // Perform any further processing or submit the DTO object

  };

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <form action="#" className="default-form">
      <div className="row">
        <div className="row">
          <text style={{
            marginBottom: "10px", textAlign: "center",
            fontWeight: "bolder", fontSize: "1em"
          }}>
            Personal Information </text>
          {/* <!-- Input --> */}
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>Last (Family) Name*</label>
            <input type="text" name="lname" value={formData.lname}
              onChange={handleInputChange} placeholder="Last Name" required />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>Middle Name</label>
            <input type="text" name="mname" value={formData.mname}
              onChange={handleInputChange}
              placeholder="If No Middle Name, Put 'NMN'" required />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>First (Given) Name*</label>
            <input type="text" name="fname" value={formData.fname}
              onChange={handleInputChange} placeholder="First Name" required />
          </div>
        </div>

        {/* <!-- Input --> */}
        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-4"
            style={{ marginBottom: "15px" }}>
            <label>Date of Birth*</label>
            <div>
              <input style={{
                fontSize: "15px", color: "#696969",
                backgroundColor: "#f0f5f7", border: "1px solid #f0f5f7",
                boxSizing: "border-box", borderRadius: "8px"
              }}
                type="Date" name="date_of_birth" value={formData.date_of_birth}
                onChange={handleInputChange} placeholder="MM/DD/YYYY" required />
            </div>
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-4"
            style={{ width: "150px", marginBottom: "15px" }}>
            <label>Gender*</label>
            <input type="text" name="gender" value={formData.gender}
              onChange={handleInputChange} placeholder="" required />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>Place of Birth*</label>
            <input type="text" name="city" value={formData.city}
              onChange={handleInputChange} placeholder="City, Country" required />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>Residency*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="residency"
              value={formData.residency}
              onChange={(e) => setFormData({ ...formData, residency: e.target.value })}
              required >
              <option value="" disabled>Select Residency</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}> {country.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>Citizenship*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="citizenship"
              value={formData.citizenship}
              onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
              required >
              <option value="" disabled>Select Citizenship</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}> {country.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row"
          style={{ borderBottom: "1px solid #f1f3f7", paddingBottom: "10px" }}>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>Phone Number*</label>
            <input type="text" name="phone" value={formData.phone}
              onChange={handleInputChange} placeholder="Include Country Code" required />
          </div>
          <div className="form-group col-lg-6 col-md-4 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>Email Address*</label>
            <input type="email" name="email" value={formData.email}
              onChange={handleInputChange} placeholder="email address" required />
          </div>
        </div>

        <text style={{ margin: "30px 0px 10px 0px", textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
          Education
        </text>

        <div className="row">
          <div className="form-group col-lg-6 col-md-6 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>Highest Education Attained*</label>
            <input type="text" name="education_level" value={formData.education_levels}
              onChange={handleInputChange}
              placeholder="Post Graduate/Graduate/Certificate/Secondary/Primary" required />
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>Total Years of Education*</label>
            <input type="text" name="no_years_education" value={formData.no_years_education}
              onChange={handleInputChange}
              placeholder="Including primary, secondary and post-secondary" required />
          </div>
        </div>

        <div className="row" style={{ borderBottom: "1px solid #f1f3f7" }}>
          <div className="form-group col-lg-6 col-md-6 col-sm-12"
            style={{ marginBottom: "15px" }}>
            <label>English Proficiency*</label>
            <input type="text" name="english_prof" value={formData.english_prof} onChange={handleInputChange}
              placeholder="Native Speaker/Fluent/Conversational/Beginner/None" required />
          </div>
          <div className="form-group col-lg-6 col-md-6"
            style={{ marginBottom: "15px" }}>
            <label>Other Language(s)/Proficiency</label>
            <input type="text" name="other_lang" value={formData.other_lang} onChange={handleInputChange}
              placeholder="List language/proficiency level, separated by comma"
            />
          </div>
          <text style={{ fontWeight: "lighter", fontSize: "0.8em" }}>
            Upload supporting documents such as transcripts, certificates, and diplomas/degrees
            using the File Manager link.
          </text>
        </div>

        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="form-group col-lg-6 col-md-12">
            <label>Job Category(ies) </label>
            <select name="program" value={formData.program} onChange={handleInputChange} className="chosen-single form-select">
              <option value="" disabled>Select...</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Engineering/IT">Engineering/IT</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Transportation/Logistics">Transportation/Logistics</option>
              <option value="Aviation">Aviation</option>
              <option value="Construction">Construction</option>
              <option value="Hospitality/Services">Hospitality/Services</option>
              <option value="Skilled Trade">Skilled Trade</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {formData.program === "Other" && (
            <div className="form-group col-lg-6 col-md-6">
              <label>Other Program to Apply For*</label>
              <input
                type="text"
                name="ifOther"
                value={formData.ifOther}
                onChange={handleInputChange}
                placeholder="Please write other program to apply for here"
                required
              />
            </div>
          )}
          <div className="form-group col-lg-6 col-md-12">
            <label>Allow In Search & Listing</label>
            <select name="allowSearch" value={formData.allowSearch} onChange={handleInputChange} className="chosen-single form-select">
              <option value="" disabled>Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* <div className="form-group col-lg-6 col-md-12">
            <label>Allow In Search & Listing</label>
            <select name="allowSearch" value={formData.allowSearch} onChange={handleInputChange}
              className="chosen-single form-select" required >
              <option value="" disabled>Selet...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>

            </select>
          </div> */}
        </div>

        <div className="row">
          <div className="form-group col-lg-12 col-md-12">
            <label>Details </label>
            <textarea name="description" value={formData.description} onChange={handleInputChange}
              placeholder="Please describe your goals and interests in pursuing your education in Canada, including your interests in any extracurricular activities, sports, and other hobbies."></textarea>
          </div>
        </div>

        <div className="row">
          <div style={{ justifyContent: "center" }}>
            <button type="submit" onClick={handleSubmit} className="theme-btn btn-style-one">
              Save
            </button>
          </div>
        </div>

      </div>
    </form >
  );
};

export default FormInfoBox;