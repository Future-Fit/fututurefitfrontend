import SearchForm3 from "../../common/job-search/SearchForm3";
import JobCategorie4 from "../../job-categories/JobCategorie4";
import HeroSliderGallery from "./HeroSliderGallery";

const index = () => {
  return (
    <section className="banner-section-ten">
      <HeroSliderGallery />
      {/* End slider gallery */}

      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-aso-delay="500" data-aos="fade-up" style={{marginTop:'-110px'}}>
            <h3>Welcome to Future Fit International (FFI)</h3>
            <h4 style={{ color: "#fff" }}>Where Bridging Talent and Opportunities Across Canada is Our Specialty </h4>
            <br/>
            <h4 style={{ color: "#fff" }}>Find Your Dream Jobs</h4>
          </div>

          <div
            className="job-search-form"
            data-aos-delay="700"
            data-aos="fade-up"
          >
            <SearchForm3 />
          </div>
          {/* <!-- Job Search Form --> */}

          <div className="top-features">
            <div className="row" data-aos-delay="700" data-aos="fade-up">
              <JobCategorie4 />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}
        </div>
        {/* <!-- content box --> */}
      </div>
    </section>
  );
};

export default index;
