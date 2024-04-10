
'use client'

import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";
import { MultiSelect } from "react-multi-select-component";
import "../../../../student-dashboard/my-profile/components/my-profile/error.scss"

const programOptions = [
  { label: "Healthcare", value: "Healthcare" },
  { label: "Engineering/IT", value: "Engineering/IT" },
  { label: "Manufacturing", value: "Manufacturing" },
  { label: "Transportation/Logistics", value: "Transportation/Logistics" },
  { label: "Aviation", value: "Aviation" },
  { label: "Construction", value: "Construction" },
  { label: "Hospitality/Services", value: "Hospitality/Services" },
  { label: "Skilled Trade", value: "Skilled Trade" },
  { label: "Other", value: "Other" }
];

const intakes = [
  { label: "0 to 3 Months", value: "0 to 3 Months" },
  { label: "3 to 6 Months", value: "3 to 6 Months" },
  { label: "After 1 Year", value: "After 1 Year" }
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



const FormInfoBox = ({user, onClose}) => {
  const [userDetail, setUserDetail] = useState(null);
  const [formData, setFormData] = useState({
    lname: '',    // last/family name (required)               
    mname: '',    // middle name (NMN if none)
    fname: '',    // first/given name (required)
    dob: '',      // date of birth (mm/dd/yyyy) (required)
    gen: '',      // gender (required)
    plcBir: '',   // place of birth (required)
    ctzn: '',     // citizenship (required)
    addr: '',     // current address (required)
    city: '',     // current city (required)
    resid: '',    // current country (residency) (required)
    phone: '',    // phone number
    email: '',    // email address (required)
    eduLev: '',   // education level (choose one only) (required)
    otherLevel: '', // education level attained other than listed choice 
    eduYrs: '',   // tot. # of years attended school (prim to univ) (required) 
    proEng: '',   // English lang. proficiency (choose one only) (required)
    proFre: '',   // Frech lang. proficiency (choose one only)
    proOth: '',   // list other language(s) and proficiency level
    isEmp: '',    // job seeker only, currently employed? (yes or no) (required)
    namEmp: '',   // job seeker only, name of employer (required)
    yrsEmp: '',   // job seeker only, # of years employed (required)
    isIntr: '',   // interested to study/work in Canada? (yes or no) (required)
    datAvl: [],   // date avialable for study/employment (select from dates) (required)
    intAre: [],   // interest area for study/employment (select from choices) (required)
    otherProgram: '', // other areas interested in studying/working 
    proCan: [],   // provinces interested to study/work in (select from choices) (required)
    allSrch: '',  // enable searching? (yes or no) (required)  
    detail: '',   // open for user to write anything (limit 500 chars?)
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

  const formatDate = (dateString) => {
    if (!dateString || isNaN(Date.parse(dateString))) {
      return '';
    }
    const date = new Date(dateString);
    console.log(date, dateString, "this is the date");

    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, 0);
    const day = date.getUTCDate().toString().padStart(2, 0);

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

    const isEmpSelected = formData.isEmp === true;
    const namEmpEmpty = isEmpSelected && (!formData.namEmp || formData.namEmp.trim() === '');

    const requiredFields = ["lname", "fname", "dob", "gen", "plcBir", "ctzn", "addr", "city", "resid", "email", "eduLev", "eduYrs", "proEng", "yrsEmp", "isIntr", "datAvl", "intAre", "proCan", "allSrch"];

    const errors = {};
    requiredFields.forEach(field => {
      errors[field] = !formData[field]; // Set error to true if field is empty
    });
    setRequiredFieldsError(errors);


    const unfilledFields = Object.keys(errors).filter(field => errors[field]);
    if (unfilledFields.length > 0) {
      // If there are errors, prevent form submission
      // alert(`Error updating user details. Please fill in all required data for fields: ${unfilledFields.join(", ")}.`);
      alert(`Error updating user details. Please fill in all required data for fields underlined by red`);
      return;
    }

    if (isOtherSelected && isOtherProgramEmpty) {
      alert("Other Program should not be empty");
      return; // Prevent form submission
    }

    if (isOtherLevelSelected && isOtherLevelEmpty) {
      alert("Other Level should not be empty");
      return; // Prevent form submission
    }

    if (isEmpSelected && namEmpEmpty) {
      alert("Employer Name should not be empty");
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
            <input type="text" name="lname" value={user.lname}
              onChange={handleInputChange} placeholder="Last Name" required />
            {requiredFieldsError["lname"] && <div className="error-indicator" />}

          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Middle Name</label>
            <input type="text" name="mname" value={user.mname}
              onChange={handleInputChange}
              placeholder="If No Middle Name, Put 'NMN'" />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>First (Given) Name*</label>
            <input type="text" name="fname" value={user.fname}
              onChange={handleInputChange} placeholder="First Name" required />
            {requiredFieldsError["fname"] && <div className="error-indicator" />}

          </div>
        </div>

        {/* <!-- Input --> */}
        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-4"
            style={{ marginBottom: "20px" }}>
            <label>Date of Birth*</label>
            <div>
            <input
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleInputChange} placeholder="MM/DD/YYY"
                max={new Date().toISOString().split('T')[0]}
                // 
                required />
              {requiredFieldsError["dob"] && <div className="error-indicator" />}

            </div>
          </div>
          {/* <div className={`form-group col-lg-4 col-md-4 col-sm-12 ${requiredFieldsError.fname ? 'error-indicator' : ''}`} */}
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ width: "150px", marginBottom: "20px" }}>
            <label>Gender*</label>
            <input type="text" name="gen" value={user.gen}
              onChange={handleInputChange} placeholder="" required />
            {requiredFieldsError["gen"] && <div className="error-indicator" />}
          </div>
        </div>

        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Place of Birth*</label>
            <input type="text" name="plcBir" value={user.plcBir}
              onChange={handleInputChange} placeholder="Place of Birth (City)" required />
            {requiredFieldsError["plcBir"] && <div className="error-indicator" />}

          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Citizenship*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="ctzn"
              required
              value={user.ctzn}
              onChange={(e) => setFormData({ ...formData, ctzn: e.target.value })}
            >
              <option value="" disabled>Select...</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}> {country.label}
                </option>
              ))}
            </select>
            {requiredFieldsError["ctzn"] && <div className="error-indicator" />}

          </div>
        </div>

        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Current Address*</label>
            <input type="text" name="addr" value={user.addr} required
              onChange={handleInputChange} placeholder="Include Street Name, Postal Code" />
            {requiredFieldsError["addr"] && <div className="error-indicator" />}

          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Current City*</label>
            <input type="text" name="city" value={user.city} required
              onChange={handleInputChange} placeholder="Current City" />
            {requiredFieldsError["city"] && <div className="error-indicator" />}

          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Country of Residence*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="resid" required
              value={user.resid}
              onChange={(e) => setFormData({ ...formData, resid: e.target.value })}
            >
              <option value="" disabled>Select...</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}> {country.label}
                </option>
              ))}
            </select>
            {requiredFieldsError["resid"] && <div className="error-indicator" />}

          </div>
        </div>

        <div className="row"
          style={{ borderBottom: "1px solid #f1f3f7", paddingBottom: "10px" }}>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Phone Number</label>
            <input type="text" name="phone" value={user.phone}
              onChange={handleInputChange} placeholder="[+][Country Code][Phone Number]" />
          </div>
          <div className="form-group col-lg-4 col-md-4 col-sm-12"
            style={{ marginBottom: "20px" }}>
            <label>Email Address*</label>
            <input type="email" name="email" value={user.email} required disabled
              onChange={handleInputChange} placeholder="Email Address" />
            {requiredFieldsError["email"] && <div className="error-indicator" />}

            {/* <text style={{ fontWeight: "lighter", fontSize: "0.8em", paddingBottom: "15px" }}>
              * If you change your email address here, make sure to us it to sign in.
            </text> */}
          </div>
        </div>

        <text style={{ margin: "30px 0px 10px 0px", textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
          Education Background
        </text>

        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }}>
            <label>Highest Level Attained*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="eduLev" value={user.eduLev} required
              onChange={handleInputChange} className="chosen-single form-select" >
              <option value="" disabled>Select...</option>
              <option value="Grade Level">Grade Level</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Certificate/Vocational">Certificate/Vocational</option>
              <option value="Other">Other</option>
            </select>
            {requiredFieldsError["eduLev"] && <div className="error-indicator" />}

          </div>
          {user.eduLev === "Other" && (
            <div className="form-group col-lg-4 col-md-4 col-sm-6"
              style={{ marginBottom: "20px" }}>
              <label>Other Level Attained</label>
              <input
                type="text"
                name="otherLevel"
                value={user.otherLevel}
                onChange={handleInputChange}
                placeholder="Write other education level attained."
              />
            </div>
          )}

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }}>
            <label>Total Years of Study*</label>
            <input type="number" name="eduYrs" value={user.eduYrs}
              onChange={handleInputChange} required
              placeholder="Primary to post-secondary" min="0" />
            {requiredFieldsError["eduYrs"] && <div className="error-indicator" />}

          </div>
        </div>

        <div className="row" style={{ borderBottom: "1px solid #f1f3f7" }}>
          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "10px" }}>
            <label>English Proficiency*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="proEng" value={user.proEng} required
              onChange={handleInputChange} className="chosen-single form-select" >
              <option value="" disabled>Select...</option>
              <option value="Native Speaker">Native Speaker</option>
              <option value="Fluent">Fluent</option>
              <option value="Conversational">Conversational</option>
              <option value="Beginner">Beginner</option>
              <option value="None">None</option>
            </select>
            {requiredFieldsError["proEng"] && <div className="error-indicator" />}

          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "10px" }}>
            <label>French Proficiency</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="proFre" value={user.proFre}
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
            <input type="text" name="proOth" value={user.proOth}
              onChange={handleInputChange}
              placeholder="Lan./prof. level, comma separated" />
          </div>
          <text style={{ fontWeight: "lighter", fontSize: "0.8em", paddingBottom: "15px" }}>
            * Upload transcripts/certificates/diplomas/degrees using File Manager.
          </text>
        </div>

        <text style={{ margin: "30px 0px 10px 0px", textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
          Work Experience
        </text>

        <div className="row" style={{ borderBottom: "1px solid #f1f3f7" }}>
          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }}>
            <label>Currently Working?*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="isEmp" value={user.isEmp} required
              onChange={handleInputChange} className="chosen-single form-select" >
              <option value="" disabled>Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {requiredFieldsError["isEmp"] && <div className="error-indicator" />}

          </div>
          {user.isEmp === true && (
            <div className="form-group col-lg-4 col-md-4 col-sm-6"
              style={{ marginBottom: "20px" }}>
              <label>Employer Name*</label>
              <input
                type="text"
                name="namEmp"
                value={user.namEmp}
                onChange={handleInputChange}
                placeholder="If self employed, enter Self."
              />
            </div>
          )}

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }}>
            <label>Total Work Experience in Years*</label>
            <input type="number" name="yrsEmp" value={user.yrsEmp}
              onChange={handleInputChange} required
              placeholder="If no work experience, enter 0." min="0" />
            {requiredFieldsError["yrsEmp"] && <div className="error-indicator" />}
          </div>

          <text style={{ fontWeight: "lighter", fontSize: "0.8em", paddingBottom: "15px" }}>
            * Upload your resume/CV using File Manager.
          </text>
        </div>

        <text style={{ margin: "30px 0px 10px 0px", textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
          Job Interests
        </text>

        <div className="row">
          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }} >
            <label>Interested in Working in Canada?*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="isIntr" value={user.isIntr} required
              onChange={handleInputChange} className="chosen-single form-select" >
              <option value="" disabled>Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {requiredFieldsError["isIntr"] && <div className="error-indicator" />}

          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }}>
            <label>Availability*</label>
            <MultiSelect
              options={intakes}
              value={selectedIntakes}
              onChange={handleSelectIntakes}
              labelledBy="Select"
              name='datAvl'
              required
            />
            {requiredFieldsError["datAvl"] && <div className="error-indicator" />}
          </div>

          <div className="form-group col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
            <label>Province(s) Interested In*</label>
            <MultiSelect
              options={provincesCanada}
              value={selectedProvince}
              onChange={handleSelectProvince}
              labelledBy="Select"
              name='proCan'
              required
            />
            {requiredFieldsError["proCan"] && <div className="error-indicator" />}

          </div>
        </div>

        <div className="row"
          style={{ borderBottom: "1px solid #f1f3f7", paddingBottom: "10px" }}>
          <div className="form-group col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
            <label>Job Sectors Applying For*</label>
            <MultiSelect
              options={programOptions}
              value={selectedPrograms}
              onChange={handleSelectedProgram}
              labelledBy="Select"
              name='intAre'
              required
            />
            {requiredFieldsError["intAre"] && <div className="error-indicator" />}

          </div>
          {selectedPrograms.some(program => program.value === "Other") && (
            <div className="form-group col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
              <label>Other Sector(s) Applying For*</label>
              <input type="text" name="otherProgram" required value={user.otherProgram}
                onChange={handleInputChange} placeholder="Write other job sectors applying for." />

            </div>
          )}

          <div className="form-group col-lg-4 col-md-4 col-sm-6"
            style={{ marginBottom: "20px" }} >
            <label>Allow In Search & Listing*</label>
            <select style={{ height: "32px", padding: "0px 0px" }}
              name="allSrch" value={user.allSrch} required
              onChange={handleInputChange} className="chosen-single form-select" >
              <option value="" disabled>Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {requiredFieldsError["allSrch"] && <div className="error-indicator" />}

            <text style={{ fontWeight: "lighter", fontSize: "0.8em", paddingBottom: "15px" }}>
              Allows your profile to be visible during search.
            </text>
          </div>
        </div>

        <text style={{ margin: "30px 0px 10px 0px", textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
          Details
        </text>

        <div className="row">
          <div className="form-group col-lg-12 col-md-12"
            style={{ marginBottom: "5px" }}>
            <textarea name="detail" value={user.detail} onChange={handleInputChange}
              placeholder="Please describe your interests, skills and experience. Highlight anything that helps Canadian job posters to know you better."></textarea>
          </div>
        </div>

        <text style={{ fontWeight: "lighter", fontSize: "0.8em", paddingBottom: "15px" }}>
          Upload supporting documents using File Manager.
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
