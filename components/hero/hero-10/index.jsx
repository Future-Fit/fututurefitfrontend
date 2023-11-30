import SearchForm3 from "../../common/job-search/SearchForm3";
import JobCategorie4 from "../../job-categories/JobCategorie4";
import HeroSliderGallery from "./HeroSliderGallery";

const index = () => {

  const carouselStyle = {
    border: '22px solid #000', // Adjust the color and thickness as needed
    padding: '100px', // Optional, for some space inside the border
    margin: '10px' // Optional, for space outside the border
  };
  return (
    <section className="banner-section-ten">

        <HeroSliderGallery />
      
      {/* <HeroSliderGallery /> */}
      {/* End slider gallery */}

      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-aso-delay="500" data-aos="fade-up" style={{ marginTop: '-10px', marginBottom: '15px' }}>
            <h3 style={{ fontWeight: '600' }}>Welcome to Future Fit International</h3>
            <h2 style={{ color: "#b2dfdb" }}> Your Gateway to the Future!</h2>
            <br />
            <h4 style={{ color: "#fff" }}> Explore Opportunties and Turn Your Ambitions into Reality. </h4>
            {/* <br/> */}
            {/* <h4 style={{ color: "#fff" }}> Search for your opportunity below.  </h4> */}
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
