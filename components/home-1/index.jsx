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
      <span className="header-span"></span>
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

      <MobileMenu />

      <section style={{ background: GlobalConfig.BgrClr1 }}>
        <Hero10 />
      </section>

      <section style={{ background: GlobalConfig.BgrClr2 }}>
        <Block8 />
      </section>

      <section style={{ background: GlobalConfig.BgrClr1 }}>
        <Block6 />
      </section>

      <section >
        <JobFeatured4 />
      </section>

      <section style={{ backgroundColor: GlobalConfig.BgrClr1 }}>
        <Partner2 />
      </section>

      <section>
        <Testimonial2 />
      </section>

      {/* <!-- End Job Section --> */}
      <CookiesPopup />

      <FooterDefault />


      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
