'use client'
import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardStudentsSidebar from "../../../header/DashboardStudentSidebar";
import BreadCrumb from "../../BreadCrumb";
import Resume from "./components";
import DashboardStudentsHeader from "../../../header/DashboardStudentsHeader";
import MenuToggler from "../../MenuToggler";
import FooterDefault from "../../../footer/common-footer";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('accessToken'); // Assuming you store accessToken in localStorage
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardStudentsHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardStudentsSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="My Resume!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>My Profile</h4>
                  </div>
                  {/* End widget-title */}

                  <div className="widget-content">
                    <Resume />
                  </div>
                  {/* End widget-content */}
                </div>
              </div>
              {/* End ls-widget */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <FooterDefault />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
