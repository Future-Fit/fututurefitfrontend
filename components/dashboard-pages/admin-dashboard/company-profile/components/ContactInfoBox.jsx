"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "../../../Map";
import {
  GetCountries,
  GetState,
  GetCity,
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import apiConfig from "@/app.config";
const ContactInfoBox = ({company}) => {
  const [countryid, setCountryid] = useState(70);
  const [stateid, setstateid] = useState();
  const [cityid,setCityId] = useState();
  const [locationInfo, setLocationInfo] = useState();
  const [latitude,setLatitude] = useState('');
  const [longitude,setLongtiude] = useState('');
  const token =  localStorage.getItem("accessToken");
  const [currCountry,setCurrCoutry] =  useState('');
  const [currCity,setCurrCity] =  useState('');
  const [currState,setCurrState] =  useState('');

 
  useEffect(()=>{
     
    setstateid(company?.state);
    setCityId(company?.city);
    // setCountryid(company?.country)
    setLocationInfo(company?.completeAddress)
    GetCountries(company?.country).then((result) => {
 
      setCurrCoutry(result[company?.country]?.name);
    });
    GetState(company?.country).then((result) => {

       var currStateArr  = result.filter((e)=>e.id == company?.state
       );
         setCurrState(currStateArr[0]?.name);
    });
    GetCity(company?.country, company?.state).then((result) => {
       const cityArr =  result.filter((e)=>e.id == company?.city)
      setCurrCity(cityArr[0]?.name);
    });
  },[company]);
  // Fetch information from the server (example: fetching initial data)
 // Empty dependency array means this effect runs once when the component mounts

 

  const handleSave = async () => {
    try {
      
      console.log("check this" , cityid,countryid,stateid,locationInfo);
      await axios.post(`${apiConfig.url}/company/address`, {
        city:cityid,
        country:countryid,
        state:stateid,
        completeAddress:locationInfo
      },{headers:{Authorization:`Bearer ${token}`}});

     alert("Data saved successfully!");
    } catch (error) {

      alert("Error saving data:", error);
      console.error("Error saving data:", error);
    }
  };

  return (
    <form className="default-form">
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Country {currCountry} </label>
          <CountrySelect
            onChange={(e) => {
            
              setCountryid(e.id);
            }}
            placeHolder="Select Country"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>State {currState} </label>
          <StateSelect
            countryid={countryid}
            onChange={(e) => {
              setstateid(e.id);
            }}
            placeHolder="Select State"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>City {currCity}</label>
          <CitySelect
            countryid={countryid}
            stateid={stateid}
            onChange={(e) => {
              setCityId(e.id)
            }}
            placeHolder="Select City"
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Complete Address</label>
          <input
            type="text"
            name="completeAddress"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
            required
            value={locationInfo}
            onChange={(e) =>
              setLocationInfo(e.target.value)
            }
          />
        </div>
 

        <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            placeholder="Melbourne"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value )}
          />
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            placeholder="Melbourne"
            required
            value={longitude}
            onChange={(e) => setLongtiude( e.target.value )}
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <button
            type="button"
            className="theme-btn btn-style-three"
            // onClick={handleLocationSearch}
          >
            Search Location
          </button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <button
            type="button"
            className="theme-btn btn-style-one"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;
