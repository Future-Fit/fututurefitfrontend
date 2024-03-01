import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const BusinessBody = () => {
  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="content-column col-md-8 col-sm-12" style={{ order: 0 }}>
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                  Services We Offer...</h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "16px", textAlign: "justify" }}>
                  <span>
                    In today's competitive world, skilled labor is highly in demand and businesses
                    in need of filling positions that couldn't be filled locally have to look for 
                    talent in global markets where they may not have domain expertise. Here is 
                    where FFI's on the ground experience and global network comes in handy. For 
                    our Canadian business clients, we offer a comprehensive suite of services that 
                    are tailored to solve the challenges you face.

                    We have built a dedicated business portal where you can connect with skilled 
                    workforce from our international pool of resources. But, we don't stop there. 
                    FFI will actually do all the hard work for you so that we can identify 
                    potential applicants who best match all of your criteria.
                    <br /><br />                      
                    For more information, please contact us. 
                    <br /><br />
                           </span>
                </div>
              </div>
            </div>
          </div>
          <div className="image-column col-md-4 col-sm-12" style={{
            display: "grid", justifyItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: "5px",
          }} >
            {/* <figure className="image" data-aos="fade-right"> */}
            {/* <Image
              width={400}
              height={400}
              src="/images/collaboration.jpeg"
              alt="About"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            /> */}
            {/* </figure> */}

            <h4 style={{ textAlign: "center", paddingTop: "10px", fontWeight: "600", color: GlobalConfig.LogoOrg }}>
              Services for Employers:</h4>
            <div className="sec-title" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify" }}>
              <ul className="list-style-five" >
                <li>Access to talent from international markets</li>
                <li>Matching service to ensure optimal fit</li>
                <li>Training to upgrade and/or add additional skills</li>
                <li>Translation, document handling, related services</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-column col-100 col-md-12 col-sm-12">
          {/* <div className="inner-column" data-aos="fade-left"> */}
          <div className="inner-column">
            <div className="sec-title">
              <div className="text" style={{ color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
                {/* <span> <strong> Company Structure: </strong></span> <br /> */}
                <span>
                  FFI's employer portal is the best place to start your global talent acquisition journey.
                  Come work with us and we will make sure that we will exceed your expectations.
                </span>
              </div>
            </div>
            <div className="sec-title">
            </div>
          </div>
        </div>
        <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
            color: "white",
            backgroundColor: GlobalConfig.LogoBlu
          }}>
            <span className="btn-title"><strong>Business Portal</strong></span>
          </Link>
        </div>
      </div >
    </div>
  );
};

export default BusinessBody;
