import Link from "next/link";
import GlobalConfig from "@/Global.config";

const ServiceBody = () => {

  return (
    <div className="auto-container" >
      <div className="row">
        <div className="content-column col-100 col-md-12 col-sm-12">
          <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            <span>
              We provide a broad range of services to our clients. Our clients are grouped in two major categories:
              Business-to-Business (B2B) clients and Business-to-Customer (B2C) clients. Our B2B clients are
              primarily Canadian businesses/employers and academic institution. We use our global network of resources to
              support Canadian businesses to recruit skilled workers globally. Similarly, FFI supports Canadian
              colleges and universities acting as their agent to recruit international students. Our B2C clients
              are professionals residing outside of Canada seeking to enter the skilled labor workforce in Canada
              and international students who want to pursue their education in Canadian institutions.  <br /> <br />
            </span>
          </div>
          <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
            <div className="list" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px',
              width: "fit-content", height: "fit-content", padding: "20px 20px"
            }}>
              <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoOrg }}>
                Services for Employers</h4>
              <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
                <Link href="/service/businesses" className="theme-btn btn-style-one bg-blue" style={{
                  color: "white",
                  backgroundColor: GlobalConfig.LogoBlu
                }}>
                  <span className="btn-title"><strong>Learn More!</strong></span>
                </Link>
              </div>
            </div>
          </div>
         
          <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
            <div className="list" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px',
              width: "fit-content", height: "fit-content", padding: "20px 20px"
            }}>
              <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoOrg }}>
                Services for Colleges/Universities</h4>
              <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
                <Link href="/service/universities-colleges" className="theme-btn btn-style-one bg-blue" style={{
                  color: "white",
                  backgroundColor: GlobalConfig.LogoBlu
                }}>
                  <span className="btn-title"><strong>Learn More!</strong></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
            <div className="list" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px',
              width: "fit-content", height: "fit-content", padding: "20px 20px"
            }}>
              <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoOrg }}>
                Services for Job Seekers</h4>
              <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
                <Link href="/service/job-seekers" className="theme-btn btn-style-one bg-blue" style={{
                  color: "white",
                  backgroundColor: GlobalConfig.LogoBlu
                }}>
                  <span className="btn-title"><strong>Learn More!</strong></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
            <div className="list" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px',
              width: "fit-content", height: "fit-content", padding: "20px 20px"
            }}>
              <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoOrg }}>
                Services for Students</h4>
              <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
                <Link href="/service/students" className="theme-btn btn-style-one bg-blue" style={{
                  color: "white",
                  backgroundColor: GlobalConfig.LogoBlu
                }}>
                  <span className="btn-title"><strong>Learn More!</strong></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
            <div className="list" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px',
              width: "fit-content", height: "fit-content", padding: "20px 20px"
            }}>
              <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoOrg }}>
                Training & Other Services</h4>
              <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
                <Link href="/service/training" className="theme-btn btn-style-one bg-blue" style={{
                  color: "white",
                  backgroundColor: GlobalConfig.LogoBlu
                }}>
                  <span className="btn-title"><strong>Learn More!</strong></span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default ServiceBody;