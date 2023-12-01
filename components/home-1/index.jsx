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


      {/* <section className="app-section" style={{ background: '#3B578E', padding: '30px 10px 30px 10px' }}>
        <div className="auto-container" style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '20%',
              overflow: 'hidden',
              margin: '0 auto', // Center horizontally
              padding: '100px', // Padding to create space for the content
            }}
          > */}
            <Hero10 />
          {/* </div>
        </div>
      </section> */}



      {/* <!-- End Hero Section --> */}
      {/* <section className="app-section" style={{ background: '#3B578E', padding: '50px 0' }}>
        <div className="auto-container" style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '20%',
              overflow: 'hidden',
              margin: '0 auto', // Center horizontally
              backgroundColor: '#ffffff',
              padding: '100px', // Padding to create space for the content
            }}
          >
            <AppSection />
          </div>
        </div>
      </section> */}
      <section className="app-section">
        <div className="auto-container">
        <div style={{ borderRadius: '30%', overflow: 'hidden' }}>
          <AppSection />
        </div>
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
            <h2 style={{ color: '#fff' }}>Featured Jobs</h2>
            <div style={{ color: '#fff' }} className="text">
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
