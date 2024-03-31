
'use client'

import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";
import { MultiSelect } from "react-multi-select-component";
import "./error.scss"

const programOptions = [
  { label: "Grade Level", value: "Grade Level" },
  { label: "High School", value: "High School" },
  { label: "Undergraduate", value: "Undergraduate" },
  { label: "Postgraduate", value: "Postgraduate" },
  { label: "Certificate/Vocational", value: "Certificate/Vocational" },
  { label: "Other", value: "Other" }
];

const intakes = [
  { label: "September", value: "September" },
  { label: "January", value: "January" },
  { label: "May", value: "May" }
];

const provincesCanada = [
  { label: "Alberta", value: "Alberta" },
  { label: "British Columbia", value: "British Columbia" },
  { label: "Manitoba", value: "Manitoba" },
  { label: "Newfoundland and Labrador", value: "Newfoundland and Labrador" },
  { label: "New Brunswick", value: "New Brunswick" },
  { label: "The Northwest Territories", value: "The Northwest Territories" },
  { label: "Nova Scotia", value: "Nova Scotia" },
  { label: "Nunavut", value: "Nunavut" },
  { label: "Ontario", value: "Ontario" },
  { label: "Prince Edward Island", value: "Prince Edward Island" },
  { label: "Quebec", value: "Quebec" },
  { label: "Saskatchewan", value: "Saskatchewan" },
  { label: "The Yukon", value: "The Yukon" }
];



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
    eduLev: '',   // education level (select from choice)
    eduYrs: '',   // tot. # of years attended school (prim to univ) 
    proEng: '',   // English lang. proficiency (select from choices)
    proFre: '',   // Frech lang. proficiency (select from choices)
    proOth: '',   // list other language(s) and proficiency level
    isEmp: '',    // currently employed? (select yes or no)
    namEmp: '',   // name of employer, if employed
    yrsEmp: '',   // # of years employed
    isIntr: '',    // interested to study or work in Canada? (select yes or no)
    datAvl: [],   // date avialable for study or employment (select from intake dates)
    intAre: [],   // interest area for study or employment (select from choice)
    proCan: [],   // indicate provinces in Canada to study or work in (select from choice)
    allSrch: '',  // enable searching (select yet or no) 
    detail: '',   // open for user to write anything (limit 500 chars?)
    otherLevel: '',
    otherProgram: '',
    applied: [],  // applied to (schools or jobs)
    resA: '',     // reserved
    resB: '',     // reserved
    resC: '',     // reserved
    resD: ''      // reserved
  });

  const [countries, setCountries] = useState([]);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [selectedIntakes, setSelectedIntakes] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [requiredFieldsError, setRequiredFieldsError] = useState({}); // State to track required fields errors

  const handleSelectedProgram = (selected) => {
    setFormData({
      ...formData,
      intAre: selected.map(program => program.value),
    });
    setSelectedPrograms(selected);
  };

  const handleSelectIntakes = (selected) => {
    setFormData({
      ...formData,
      datAvl: selected.map(intakes => intakes.value),
    });
    setSelectedIntakes(selected);
  };

  const handleSelectProvince = (selected) => {
    setFormData({
      ...formData,
      proCan: selected.map(provinceCanada => provinceCanada.value),
    });
    setSelectedProvince(selected);
  };

  // const formatDate = (dateString) => {
  //   if (!dateString || isNaN(Date.parse(dateString))) {
  //     return ''; // Return empty string if date is invalid or empty
  //   }
  //   const date = new Date(dateString);
  //   const month = (date.getMonth() + 1).toString().length < 2 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
  //   const day = date.getDate().length < 2 ? "0" + date.getDate() : date.getDate();
  //   const year = date.getFullYear();

  //   return `${year}-${month}-${day}`;
  // };

  const formatDate = (dateString) => {
    if (!dateString || isNaN(Date.parse(dateString))) {
        return ''; // Return empty string if date is invalid or empty
    }
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map((country) => ({
          label: country.name.common,
          value: country.cca2,
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
      setUserDetail(response.data);
      setFormData(response.data);
      // Perform any success actions, like updating UI or state
      alert("User profile updated successfully.")
      window.location.reload();
    } catch (error) {
      console.error("Error updating user details:", error.response ? error.response.data : error);
      alert("Error updating user details. Please fill in all required data.")
      // Handle errors (e.g., show error message to the user)
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("loggedInUserId");
    const token = localStorage.getItem("accessToken");

    if (userId) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`${apiConfig.url}/users/me`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });

          const datAvl = response.data.datAvl ?? [];
          const proCan = response.data.proCan ?? [];
          const intAre = response.data.intAre ?? [];

          // Map values from database to the format expected by MultiSelect
          const selectedIntakes = datAvl.map(intake => ({ label: intake, value: intake }));
          const selectedProvince = proCan.map(province => ({ label: province, value: province }));
          const selectedPrograms = intAre.map(program => ({ label: program, value: program }));

          // Set state variables with selected values
          setSelectedIntakes(selectedIntakes);
          setSelectedProvince(selectedProvince);
          setSelectedPrograms(selectedPrograms);

          // Update formData with selected values
          const formDataUpdates = {
            datAvl: datAvl,
            proCan: proCan,
            intAre: intAre
          };

          const formattedData = {
            datAvl: datAvl.map(option => ({ label: option, value: option })),
            proCan: proCan.map(option => ({ label: option, value: option })),
            intAre: intAre.map(option => ({ label: option, value: option })),
            ...response.data,
            dob: formatDate(response.data.dob)
          };

          setUserDetail(response.data);
          setFormData(prevData => ({ ...prevData, ...formDataUpdates, ...formattedData }));
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUserDetails();
    }
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();

    const isOtherSelected = selectedPrograms.some(program => program.value === "Other");
    const otherProgramValue = formData.otherProgram || ''; // Initialize otherProgramValue to an empty string if formData.otherProgram is null
    const isOtherProgramEmpty = otherProgramValue.trim() === '';


    const isOtherLevelSelected = formData.eduLev === "Other";
    const isOtherLevelEmpty = isOtherLevelSelected && (!formData.otherLevel || formData.otherLevel.trim() === '');


    const requiredFields = ["lname", "fname", "dob", "gen", "plcBir", "ctzn", "addr", "city", "resid", "email", "eduLev", "eduYrs", "proEng", "isIntr", "datAvl", "intAre", "proCan", "allSrch"];

    const errors = {};
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = true;
      } else {
        errors[field] = false;
      }
    });
    setRequiredFieldsError(errors);

    // Check if there are any errors
    if (Object.values(errors).some(error => error)) {
      // If there are errors, prevent form submission
      alert("Error updating user details. Please fill in all required data.");
      return;
    }

    if (isOtherSelected && isOtherProgramEmpty) {
      alert("Other Program should not be empty");
      return; // Prevent form submission
    }


    if (isOtherLevelEmpty) {
      alert("Other Level should not be empty");
      return; // Prevent form submission
    }
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
      </div>
      <div className="row">
        <div className="row">
          {/* <!-- Input --> */}
          <h4 style={{ textAlign: "left", fontSize: "0.8em", fontWeight: "lighter" }}>
            (All fileds with * MUST be completed)
          </h4>
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
              placeholder="If No Middle Name, Put 'NMN'" />
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
          {/* <div className="form-group col-lg-4 col-md-4 col-sm-4"
            style={{ marginBottom: "20px" }}>
            <label>Date of Birth*</label>
            <div>
              <input
                style={{
                  fontSize: "15px",
                  color: "#696969",
                  backgroundColor: "#f0f5f7",
                  border: "1px solid #f0f5f7",
                  boxSizing: "border-box",
                  borderRadius: "8px"
                }}
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="MM/DD/YYYY"
                max={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div> */}

          <div className="form-group col-lg-4 col-md-4 col-sm-4"
            style={{ marginBottom: "20px" }}>
            <label>Date of Birth*</label>
            <div>
              <input
                style={{
                  fontSize: "15px",
                  color: "#696969",
                  backgroundColor: "#f0f5f7",
                  border: "1px solid #f0f5f7",
                  boxSizing: "border-box",
                  borderRadius: "8px"
                }}
                type="date"
                name="dob"
                value={formData.dob}

                onChange={handleInputChange} placeholder="MM/DD/YYY"
                max={new Date().toISOString().split('T')[0]} required />
            </div>
          </div>


          <div className={`form-group col-lg-4 col-md-4 col-sm-12 ${requiredFieldsError.fname ? 'error-indicator' : ''}`}
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
              required
              value={formData.ctzn}
              onChange={(e) => setFormData({ ...formData, ctzn: e.target.value })}
            >
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
            <input type="text" name="addr" value={formData.addr} required
              onChange={handleInputChange} placeholder="Include Street Name, Postal Code" />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Current City*</label>
            <input type="text" name="city" value={formData.city} required
              onChange={handleInputChange} placeholder="Current City" />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Country of Residence*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="resid" required
              value={formData.resid}
              onChange={(e) => setFormData({ ...formData, resid: e.target.value })}
            >
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
            <label>Phone Number</label>
            <input type="text" name="phone" value={formData.phone}
              onChange={handleInputChange} placeholder="[+][country code][phone number]" />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Email Address*</label>
            <input type="email" name="email" value={formData.email} required disabled
              onChange={handleInputChange} placeholder="email address" />
            {/* <text style={{ fontWeight: "lighter", fontSize: "0.8em", paddingBottom: "15px" }}>
              * If you change your email address here, make sure to us it to sign in.
            </text> */}
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
              name="eduLev" value={formData.eduLev} required
              onChange={handleInputChange} className="chosen-single form-select" >
              <option value="" disabled>Select...</option>
              <option value="Grade Level">Grade Level</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Certificate/Vocational">Certificate/Vocational</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* {selectedPrograms.some(program => program.value === "Other") && ( */}

          {formData.eduLev === "Other" && (
            <div className="form-group col-lg-4 col-md-4 col-sm-6"
              style={{ marginBottom: "20px" }}>
              <label>Other Level Attained</label>
              <input
                type="text"
                name="otherLevel"
                value={formData.otherLevel}
                onChange={handleInputChange}
                placeholder="Write other education level attained."

              />
            </div>
          )}

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }}>
            <label>Total Years of Study*</label>
            <input type="number" name="eduYrs" value={formData.eduYrs}
              onChange={handleInputChange} required
              placeholder="Primary to post-secondary" min="0" />
          </div>
        </div>

        <div className="row" style={{ borderBottom: "1px solid #f1f3f7" }}>
          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "10px" }}>
            <label>English Proficiency*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="proEng" value={formData.proEng} required
              onChange={handleInputChange} className="chosen-single form-select" >
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
              name="isIntr" value={formData.isIntr} required
              onChange={handleInputChange} className="chosen-single form-select" >
              <option value="" disabled>Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
            <label>Which Intake?*</label>
            <MultiSelect
              options={intakes}
              value={selectedIntakes}
              onChange={handleSelectIntakes}
              labelledBy="Select"
              name='datAvl'
              required
            />
          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
            <label>Province Interested In*</label>
            <MultiSelect
              options={provincesCanada}
              value={selectedProvince}
              onChange={handleSelectProvince}
              labelledBy="Select"
              name='proCan'
              required
            />
          </div>
        </div>

        <div className="row"
          style={{ borderBottom: "1px solid #f1f3f7", paddingBottom: "10px" }}>
          <div className="form-group col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
            <label>Programs Applying For*</label>
            <MultiSelect
              options={programOptions}
              value={selectedPrograms}
              onChange={handleSelectedProgram}
              labelledBy="Select"
              name='intAre'
              required
            />
          </div>
          {selectedPrograms.some(program => program.value === "Other") && (
            <div className="form-group col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
              <label>Other Program(s) Applying For*</label>
              <input type="text" name="otherProgram" required value={formData.otherProgram} onChange={handleInputChange} placeholder="Write other programs applying for" />
            </div>
          )}

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }} >
            <label>Allow In Search & Listing</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="allSrch" value={formData.allSrch}
              onChange={handleInputChange} className="chosen-single form-select" >
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
            <textarea name="detail" value={formData.detail} onChange={handleInputChange}
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
