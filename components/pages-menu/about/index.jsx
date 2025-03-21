"use client"
import LoginPopup from "@/components/common/form/login/LoginPopup";
import MobileMenu from "@/components/header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import FooterDefault from "@/components/footer/common-footer";
import DashboardJobseekerHeader from "@/components/header/DashboardJobseekerHeader";
import DashboardAdminHeader from "../../../components/header/DashboardAdminHeader"
import DashboardStudentHeader from "../../../components/header/DashboardStudentsHeader"
import DashboardEmployerHeader from "../../../components/header/DashboardEmployerHeader"
import DashboardHeader from "@/components/header/DashboardEmployerHeader";
import { useEffect, useState } from "react";

import AboutBody from "@/components/about/AboutBody";
import AboutTop from "@/components/about/AboutTop";
import GlobalConfig from "@/Global.config";

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

      {userType === 1 && <DashboardAdminHeader />}
      {userType === 3 && <DashboardEmployerHeader />}
      {userType === 4 && <DashboardJobseekerHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}
      {/* <DefaulHeader /> */}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="about-section-two" style={{
        alignItems: "center",
        backgroundImage: "url(../../images/background/20.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}>
        <div className="auto-container" style={{ alignItems: "center" }}>
          <div className="container-fluid">
            <div className="sec-title text-center"
              style={{ paddingBottom: "20px" }}>
              <h2>About Us</h2> </div>
            <div className="carousel-outer" data-aos="fade-up">
              <div className="about-carousel">
                <AboutTop />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app-section">
        <div className="auto-container">
          <AboutBody />
        </div>
      </section>

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
