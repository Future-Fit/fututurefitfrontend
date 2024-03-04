import Link from "next/link";
import jobFeatured from "../../data/job-featured";
import Image from "next/image";
import GlobalConfig from "@/Global.config";

const FeaturedJobs = () => {
  return (
    <>

      <section className="job-section-two" style={{ padding: "40px 20px" }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 >Sample Job Opportunities</h2>
            {/* <div className="text">
              Trending and in high demand
            </div> */}
          </div>

          <div className="row">
            {jobFeatured.slice(0, 6).map((item) => (
              <div
                className="job-block-four col-lg-4 col-md-6 col-sm-12"
                key={item.id}
              >
                <div className="inner-box">
                  <Link href="/contact">
                    <h4 style={{ color: GlobalConfig.Fgr1Clr }}>
                      {item.jobTitle}
                    </h4>
                    <div className="location">
                      <span className="icon flaticon-map-locator"></span>
                      {item.location}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="btn-box">
            <Link href="/contact"
              className="theme-btn btn-style-one bg-blue" style={{ backgroundColor: GlobalConfig.LogoOrg }}
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section >
    </>
  );
};

export default FeaturedJobs;
