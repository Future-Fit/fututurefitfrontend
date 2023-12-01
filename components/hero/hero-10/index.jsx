import SearchForm3 from "../../common/job-search/SearchForm3";
import JobCategorie4 from "../../job-categories/JobCategorie4";
import HeroSliderGallery from "./HeroSliderGallery";

const index = () => {

  return (
    <section className="app-section" style={{ background: '#3B578E', paddingTop: '100px', paddingRight:'-100px !important' }}>
      <div className="auto-container" style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '0%',
            height: '100vh',
            overflow: 'hidden',
            margin: '0 auto',
            padding: '20px',
          }}
        >
          <section className="banner-section-ten">
            <HeroSliderGallery />

            <div className="auto-container">
              <div className="cotnent-box">
                <div className="title-box" data-aso-delay="500" data-aos="fade-up" style={{ marginTop: '-10px', marginBottom: '15px' }}>
                  <h3 style={{ fontWeight: '600' }}>Welcome to Future Fit International</h3>
                  <h2 style={{ color: "#b2dfdb" }}> Your Gateway to the Future!</h2>
                  <br />
                  <h4 style={{ color: "#fff" }}> Explore Opportunties and Turn Your Ambitions into Reality. </h4>
                </div>

                <div className="job-search-form" data-aos-delay="700" data-aos="fade-up">
                  <SearchForm3 />
                </div>

                <div className="top-features">
                  <div className="row" data-aos-delay="700" data-aos="fade-up">
                    <JobCategorie4 />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default index;
