"use client"
import Image from "next/image";
// import LoginPopup from "@/common/form/login/LoginPopup";
import MobileMenu from "@/components/header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import FooterDefault from "@/components/footer/common-footer";
import DashboardAdminHeader from '@/components/header/DashboardAdminHeader'
import DashboardEmployerHeader from '@/components/header/DashboardEmployerHeader'
import DashboardStudentHeader from '@/components/header/DashboardStudentsHeader'
import { useEffect, useState } from "react";
import Details from "@/components/pages-menu/featured-industries/Trade/Details";
import DashboardJobseekerHeader from "@/components/header/DashboardJobseekerHeader";
import LoginPopup from "@/components/common/form/login/LoginPopup";
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
        // backgroundImage: "url(/images/background/5.png)",
        backgroundColor: GlobalConfig.LogoOrg,
        backgroundRepeat: "no-repeat", backgroundPosition: "center center",
        backgroundSize: "cover"
      }}>
        <div className="auto-container" style={{ alignItems: "center" }}>
          <div className="container-fluid">
            <div className="sec-title text-center" style={{ padding: "20px 0" }}>
              <h2>Skilled Trade</h2>
            </div>
          </div>
        </div>
      </section >

      <section className="app-section">
        <div className="auto-container">
          <Details />
        </div>
      </section>

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
