"use client"
import Image from "next/image";
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import FooterDefault from "../../../components/footer/common-footer";
import DashboardCandidatesHeader from "../../header/DashboardCandidatesHeader";
import DashboardAdminHeader from '../../header/DashboardAdminHeader'
import DashboardEmployeeHeader from '../../header/DashboardEmployerHeader'
import DashboardStudentHeader from '../../header/DashboardStudentsHeader'
import DashboardHeader from "../../header/DashboardEmployerHeader";
import { useEffect, useState } from "react";
import TrainingTop from "./TrainingTop";
import TrainingBody from "./TrainingBody";
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
      {userType === 3 && <DashboardEmployeeHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}
      {/* <DefaulHeader /> */}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="about-section-two">
        <div className="auto-container" style={{ alignItems: "center" }}>
          {/* <div className="container-fluid"> */}
            <div className="sec-title text-center"> <h2 style={{ color: GlobalConfig.LogoBlu }}>Training & Other Services</h2> </div>
            {/* <div className="carousel-outer" data-aos="fade-up">
              <div className="about-carousel">
                < TrainingTop/>
              </div>
            </div> */}
          </div>

          <figure className="image" data-aos="fade-right" style={{ display: "grid", justifyItems: "center", 
          paddingTop: '10px' }}>
            <Image
              width={400}
              height={400}
              src="/images/Training.jpg"
              alt="Training"
              style={{ borderRadius: '15px', marginTop: '20px'}}
            />
          </figure>
        {/* </div> */}
      </section>

      <section className="app-section">
        <div className="auto-container">
          <TrainingBody />
        </div>
      </section>

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;

