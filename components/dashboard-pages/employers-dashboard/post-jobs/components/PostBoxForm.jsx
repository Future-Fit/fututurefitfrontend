"use client"
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Map from "../../../Map";
import axios from 'axios';
import apiConfig from '@/app.config';
import jobCatergories from '@/data/job-catergories';
const PostBoxForm = () => {
  const  [company,setCompany] = useState([]);
  const  [category,setCategory] = useState([]);
  const [jobType,setJobType] =  useState([]);
  const [skills,setSkills] =  useState([]);
  const token =  localStorage.getItem('accessToken');
  const fetchCompanies  = async ()=>{
    try{
      const response = await axios.get(`${apiConfig.url}/company/my-company`,{headers:{Authorization:`Bearer ${token}`}});
      
      if(response.status == 200){
          var obj  = [];
        
              obj.push({value:response.data.id,label:response.data.company_name});
       
         
          setCompany(obj);
      }
  
    }catch(ex){
      console.error(ex);
    }

  }
  const fetchCategories = async ()=>{

    try{
      const response = await axios.get(`${apiConfig.url}/job-category`);
     console.log("check Category responses",response);
      if(response.status == 200){
          var obj  = [];
           
          for(let i=0; i < response.data.result.length; i++){
  
              obj.push({value:response.data.result[i].id,label:response.data.result[i].name});
          }
        
          setCategory(obj);
         
      }
  
    }catch(ex){
      console.error(ex);
    
  }}
  const fetchJobType = async ()=>{
    try{
      const response = await axios.get(`${apiConfig.url}/job-type`);
      console.log(response.status,response.data.result,"check type ");
      if(response.status == 200){
          var obj  = [];
        
          for(let i=0; i < response.data.result.length; i++){
              console.log("fetching type");
              obj.push({value:response.data.result[i].id,label:response.data.result[i].job_type});
          }
         
          setJobType(obj);
          console.log(jobType,"selected job")
          
        }
  
    }catch(ex){
      console.error(ex);
    
  }}

  const fetchSkills = async ()=>{

    try{
      const response = await axios.get(`${apiConfig.url}/skillset`);
      console.log(response.status,response.data.result,"check it ");
      if(response.status == 200){
          var obj  = [];
        
          for(let i=0; i < response.data.result.length; i++){
  
              obj.push({value:response.data.result[i].id,label:response.data.result[i].name});
          }
      
          setSkills(obj);
          console.log(businessStream);
      }
  
    }catch(ex){
      console.error(ex);
    }
  }
  const [formData, setFormData] = useState({
    job_title: '',
    job_description: '',
    deadline_date: '',
    hours: '', // Add other form fields here
    rate: '',
    salary: '',
    city: '',
    country: '',
    map_location: '',
    education: '',
    is_posted: true,
    is_remote: true,
    experience: 'Entry Level',
    company: null,
    category: null,
    jobType: null,
    skillSets: [],
  });

  const specialisms = [
    { value: 'string1', label: 'String 1' },
    { value: 'string2', label: 'String 2' },
    { value: 'string3', label: 'String 3' },
    // Add more options as needed
  ];
useEffect(()=>{
  fetchCategories();
  fetchSkills();
  fetchJobType();
  fetchCompanies();
},[])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOptions, action) => {
    setFormData({ ...formData, skillSets: selectedOptions.map(option => option.value) });
  };
  const handleSelectJobType = (selectedOptions)=>{
    setFormData({ ...formData, jobType: selectedOptions?selectedOptions.value:null });
    
  }
  const handleSelectCompany = (selectedOptions)=>{
    setFormData({ ...formData, company: selectedOptions?selectedOptions.value:null });
    
  }
  const handleSelectCategory = (selectedOptions)=>{
    setFormData({ ...formData, category: selectedOptions?selectedOptions.value:null });
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
const accessToken  =  localStorage.getItem("accessToken");
console.log(accessToken,"my token");
    try {
      const response = await fetch(`${apiConfig.url}/jobpost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization":`Bearer ${accessToken}`
      
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("job post created Successfully");
        console.log('Job post created successfully!');
        // Handle success, redirect, or perform other actions
      } else {
        const data =  await response.json();
        alert(data.message[0]);
        console.error('Failed to create job post');
        // Handle error scenarios
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      {/* Job Title */}
      <div className="form-group col-lg-12 col-md-12">
        <label>Job Title</label>
        <input
          type="text"
          name="job_title"
          placeholder="Title"
          value={formData.job_title}
          onChange={handleInputChange}
        />
      </div>

      {/* Job Description */}
      <div className="form-group col-lg-12 col-md-12">
        <label>Job Description</label>
        <textarea
          placeholder="Spent several years working on sheep on Wall Street..."
          name="job_description"
          value={formData.job_description}
          onChange={handleInputChange}
        />
      </div>

      <div className="container">
  <div className="row">
    <div className="col-lg-6 col-md-12">
      <div className="form-group">
        <label>Skill Set</label>
        <Select
          isMulti
          name="skillSets"
          options={skills}
          className="basic-multi-select"
          classNamePrefix="select"
          value={skills.filter(option => formData.skillSets.includes(option.value))}
          onChange={handleSelectChange}
        />
      </div>
      <div className="form-group">
        <label>Job Category</label>
        <Select
        isClearable
          className="chosen-single"
          name="job Category"
          options={category}
          value={category.find(
            (option) => option.value === formData.category
          )}
          onChange={handleSelectCategory}
        />
      
      </div>
     
      <div className="form-group">
        <label>Education</label>
        <input
          type="text"
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Application Deadline Date</label>
        <input
          type="text"
          name="deadline_date"
          placeholder="06.04.2020"
          value={formData.deadline_date}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Offered Salary</label>
        <input
          type="text"
          name="salary"
          placeholder="Offered Salary"
          value={formData.salary}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>rate</label>
        <input
          type="text"
          name="rate"
          placeholder="rate"
          value={formData.rate}
          onChange={handleInputChange}
        />
      </div>


      {/* Other form fields... */}
    </div>

    <div className="col-lg-6 col-md-12">
      {/* Job Type */}
      <div className="form-group">
        <label>Company</label>
        <Select
        isClearable
          className="chosen-single"
          name="jobType"
          options={company}
          value={company.find(
            (option) => option.value === formData.company
          )}
          onChange={handleSelectCompany}
        />
      
      </div>
      <div className="form-group">
        <label>Job Type</label>
        <Select
        isClearable
          className="chosen-single"
          name="jobType"
          options={jobType}
          value={jobType.find(
            (option) => option.value === formData.jobType
          )}
          onChange={handleSelectJobType}
        />
      
      </div>
      <div className="form-group">
        <label>Experience Level</label>
        <select
        isClearable
          className="chosen-single form-select"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
        >
          <option data="Entry Level" > Entry Level</option>
          <option data="Junior"> Junior </option>
          <option data="Mid Level"> Mid Level</option>
          <option data="Senior"> Senior</option>

          {/* Options for Experience Level */}
        </select>
      </div>
      {/* Offered Salary */}
 

      {/* Experience Level */}
     

      {/* Education */}
 

      {/* Qualification */}
      

      {/* Application Deadline Date */}
      

      {/* Country */}
     
      <div className="form-group">
        <label>Country</label>
        <input
          className="chosen-single "
          name="country"
          type="text"
          placeholder='country'
          value={formData.country}
          onChange={handleInputChange}
        />
      </div>

      {/* City */}
      <div className="form-group">
        <label>City</label>
        <input
          className="chosen-single "
          name="city"
          type="text"
          placeholder='city'
          value={formData.city}
          onChange={handleInputChange}
        />
      </div>

      
      <div className="form-group">
        <label>hours</label>
        <input
          type="text"
          name="hours"
          placeholder="hours"
          value={formData.hours}
          onChange={handleInputChange}
        />
      </div>

      {/* Complete Address */}
     

      {/* Find On Map */}
   

      {/* Latitude */}


      {/* Longitude */}
  
      {/* Search Location */}
   

   

      {/* Submit button */}
  
    </div>
  </div>
</div>
<div className='col-lg-12 col-md-12'>
<div className="form-group">
        <label>Job location</label>
        <input
          type="text"
          name="map_location"
          placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
          value={formData.map_location}
          onChange={handleInputChange}
        />
      </div>
</div>
<div className='row'> 


<div className='col-lg-4 col-md-12'>
<div className="form-group">
        <label>Longitude</label>
        <input
          type="text"
          name="longitude"
          placeholder="Longitude"
        
          onChange={handleInputChange}
        />
      </div>
</div>
<div className='col-lg-4 col-md-12'>
<div className="form-group">
        <label>Latitude</label>
        <input
          type="text"
          name="longitude"
          placeholder="Longitude"
         
          onChange={handleInputChange}
        />
      </div>
</div>
<div className='col-lg-4 col-md-12'>
<div className="form-group">
        <button className="theme-btn btn-style-three" type="button">
          Search Location
        </button>
      </div>
</div>
</div>




<div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>
<div className="form-group text-right">
        <button type="submit" className="theme-btn btn-style-one">
          Next
        </button>
      </div>
   
  
   
    </form>
  );
};

export default PostBoxForm;
