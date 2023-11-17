import Link from "next/link";

const CallToAction12 = () => {
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
                <h2 className="">About FFI</h2>
                <div className="text" style={{ textAlign: "justify" }}>
                  At FFI, our passion is enabling individuals, businesses, and institutions to make great connections.
                  Our ever-expanding global reach and expertise gives us the ability to provide growing networking and matching
                  opportunities for our business clients, career seekers, and international students.
                  With years of experience in the fields of talent management, international business, and education,
                  let us be your partner in the pursuit of your aspirations.
                </div>

                {/* <div className="mt-20">
                  <Link
                    href="/about"
                    className="theme-btn"
                  >
                    Learn More
                  </Link>
                </div> */}
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

export default CallToAction12;
