import Image from "next/image";
import Link from "next/link";

const AppSection = () => {
  return (
    <div className="row">
      <div className="image-column col-lg-6 col-md-12 col-sm-12" >
        <div className="bg-shape" style={{paddingTop:'30px'}}></div>
        <figure className="image" data-aos="fade-right" style={{paddingTop:'10px'}}>
          <Image
            width={477}
            height={556}
            src="/images/resource/banner-img-3.png"
            alt="About"
          />
        </figure>
      </div>
      {/* <!-- Image Column --> */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2 style={{paddingTop:'10px'}}>
              About Us
            </h2>
            <div className="text" style={{ textAlign: "justify" }}>
              <span> Future Fit International is a trusted partner, working across borders to match ambitions and skills
              with education and job opportunities. Our passion is to empower individuals and organizations. 
              Because we understand the challenges that individuals face in their pursuit of success and what 
              businesses and educational institutions strive for, we have built a thriving ecosystem where these driving  
              forces can converge and flourish. </span>

              <p> We work with the following: 
              1. Canadian employers and all levels of government and industry to help backfill skilled positions that 
                 have not been filled by Canadians.
              2. Foreign-trained workers to identify opportunities to work in Canada. 
              3. Canadian colleges and universities looking to grow their international student populations.
              4. Foreign-based students hoping to pursue their educational ambitions in Canada. </p> <p></p>

              <p> We provide an end-to-end experience for all of our clients: foreign students, foreign-trained workers, 
              Canadian companies, and colleges and universities. These services include: pre-screenings, interviews, 
              credentials and skills verification, document preparation services, visa acquisition, work visas, work 
              and school applications, company screening, immigration workshops and seminars, government liaison services,
              language testing, orientation and training, travel and settlement processes, and more. </p> <p></p>

              <p> FFI is currently active in Canada and Ethiopia. We will be expanding to Ghana and Tanzania in 2024. </p>

              <p> Address: 168 Charlotte Street, Ottawa, Ontario K1N 8K6" </p>
            </div>
          </div>
          <div className="sec-title">
              {/* <h3>Why Choose Us?</h3> */}
              {/* <div className="text" >
              <ul className="list-style-one" style={{alignContent:'start'}}>
                    <li>We have extensive experience in talent management</li>
                    <li>We have built an extensive global network</li>
                    <li>We promote diversity & inclusivity</li>
                    <li>We support community-focused collaboration</li>
                    </ul>
              </div> */}
              {/* <a href="/about" className="theme-btn btn-style-one bg-blue">
                <span className="btn-title" >Learn More</span>
              </a> */}
            </div>

          {/* <a href="/about" className="theme-btn btn-style-one bg-blue">
            <span className="btn-title" style={{ height: '25px' }}>Learn More</span>
          </a> */}
          {/* <div className="mt-20">
            <Link
              href="/about"
              className="theme-btn"
            >
              Learn More
            </Link>
          </div> */}
          {/* <div className="download-btn">
            <a href="#">
              <Image
                width={210}
                height={60}
                src="/images/icons/apple.png"
                alt="icon"
              />
            </a>
            <a href="#">
              <Image
                width={210}
                height={60}
                src="/images/icons/google.png"
                alt="icon"
              />
            </a>
          </div> */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AppSection;
