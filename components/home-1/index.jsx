import Hero10 from "../hero/hero-10"
import Block1 from "../block/Block1";
import DefaulHeader2 from "../header/DefaulHeader2";
import JobFeatured4 from "../job-featured/JobFeatured4";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import Link from "next/link";
import CallToAction from "../call-to-action/CallToAction";
import AppSection from "../app-section/AppSection";
import FooterDefault from "../footer/common-footer";


const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* <Header /> */}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero10 />
      {/* <!-- End Hero Section --> */}
      <section className="app-section">
        <div className="auto-container">
          <AppSection />
        </div>
      </section>
      <CallToAction />

      <section className="work-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Services</h2>
            <div className="text">Job for anyone, anywhere</div>
          </div>
          {/* End sec-title */}
          <div className="row" data-aos="fade-up">
            <Block1 />
          </div>

          <div className="btn-box text-center" style={{ marginBottom: '20px', marginTop: '20px' }}> {/* Updated with 'text-center' class */}
            <Link href="/service" className="theme-btn btn-style-one bg-blue">
              <span className="btn-title">Learn More</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      <section className="job-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 style={{color: '#fff'}}>Featured Jobs</h2>
            <div  style={{color: '#fff'}} className="text">
              Jobs that are trending and highly in demand
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <JobFeatured4 />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list-v6"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
