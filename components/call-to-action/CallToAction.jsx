import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h2>Why Choose Us</h2>
              <div className="text">
              <ul className="list-style-one">
                    <li>Experienced in talent management.</li>
                    <li>Extensive global network.</li>
                    <li>Promoting diverse inclusivity.</li>
                    <li>Community-focused collaboration.</li>
                    </ul>
              </div>
              <a href="/job-list-v6" className="theme-btn btn-style-one bg-blue">
                <span className="btn-title" style={{height:'25px'}}>Get Started</span>
              </a>
            </div>
          </div>
          {/* End .content-column */}

          <div
            className="image-column"
            style={{ backgroundImage: " url(images/resource/image-1.png)" }}
          >
            <figure className="image">
              <Image
                width={417}
                height={328}
                src="/images/resource/image-1.png"
                alt="resource"
              />
            </figure>
          </div>
          {/* End .image-column */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
