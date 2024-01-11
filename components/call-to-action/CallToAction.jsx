import Image from "next/image";
import Image_1 from '../../public/images/resource/image-1.png'
const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h3>Why Choose Us?</h3>
              <div className="text" >
              <ul className="list-style-one" >
                    <li>We are experienced in talent management</li>
                    <li>We have built an extensive global network</li>
                    <li>We promote diversity & inclusivity</li>
                    <li>We support community-focused collaboration</li>
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
            style={{ backgroundImage: Image_1 }}
          >
            <figure className="image">
              <Image
                width={417}
                height={328}
                src={Image_1}
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
