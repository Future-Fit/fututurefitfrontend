"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import FooterDefault from "../../../components/footer/common-footer";
import Testimonial from "@/components/testimonial/Testimonial";
import DashboardCandidatesHeader from "../../header/DashboardCandidatesHeader";
import DashboardHeader from "../../header/DashboardEmployerHeader";
import { useEffect, useState } from "react";
import AppSectionAbout from "@/components/app-section/AppSectionAbout";
import CallToAction2 from "@/components/call-to-action/CallToAction2";
import CallToAction from "@/components/call-to-action/CallToAction";
import Block1 from "@/components/block/Block1";
import CallToAction11 from "@/components/call-to-action/CallToAction11";
import CallToAction3 from "@/components/call-to-action/CallToAction3";

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
          <AppSectionAbout />
        </div>
      </section>

      {/* <CallToAction12/> */}

      {/* <section className="about-section-three">
        <div className="auto-container"> */}
      {/* <ImgBox /> */}

      {/* <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div> */}

      {/* <IntroDescriptions /> */}
      {/* </div>
      </section> */}
      {/* <!-- End About Section Three --> */}

      <CallToAction2 />

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

          {/* <div className="testimonial-right"> */}
          {/* <Image
              width={504}
              height={451}
              src="/images/resource/testimonial-right.png"
              alt="testimonial"
            /> */}
          {/* </div> */}
          {/* End right img group */}

          <div className="sec-title text-center">
            <h2>Universities & Colleges</h2>
            {/* <div className="text">
              Future Fit International
            </div> */}
          </div>
          {/* <!-- Sec Title --> */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Testimonial />
            </div>
            {/* <!-- Testimonial Carousel --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      <section className="work-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Training</h2>
            <div className="text">Job for anyone, anywhere</div>
          </div>
          <div className="row" data-aos="fade-up">
            <Block1 />
          </div>
        </div>
      </section>
      {/* End Work Section  */}


      <CallToAction3 />

      {/* <!-- End Clients Section--> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
