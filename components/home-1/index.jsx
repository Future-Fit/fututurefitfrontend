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
import WordCloudSection from "../block/WordCloudSection";

import GlobalConfig from "@/Global.config";
import CookiesPopup from "./CookiesPopup";
import LoginPopup from "../common/form/login/LoginPopup";
import Testimonial2 from "../testimonial/Testimonial2";
import AboutBlock from "../block/AboutBlock";

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
      <MobileMenu />

      <LoginPopup />
      {/* End Login Popup Modal */}
      {/* user 1 admin
          user 2 reserved
          user 3 business(employer univeruity gov)
          user 4 jobseeker
          user 5 student  */}

      {userType === 1 && <DashboardHeader />}
      {userType === 3 && <DashboardHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType === 5 && <DashboardCandidatesHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}

      <section className="about-section-two style-two -light-blue">
        <div className="auto-container">
          <div className="sec-title" style={{ alignContent: "center" }}>
            <h2 style={{ color: GlobalConfig.Fgr1Clr }}>
              About Us
            </h2>
          </div>
          <div className="row grid-base align-items-center">
            <div className="col-60 col-md-12 col-sm-12">
              <div className="row icon-side-row wow fadeInRight">
                <AboutBlock />
              </div>
            </div>
            {/* End .col */}

            <div className="image-column col-40 col-md-12 col-sm-12" >
              {/* <div className="sec-title">
                <h2 style={{ color: GlobalConfig.Fgr1Clr }}>
                  About Us
                </h2>
              </div> */}

              {/* <figure className="image" data-aos="fade-right" style={{ paddingTop: '10px' }}>
                <Image
                  width={900}
                  height={900}
                  src="/images/collaboration.jpeg"
                  alt="About"
                  style={{ borderRadius: '15px', marginTop: '20px', marginRight: '20px' }}
                />
              </figure> */}
            </div>

            {/* <div className="content-column mb-0 col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="wow fadeInLeft">
                <a href="/service" className="theme-btn -blue-outline mt-56 md:mt-16">
                  All Services
                </a>
              </div>
            </div> */}
            {/* <!-- Content Column --> */}
          </div>
        </div>
      </section>


      <section className="about-section-two style-two" style={{ backgroundColor: GlobalConfig.BgrClr1, height: '100vh' }}>
        <Hero10 />
      </section>

      <section className="layout-pt-10 layout-pb-30" style={{ background: GlobalConfig.BgrClr2 }}>
        <div className="auto-container" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
          <div className="sec-title text-center" >
            <h2>Services</h2>
            {/* <div style={{ color: '#5a5a5a', fontSize: '16px' }} className="text">
              We provide unparalleled end-to-end services!
            </div> */}
          </div>
          {/* End sec-title */}

          <div className="row grid-base " data-aos="fade-up">
            <Block8 />
            {/* <!-- Work Block --> */}
          </div>
          {/* <div className="btn-box text-center" style={{ marginTop: '20px' }}>
            <Link href="/service" className="theme-btn btn-style-one bg-blue">
              <span className="btn-title">Learn More</span>
            </Link>
          </div> */}
        </div>
      </section>

      <section className="" style={{ background: GlobalConfig.BgrClr1 }}>
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="sec-title text-center">
                <h2 style={{ color: '#fff' }}>Become A Member</h2>
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
              className="theme-btn btn-style-one bg-blue" style={{ backgroundColor: GlobalConfig.LogoOrg }}
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="clients-section-two alternate" style={{ backgroundColor: GlobalConfig.BgrClr1 }}>
        <div className="auto-container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#FFF', paddingTop: '10px', paddingBottom: '10px', fontWeight: 'bolder' }}>Partners We Work With</h2>

          <div className="sponsors-outer wow fadeInUp">
            <div className="sponsors-carousel">
              <Partner2 />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section-two">
        <div className="container-fluid">
          <div className="testimonial-left">
            {/* <Image
              width={504}
              height={451}
              src="/images/resource/testimonial-left.png"
              alt="testimonial"
            /> */}
          </div>
          {/* End left img group */}

          <div className="testimonial-right">
            {/* <Image
              width={504}
              height={451}
              src="/images/resource/testimonial-right.png"
              alt="testimonial"
            /> */}
          </div>
          {/* End right img group */}

          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Future Fit International
            </div>
          </div>
          {/* <!-- Sec Title --> */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Testimonial2 />
            </div>
            {/* <!-- Testimonial Carousel --> */}
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
