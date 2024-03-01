import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const StudentBody = () => {
  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="content-column col-md-8 col-sm-12" style={{ order: 0 }}>
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                  Services We Offer...</h4>
                <div className="text" style={{ fontSize: "14px", color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
                  <span>
                    FFI provides key services to international students seeking to study in Canada.
                    Starting from providing extensive information about Canadian colleges and universities
                    and their diverse range of programs, FFI helps students navigate through the entire
                    application process, supported by advisors who will provide guidance along the way.
                    Service areas we offer to students include: <br />

                    <ul className="list-style-five" >
                      <li>Search the right universities/colleges and matching of programs to students' interests </li>
                      <li>Searching for any available scholarships for students based on their programs of choice</li>
                      <li>Putting together students application package</li>
                      <li>Obtaining provincial attestation letter (as needed)</li>
                      <li>Getting study permit</li>
                      <li>Providing visa application and travel related services </li>
                      <li>Providing resources and guidance to settle students and their families in Canada</li>
                    </ul>
                    <br />
                    From providing research on colleges and universtities to submitting applications to
                    supporting students as they settle into their new environment, FFI is committed to
                    enabling international students with everything they need as they embark on their
                    education journey and pursuit of fulfilling their dreams in Canada.
                    <br /><br />
                    Please select the services you would like to learn more about and their prices from the list.
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
              List of Services for Students:</h4>
            <div className="sec-title" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify" }}>
              <ul className="list-style-five" >
                <li>1... </li>
                <li>2...</li>
                <li>3...</li>
                <li>4...</li>
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
                  From providing research on colleges and universtities to submitting applications to
                  supporting students as they settle into their new environment, FFI is committed to
                  enabling international students with everything they need as they embark on their
                  education journey and pursuit of fulfilling their dreams in Canada.
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
            backgroundColor: GlobalConfig.LogoOrg
          }}>
            <span className="btn-title"><strong>Sign Up with FFI</strong></span>
          </Link>
        </div>
      </div >
    </div>
  );
};

export default StudentBody;