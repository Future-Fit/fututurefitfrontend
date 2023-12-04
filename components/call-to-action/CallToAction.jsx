import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h3>Students?</h3>
              <div className="text" >
              <ul className="list-style-one" >
                    <li>Experienced in talent management</li>
                    <li>Extensive global network</li>
                    <li>Promote diversity & inclusivity</li>
                    <li>Support community-focused collaboration</li>
                    </ul>
              </div>
              <a href="/about" className="theme-btn btn-style-one bg-blue">
                <span className="btn-title" >Learn More</span>
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
