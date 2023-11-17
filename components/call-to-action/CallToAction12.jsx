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
                At FFI, our passion is empowering individuals, businesses and institutions by establishing and growing a thriving, diverse and professional ecosystem where great skills, talent and ambitions meet unfulfilled business opportunities – be it in availing incredible career opportunities for career seekers or those looking for short-term gigs to finding international educational and vocational institutions for students to hosting and offering training programs that provide targeted skills development. Our global reach and expertise uniquely gives us the insight and advantage to intimately understand the challenges that our clients face in the pursuit of their aspirations and desire to fulfill their business needs and opportunities
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
