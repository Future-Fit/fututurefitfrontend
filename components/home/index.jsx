"use client"
import { useEffect, useState } from "react";

import DefaulHeader2 from "../header/DefaultHeader";
import DashboardCandidatesHeader from "../header/DashboardCandidatesHeader";
import DashboardHeader from "../header/DashboardEmployerHeader";
import MobileMenu from "../header/MobileMenu";
import LoginPopup from "../common/form/login/LoginPopup";
import GlobalConfig from "@/Global.config";
import DashboardAdminHeader from "../header/DashboardAdminHeader"
import DashboardEmployeeHeader from "../header/DashboardEmployerHeader"
import DashboardStudentHeader from "../header/DashboardStudentsHeader"

import CookiesPopup from "./CookiesPopup";
import Hero from "./hero/Hero"
import ServicesProvided from "./ServicesProvided";
import Membership from "./Membership";
import FeaturedJobs from "./FeaturedJobs";
import Partnership from "./Partnership";
import dynamic from "next/dynamic";

const index = () => {

  const [userType, setUserType] = useState();
  const [isModalOpen , setIsModalOpen] = useState(true);
  const FooterDefault = dynamic(() => import('../footer/common-footer'), { loading: () => <div>Loading...</div>, ssr: false });


  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(JSON.parse(storedUserType));
    }
  }, []);

  // This is the top-level/homepage of the website.
  // All login popups are here
  // All user types are as follows:
  // user 1= admin
  // user 2= reserved
  // user 3= business(employer univeruity gov)
  // user 4= jobseeker
  // user 5= student
  return (
    <>
      <span className="header-span"></span>
      {/* Start login popup modal */}
        {  isModalOpen && <LoginPopup  closeMe={  ()=>{
        const element  =  document.getElementById("btn-del");
        
        element.click();
        
          }}/>}
      {/* End login popup modal */}

      {/* Dashboards depend on user types */}
      {userType === 1 && <DashboardAdminHeader />}
      {userType === 3 && <DashboardEmployeeHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}

      {/* Show the mobile menu on the homepage */}
      <MobileMenu />
      {/* End of the mobile menu on the homepage */}

      {/* Start of the different sections on the homepage; each section can be edited/deleted separately
          Each section is responsively optimized; any required change must be made within each section */}

      {/* This is the first section of the home page (carousel/gallery section)*/}
      <section style={{ background: GlobalConfig.BgrClr1 }}>
        <Hero />
      </section>

      {/* This is the second section of the home page (services section) */}
      <section style={{ background: GlobalConfig.BgrClr2 }}>
        <ServicesProvided />
      </section>

      {/* This is the third section of the home page (become member section) */}
      <section style={{ background: GlobalConfig.BgrClr1 }}>
        <Membership />
      </section>

      {/* This is the fourth section of the home page (trending jobs section) */}
      <section style={{ background: GlobalConfig.BgrClr2 }}>
        <FeaturedJobs />
      </section>

      {/* This is the fifth section of the home page (partners section) */}
      {/* <section style={{ backgroundColor: GlobalConfig.BgrClr1 }}>
        <Partnership />
      </section> */}

      {/* <!-- End Job Section --> */}
      <CookiesPopup />

      <FooterDefault />


      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
