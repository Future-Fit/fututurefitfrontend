"use client"
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardEmployerHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import JobListingsTable from "./components/JobListingsTable";
import MenuToggler from "../../MenuToggler";
import FooterDefault from "../../../footer/common-footer";
import { useEffect, useState } from "react";
import axios  from "axios";
import apiConfig from "@/app.config";
const index = () => {
  const [jobLists,setJobLists] = useState([]);
  const [numberOfMonths,setNumberOfMonths] = useState(6);
  const [company,setCompany] = useState();
  const token = localStorage.getItem("accessToken");
  const fetchCompany  = async ()=>{
   
   try{
    const response =  await axios.get(`${apiConfig.url}/company/my-company`,{headers:{Authorization:`Bearer ${token}`}})
    setCompany(response.data);
   }catch(err){
    console.log(err);
   }
  }
  const fetchJobsListings  = async()=>{
    try{
      const response =  await axios.get(`${apiConfig.url}/jobpost/my-listings/?months=${numberOfMonths}`,{headers:{Authorization:`Bearer ${token}`}});
      console.log(response,"job listing response");
      setJobLists(response.data);
    }catch(err){
      console.log(err);
    }

  }
  useEffect(()=>{
    fetchJobsListings();
  },[]);
  useEffect(()=>{
    fetchCompany();
  },[]);
  useEffect(()=>{
    fetchJobsListings();
  },[numberOfMonths])
  return (

<div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardEmployerSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Manage jobs!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable jobs={jobLists} company={company} setMonths={setNumberOfMonths} />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <FooterDefault />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
