"use client"

import Hero10 from "../hero/hero-10"
import DefaulHeader2 from "../header/DefaulHeader2";
import JobFeatured4 from "../job-featured/JobFeatured4";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import Link from "next/link";
import FooterDefault from "../footer/common-footer";
import Block8 from "../block/Block8";
import Block6 from "../block/Block6";
import Partner2 from "../common/partner/Partner2";
import DashboardCandidatesHeader from "../header/DashboardCandidatesHeader";
import DashboardHeader from "../header/DashboardHeader";
import { useEffect, useState } from "react";



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

      {userType === 3 && <DashboardCandidatesHeader />}
      {userType === 4 && <DashboardHeader />}
      {userType !== 3 && userType !== 4 && <DefaulHeader2 />}
      {/* <Header /> */}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero10 />


      <section className="" style={{ background: '#f5f7fc', paddingTop: '30px', paddingBottom: '30px' }}>
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="sec-title text-center">
                <h2 >3 Simple Steps</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-base" data-aos="fade-up">
            <Block6 />
          </div>
        </div>
      </section>
      {/* <hr style={{ border: 'none', backgroundColor: '#000', height: '4px' }} /> */}

      <section className="layout-pt-10 layout-pb-30" style={{ background: '#3B578E' }}>
        <div className="auto-container" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
          <div className="sec-title text-center" style={{ color: '#fff' }}>
            <h2 style={{ color: '#fff', paddingTop: '10px' }}>Services</h2>
            <div style={{ color: '#fff' }} className="text">
              Job for anyone, anywhere
            </div>
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

      <section className="job-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 >Featured Jobs</h2>
            <div className="text">
              Jobs that are trending and highly in demand
            </div>
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

      <section className="clients-section-two alternate" style={{ background: '#3B578E' }}>
        <div className="auto-container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', paddingTop: '10px',  fontWeight: 'bolder' }}>Business</h2>

          <div className="sponsors-outer wow fadeInUp">
            <div className="sponsors-carousel">
              <Partner2 />
            </div>
          </div>
        </div>
      </section>


      {/* <!-- End Job Section --> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
