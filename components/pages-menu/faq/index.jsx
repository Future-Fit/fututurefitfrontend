"use client"
import DefaulHeader2 from "@/components/header/DefaulHeader2";
import Breadcrumb from "../../common/Breadcrumb";
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import FaqChild from "./FaqChild";
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
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      {userType === 3 && <DashboardHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType !== 3 && userType !== 4 && <DefaulHeader2 />}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <Breadcrumb title="Faq's" meta="Faq's" /> */}
      {/* <!--End Page Title--> */}

      <section className="faqs-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Frequently Asked Questions</h2>
            <div className="text">Home / Faq</div>
          </div>

          <h3>Payments</h3>
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box">
            <FaqChild />
          </ul>

          <h3>Suggestions</h3>
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box mb-0">
            <FaqChild />
          </ul>
        </div>
      </section>
      {/* <!-- End Faqs Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
