
'use client'

import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";

const FormInfoBox = () => {
  const [userDetail, setUserDetail] = useState(null);
  const [formData, setFormData] = useState({
    lname: '',    // last/family name
    mname: '',    // middle name (NMN if none)
    fname: '',    // first/given name
    dob: '',      // date of birth (mm/dd/yyyy)
    gen: '',      // gender
    plcBir: '',   // place of birth
    ctzn: '',     // citizenship
    addr: '',      // current address
    city: '',      // current city
    resid: '',      // current country (residency)
    phone: '',      // phone number
    email: '',    // email address
    eduLev: [],   // education level (select from choice)
    eduYrs: '',   // tot. # of years attended school (prim to univ) 
    proEng: [],   // English lang. proficiency (select from choices)
    proFre: [],   // Frech lang. proficiency (select from choices)
    proOth: '',   // list other language(s) and proficiency level
    isEmp: [],    // currently employed? (select yes or no)
    namEmp: '',   // name of employer, if employed
    yrsEmp: '',   // # of years employed
    isInt: [],    // interested to study or work in Canada? (select yes or no)
    datAvl: [],   // date avialable for study or employment (select from intake dates)
    intAre: [],   // interest area for study or employment (select from choice)
    proCan: [],   // indicate provinces in Canada to study or work in (select from choice)
    allSrch: [],  // enable searching (select yet or no) 
    detail: '',   // open for user to write anything (limit 500 chars?)
    resA: '',     // reserved
    resB: '',     // reserved
    resC: '',     // reserved
    resD: ''      // reserved
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
          {/* <!-- Input --> */}
          <text style={{ marginBottom: "10px", textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
            Personal Information
          </text>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Last (Family) Name*</label>
            <input type="text" name="lname" value={formData.lname}
              onChange={handleInputChange} placeholder="Last Name" required />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Middle Name</label>
            <input type="text" name="mname" value={formData.mname}
              onChange={handleInputChange}
              placeholder="If No Middle Name, Put 'NMN'" required />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>First (Given) Name*</label>
            <input type="text" name="fname" value={formData.fname}
              onChange={handleInputChange} placeholder="First Name" required />
          </div>
        </div>

        {/* <!-- Input --> */}
        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-4"
            style={{ marginBottom: "20px" }}>
            <label>Date of Birth*</label>
            <div>
              <input style={{
                fontSize: "15px", color: "#696969",
                backgroundColor: "#f0f5f7", border: "1px solid #f0f5f7",
                boxSizing: "border-box", borderRadius: "8px"
              }}
                type="Date" name="dob" value={formData.dob}
                onChange={handleInputChange} placeholder="MM/DD/YYYY" required />
            </div>
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-4"
            style={{ width: "150px", marginBottom: "20px" }}>
            <label>Gender*</label>
            <input type="text" name="gen" value={formData.gen}
              onChange={handleInputChange} placeholder="" required />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Place of Birth*</label>
            <input type="text" name="plcBir" value={formData.plcBir}
              onChange={handleInputChange} placeholder="City" required />
          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Citizenship*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="ctzn"
              value={formData.ctzn}
              onChange={(e) => setFormData({ ...formData, ctzn: e.target.value })}
              required >
              <option value="" disabled>Select...</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}> {country.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Current Address*</label>
            <input type="text" name="addr" value={formData.addr}
              onChange={handleInputChange} placeholder="Include Street Name, Postal Code" required />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Current City*</label>
            <input type="text" name="city" value={formData.city}
              onChange={handleInputChange} placeholder="Current City" required />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Country of Residence*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="resid"
              value={formData.resid}
              onChange={(e) => setFormData({ ...formData, resid: e.target.value })}
              required >
              <option value="" disabled>Select...</option>
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
            style={{ marginBottom: "20px" }}>
            <label>Phone Number*</label>
            <input type="text" name="phone" value={formData.phone}
              onChange={handleInputChange} placeholder="[+][country code][phone number]" required />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Email Address*</label>
            <input type="email" name="email" value={formData.email}
              onChange={handleInputChange} placeholder="email address" required />
          </div>
        </div>

        <text style={{ margin: "30px 0px 10px 0px", textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
          Background in Education
        </text>

        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }}>
            <label>Highest Level Attained*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="eduLev" value={formData.eduLev}
              onChange={handleInputChange} className="chosen-single form-select" required>
              <option value="" disabled>Select...</option>
              <option value="Grade Level">Grade Level</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Certificate/Vocational">Certificate/Vocational</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {formData.eduLev === "Other" && (
            <div className="form-group col-lg-4 col-md-4 col-sm-6"
              style={{ marginBottom: "20px" }}>
              <label>Other Level Attained</label>
              <input
                type="text"
                name="ifOther"
                value={formData.ifOther}
                onChange={handleInputChange}
                placeholder="Write other education level attained."
                required
              />
            </div>
          )}

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }}>
            <label>Total Years of Study*</label>
            <input type="text" name="eduYrs" value={formData.eduYrs}
              onChange={handleInputChange}
              placeholder="Primary to post-secondary" required />
          </div>
        </div>

        <div className="row" style={{ borderBottom: "1px solid #f1f3f7" }}>
          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "10px" }}>
            <label>English Proficiency*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="proEng" value={formData.proEng}
              onChange={handleInputChange} className="chosen-single form-select" required>
              <option value="" disabled>Select...</option>
              <option value="Native Speaker">Native Speaker</option>
              <option value="Fluent">Fluent</option>
              <option value="Conversational">Conversational</option>
              <option value="Beginner">Beginner</option>
              <option value="None">None</option>
            </select>
          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "10px" }}>
            <label>French Proficiency</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="proFre" value={formData.proFre}
              onChange={handleInputChange} className="chosen-single form-select">
              <option value="" disabled>Select...</option>
              <option value="Native Speaker">Native Speaker</option>
              <option value="Fluent">Fluent</option>
              <option value="Conversational">Conversational</option>
              <option value="Beginner">Beginner</option>
              <option value="None">None</option>
            </select>
          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "10px" }} >
            <label>Other Language(s)/Proficiency</label>
            <input type="text" name="proOth" value={formData.proOth}
              onChange={handleInputChange}
              placeholder="Lan./prof. level, comma separated" />
          </div>
          <text style={{ fontWeight: "lighter", fontSize: "0.8em", paddingBottom: "15px" }}>
            * Upload transcripts/certificates/diplomas/degrees using File Manager.
          </text>
        </div>

        <text style={{ margin: "30px 0px 10px 0px", textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
          Interests
        </text>

        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }} >
            <label>Interested to Study in Canada?*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="isInt" value={formData.isInt}
              onChange={handleInputChange} className="chosen-single form-select" required>
              <option value="" disabled>Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }} >
            <label>Which Intake?*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="datAvl" value={formData.datAvl}
              onChange={handleInputChange} className="chosen-single form-select" required>
              <option value="" disabled>Select...</option>
              <option value="September">September</option>
              <option value="January">January</option>
              <option value="May">May</option>
            </select>
          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }} >
            <label>Province Interested In*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="proCan" value={formData.proCan}
              onChange={handleInputChange} className="chosen-single form-select" required>
              <option value="" disabled>Select...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="The Northwest Territories">The Northwest Territories</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Nunavut">Nunavut</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="The Yukon">The Yukon</option>
            </select>
          </div>
        </div>

        <div className="row"
          style={{ borderBottom: "1px solid #f1f3f7", paddingBottom: "10px" }}>
          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }} >
            <label>Program Applying For* </label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="intAre" value={formData.intAre}
              onChange={handleInputChange} className="chosen-single form-select" required>
              <option value="" disabled>Select...</option>
              <option value="Grade Level">Grade Level</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Certificate/Vocational">Certificate/Vocational</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {formData.intAre === "Other" && (
            <div className="form-group col-lg-4 col-md-4 col-sm-6"
              style={{ marginBottom: "20px" }} >
              <label>Other Program Applying For*</label>
              <input
                type="text"
                name="ifOther"
                value={formData.ifOther}
                onChange={handleInputChange}
                placeholder="Write other program applyinf for"
                required
              />
            </div>
          )}

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }} >
            <label>Allow In Search & Listing</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="allSrch" value={formData.allSrch}
              onChange={handleInputChange} className="chosen-single form-select" required>
              <option value="" disabled>Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

        <text style={{ margin: "30px 0px 10px 0px", textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
          Details
        </text>

        <div className="row">
          <div className="form-group col-lg-12 col-md-12"
            style={{ marginBottom: "5px" }}>
            <textarea name="description" value={formData.description} onChange={handleInputChange}
              placeholder="Please describe your goals and interests in pursuing your education in Canada."></textarea>
          </div>
        </div>

        <text style={{ fontWeight: "lighter", fontSize: "0.8em", paddingBottom: "15px" }}>
          * Upload any supporting document using File Manager.
        </text>

        <div className="row">
          <div className="form-group col-lg-6 col-md-12" style={{ justifyContent: "center" }}>
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
