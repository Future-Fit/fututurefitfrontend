import Hero10 from "../hero/hero-10"
import Block1 from "../block/Block1";
import DefaulHeader2 from "../header/DefaulHeader2";
import JobFeatured4 from "../job-featured/JobFeatured4";
import CallToAction2 from "../call-to-action/CallToAction2";
import Blog from "../blog/Blog";
import CallToAction3 from "../call-to-action/CallToAction3";
import Footer from "./Footer";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import Link from "next/link";
import CallToAction11 from "../call-to-action/CallToAction11";
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
              <span className="btn-title" style={{ height: '25px' }}>Learn More</span>
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
              Know your worth and find the job that qualify your life
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
              <span className="btn-title" style={{ height: '25px' }}>Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      {/* <section className="features-section">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Featured Cities</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <FeaturedBlock />
          </div>
        </div>
      </section> */}
      {/* <!-- End Features Section --> */}


      {/* <!-- End Call To Action --> */}

      {/* <section className="candidates-section">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Featured Candidates</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            <div className="candidates-carousel default-dots">
              <Candidates />
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- End Candidates Section --> */}

      {/* <section className="news-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section> */}

      {/* <!-- End News Section --> */}

      {/* <CallToAction10 /> */}
      {/* <!-- End Call To Action --> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
