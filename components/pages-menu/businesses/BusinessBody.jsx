import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const BusinessBody = () => {
  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="content-column col-md-8 col-sm-12" style={{ order: 0 }}>
            <div className="sec-title">
              <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                Services We Offer</h4>
              <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1em", textAlign: "justify" }}>
                <span>
                  In today's competitive world, Canadian businesses need to fill positions quickly.
                  When they can't do so locally, businesses have to look for talent globally.
                  Here is where FFI's on the ground presence and global network comes in handy. For
                  our Canadian business clients, we offer a comprehensive suite of services tailored
                  to your needs.
                  <br /><br />
                  We have built a dedicated business portal where you can connect with skilled
                  workforce from our international pool of resources. But, we don't stop there.
                  We will actually do all the hard work for you to narrow down the list of
                  applicants by identifying best matches based on your recruiting criteria.
                  <br /><br />
                  <span>We serve our business clients in the following industries:</span>
                  <ul className="list-style-five" style={{
                    color: GlobalConfig.BgrClr1,
                    textAlign: "justify"
                  }}>
                    <li>Healthcare</li>
                    <li>Engineering/High-Tech/IT</li>
                    <li>Manufacturing</li>
                    <li>Construction</li>
                    <li>Transportation</li>
                    <li>Other Skilled Services</li>
                  </ul>
                  <br />
                  For more information, please contact us today.
                  <br /><br />
                </span>
              </div>
            </div>
          </div>
          <div className="image-column col-md-4 col-sm-12" style={{
            height: "fit-content", marginTop: "30px", display: "grid", justifyItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: "5px", paddingBottom: "20px"
          }} >
            <h4 style={{
              textAlign: "center", paddingTop: "20px", fontWeight: "600",
              color: GlobalConfig.LogoOrg
            }}>
              Are These Familiar to You?</h4>
            <ul className="list-style-five">
              <li>Not knowing where to start to recruit globally</li>
              <li>Not knowing local recruiting regulations </li>
              <li>Too many applicants without the required skills</li>
              <li>Documentations need translation</li>
            </ul>
            <div> <br />
              <span style={{color: GlobalConfig.Fgr1Clr}}> We can solve these and other problems for you!</span>
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
