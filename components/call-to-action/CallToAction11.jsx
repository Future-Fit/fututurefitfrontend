import Link from "next/link";

const CallToAction11 = () => {
  return (
    <>
      <section className="subscribe-section-two -type-5">
        <div className="auto-container" data-aos="fade-up">
          <div
            className="background-image"
            style={{ backgroundImage: "url(/images/index-17/cta/bg.png)" }}
          ></div>
          {/* End bg-image */}

          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 offset-lg-1">
              <div className="sec-title pb-16">
                <h2 className="">Why Choose Us</h2>
                <div className="text" style={{ textAlign: "justify" }}>

                  <ul className="list-style-one">
                    <li>Experienced in talent management.</li>
                    <li>Extensive global network.</li>
                    <li>Promoting diverse inclusivity.</li>
                    <li>Community-focused collaboration.</li>
                    </ul>

                </div>

                <div className="mt-20">
                  <Link
                    href="/job-list-v6"
                    className="theme-btn"
                  >
                   Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End auto-container */}
      </section>
    </>
  );
};

export default CallToAction11;
