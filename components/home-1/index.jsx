"use client"
import Hero10 from "../hero/hero-10"
import DefaulHeader2 from "../header/DefaultHeader";
import JobFeatured4 from "../job-featured/JobFeatured4";
import MobileMenu from "../header/MobileMenu";
import Link from "next/link";
import FooterDefault from "../footer/common-footer";
import Block8 from "../block/Block8";
import Block6 from "../block/Block6";
import Partner2 from "../common/partner/Partner2";
import DashboardCandidatesHeader from "../header/DashboardCandidatesHeader";
import DashboardHeader from "../header/DashboardEmployerHeader";
import { useEffect, useState } from "react";
import  WordCloudSection from "../block/WordCloudSection";

import GlobalConfig from "@/Global.config";
import CookiesPopup from "./CookiesPopup";
import LoginPopup from "../common/form/login/LoginPopup";

const index = () => {

  const [userType, setUserType] = useState();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(JSON.parse(storedUserType));
    }
  }, []);

  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      {userType === 3 && <DashboardHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType !== 3 && userType !== 4 && <DefaulHeader2 />}
      {/* <Header /> */}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero10 />

      {/* <CallToActionSearch /> */}

     
      {/* <hr style={{ border: 'none', backgroundColor: '#000', height: '4px' }} /> */}


      <section className="layout-pt-10 layout-pb-30" style={{background: '#fff' }}>
        <div className="auto-container" style={{ paddingBottom: '20px', paddingTop: '20px', backgroundColor: '#f5f7fc' }}>
          <div className="sec-title text-center" >
            <h2>Our Services</h2>
            {/* <div style={{ color: '#fff' }} className="text">
              AT FFI, our goal is to connect those seeking opportunities with the a global network of resources. 
            </div> */}
          </div>
          {/* End sec-title */}

          <div className="row grid-base " data-aos="fade-up">
            <Block8 />
            {/* <!-- Work Block --> */}
          </div>
          <div className="btn-box text-center" style={{ marginTop: '20px' }}>
            <Link href="/service" className="theme-btn btn-style-one bg-blue">
              <span className="btn-title">Learn More</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="" style={{  background: GlobalConfig.BgrClr}}>
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="sec-title text-center">
                <h2 style={{color:'#fff'}}>Become A Member in 3 Simple Steps</h2>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="row grid-base" data-aos="fade-up">
            <Block6 />
          </div>
        </div>
      </section>

      <section className="job-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 >Trending Job Opportunities</h2>
            {/* <div className="text">
              Trending and in high demand
            </div> */}
          </div>

          <div className="row" data-aos="fade-up">
            <JobFeatured4 />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list-v6"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="job-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 >Trending Job Opportunities</h2>
          </div>
          <WordCloudSection />
        </div>
        <div className="btn-box">
          <Link
            href="/job-list-v6"
            className="theme-btn btn-style-one bg-blue"
          >
            <span className="btn-title">Load More</span>
          </Link>
        </div>
      </section> */}

      {/* <AppSectionAbout /> */}

      <section className="clients-section-two alternate" style={{ backgroundColor: GlobalConfig.BgrClr }}>
        <div className="auto-container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#FFF', paddingTop: '10px', paddingBottom: '10px', fontWeight: 'bolder' }}>Partners We Work With</h2>

          <div className="sponsors-outer wow fadeInUp">
            <div className="sponsors-carousel">
              <Partner2 />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}
      <CookiesPopup />

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
