"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import Testimonial2 from "../../testimonial/Testimonial2";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import AppSectionAbout from "@/components/app-section/AppSectionAbout";
import CallToAction from "@/components/call-to-action/CallToAction";
import FooterDefault from "../../../components/footer/common-footer";
import DashboardCandidatesHeader from "../../header/DashboardCandidatesHeader";
import DashboardHeader from "../../header/DashboardEmployerHeader";
import { useEffect, useState } from "react";
import AppSection from "@/components/app-section/AppSection";
import Block7 from "@/components/block/Block7";
import About10 from "@/components/about/About10";

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

      <About10 />

      <section className="app-section">
        <div className="auto-container">
          {/* <AppSectionAbout /> */}
          <AppSection />
        </div>
      </section>
      {/* <CallToAction /> */}
    </>
  );
};

export default index;
