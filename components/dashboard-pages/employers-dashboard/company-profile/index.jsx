"use client"
import { useEffect, useState } from "react";
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardEmployerHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import FooterDefault from "../../../footer/common-footer";
import apiConfig from "@/app.config";
import axios from "axios";
const index = () => {
    const [company,setCompany] =  useState(null);
    const token = localStorage.getItem("accessToken");
    const getComany  = async ()=>{
        try{
            const company  = await axios.get(`${apiConfig.url}/company/my-company`,{headers:{Authorization:`Bearer ${token}`}})    
            
           console.log("compnay data",company);
            setCompany(company.data);
    
        }catch(err){
            console.error("can not fetch company",err);
        }
    }
    useEffect(()=>{
        getComany();
      
    },[])
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
                    <BreadCrumb title="Company Profile!" />
                    {/* breadCrumb */}

                    <MenuToggler />
                    {/* Collapsible sidebar button */}

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>My Profile</h4>
                                    </div>
                                    <MyProfile />
                                </div>
                            </div>
                            {/* <!-- Ls widget --> */}

                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>Social Network</h4>
                                    </div>
                                    {/* End .widget-title */}
                                    <div className="widget-content">
                                        <SocialNetworkBox company={company} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Ls widget --> */}

                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>Contact Information</h4>
                                    </div>
                                    {/* End .widget-title */}

                                    <div className="widget-content">
                                        <ContactInfoBox company={company} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Ls widget --> */}
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
