"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import Testimonial2 from "../../testimonial/Testimonial2";
import DefaulHeader2 from "@/components/header/DefaulHeader2";
import AppSectionAbout from "@/components/app-section/AppSectionAbout";
import CallToAction from "@/components/call-to-action/CallToAction";
import FooterDefault from "../../../components/footer/common-footer";
import DashboardCandidatesHeader from "../../header/DashboardCandidatesHeader";
import DashboardHeader from "../../header/DashboardHeader";
import { useEffect, useState } from "react";
import AppSection from "@/components/app-section/AppSection";
import Block7 from "@/components/block/Block7";

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
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      {userType === 3 && <DashboardHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType !== 3 && userType !== 4 && <DefaulHeader2 />}

      {/* <DefaulHeader /> */}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <Breadcrumb title="Who We are" meta="About Us" /> */}
      {/* <!--End Page Title--> */}

      <section className="app-section">
        <div className="auto-container">
          {/* <AppSectionAbout /> */}
          <AppSection />
        </div>
      </section>
      <section className="app-section">
        <div className="auto-container">
          <div className="row grid-base" data-aos="fade-up">
            <Block7 />
          </div>
        </div>
      </section>


      <CallToAction />

      {/* <!-- End CallToAction2 --> */}

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
      {/* <!-- End Testimonial Section --> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
