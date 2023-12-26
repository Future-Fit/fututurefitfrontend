// Import necessary libraries and modules
"use client"
import { useEffect, useState } from 'react';
import Select from 'react-select';
import apiConfig from "@/app.config";
import axios from 'axios';
const FormInfoBox = () => {
  // State to manage form data
  const [businessStream,setBusinessStream]  = useState([]);
  const fetchBusinessStream  = async ()=>{
  try{
    const response = await axios.get(`${apiConfig.url}/business-streams`);
    console.log(response.status,response.data.result,"check it ");
    if(response.status == 200){
        var obj  = [];
        console.log("here");
        for(let i=0; i < response.data.result.length; i++){

            obj.push({value:response.data.result[i].id,label:response.data.result[i].name});
        }
        console.log(obj,"check obj");
        setBusinessStream(obj);
        console.log(businessStream);
    }

  }catch(ex){
    console.error(ex);
  }


  }
  useEffect(()=>{
    fetchBusinessStream();
  },[])
  const [formData, setFormData] = useState({
    company_name: '',
    profile_description: '',
    business_stream_id: null,
    establishment_date: '',
    company_website_url: '',
  });

  // Options for the business stream select
  

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for business stream select changes
  const handleBusinessStreamChange = (selectedOption) => {
    setFormData({
      ...formData,
      business_stream_id: selectedOption ? selectedOption.value : null,
    });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken,"token")
      // Make a POST request to the API endpoint
      const response = await fetch(`${apiConfig.url}/company`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:`Bearer ${accessToken}`
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        console.log('Form submitted successfully');
        alert("company added successfully")
        // You may perform additional actions after successful submission
      } else {
        console.error('Failed to submit form');
        alert(response.data);
        // Handle error cases
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Input - Company Name */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Company Name</label>
          <input
            type="text"
            name="company_name"
            placeholder="Invisionn"
            value={formData.company_name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input - Profile Description */}
       

        {/* Select - Business Stream */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Business Stream</label>
          <Select
            isClearable
            name="business_stream"
            options={businessStream}
            value={businessStream.find(
              (option) => option.value === formData.business_stream_id
            )}
            onChange={handleBusinessStreamChange}
          />
        </div>

        {/* Input - Establishment Date */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Establishment Date</label>
          <input
            type="date"
            name="establishment_date"
            value={formData.establishment_date}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input - Company Website URL */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Company Website URL</label>
          <input
            type="text"
            name="company_website_url"
            placeholder="www.invision.com"
            value={formData.company_website_url}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
       
   
      </div>
      <div className="form-group col-lg-12 col-md-12">
          <label>Profile Description</label>
          <textarea
            placeholder="Spent several years working on..."
            name="profile_description"
            value={formData.profile_description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <button className="theme-btn btn-style-one" type="submit">
            Save
          </button>
        </div>
    </form>
  );
};

export default FormInfoBox;
