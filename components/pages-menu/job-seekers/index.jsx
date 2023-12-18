"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaulHeader2";
import FooterDefault from "../../../components/footer/common-footer";
import Testimonial from "@/components/testimonial/Testimonial";
import DashboardCandidatesHeader from "../../header/DashboardCandidatesHeader";
import DashboardHeader from "../../header/DashboardHeader";
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

      <section className="app-section" >
        <div className="auto-container" >
          <AppSectionAbout />
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
