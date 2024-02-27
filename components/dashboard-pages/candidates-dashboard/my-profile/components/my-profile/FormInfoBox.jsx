
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
    job_title: '',
    phone: '',
    email: '',
    website: '',
    current_salary: '',
    expected_salary: '',
    experience: '',
    age: '',
    education_levels: '',
    languages: '',
    categories: [],
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
  const updateUser =  async(data)=>{

    try {
     const token = localStorage.getItem("accessToken");
     console.log(token,"this is the  token");
     const userId = localStorage.getItem("loggedInUserId");
     const response = await axios.put(`${apiConfig.url}/users/profile`,data,{headers:{
        Authorization:`Bearer ${token}`
      }});
      fetchUserDetails();
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }
useEffect(() => {
  const userId = localStorage.getItem("loggedInUserId");
  const token =  localStorage.getItem("accessToken");
  console.log('user id', userId);
  if (userId) {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${apiConfig.url}/users/me`,{headers:{
          "Authorization":`Bearer ${token}`
        }});
        console.log('Response from server:', response.data);
        setUserDetail(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }
}, []);
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];
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
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input type="text"  name="fname" value={formData.fname} onChange={handleInputChange}
 placeholder="First Name" required />
   <input type="text"  name="lname" value={formData.lname} onChange={handleInputChange}
 placeholder="Last Name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Job Title</label>
          <input name="job_title" value={formData.job_title} onChange={handleInputChange} type="text" placeholder="UI Designer" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="phone" value={formData.phone} onChange={handleInputChange}  
            placeholder="0 123 456 7890"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input
            type="email" name="email" value={formData.email} onChange={handleInputChange}  
            placeholder="creativelayers"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input
            name="website" value={formData.website} onChange={handleInputChange}  
            placeholder="www.jerome.com"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Current Salary($)</label>
          <select name="current_salary" value={formData.current_salary} onChange={handleInputChange} required>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Expected Salary($)</label>
          <select  name="expected_salary" value={formData.expected_salary} onChange={handleInputChange} className="chosen-single form-select" required>
            <option>120-350 K</option>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <input type="text"name="experience" value={formData.experience} onChange={handleInputChange} placeholder="5-10 Years" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Age</label>
          <select  name="age" value={formData.age} onChange={handleInputChange} className="chosen-single form-select" required>
            <option>23 - 27 Years</option>
            <option>24 - 28 Years</option>
            <option>25 - 29 Years</option>
            <option>26 - 30 Years</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Education Levels</label>
          <input type="text" name="education_levels" value={formData.education_levels} onChange={handleInputChange} placeholder="Certificate" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Languages</label>
          <input
             name="languages" value={formData.languages} onChange={handleInputChange}
            placeholder="English, Turkish"
            required
          />
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Categories </label>
          <Select
            defaultValue={[catOptions[0]]}
            isMulti
            name="categories" value={formData.categories} onChange={handleInputChange} 
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Allow In Search & Listing</label>
          <select   name="allowSearch" value={formData.allowSearch} onChange={handleInputChange} className="chosen-single form-select" required >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" onClick={handleSubmit} className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
