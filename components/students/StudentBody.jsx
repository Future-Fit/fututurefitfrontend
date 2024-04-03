import Link from "next/link";
import GlobalConfig from "@/Global.config";
import shopItems from "@/data/shopItems";

const StudentBody = () => {

  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="content-column col-md-8 col-sm-12" style={{ order: 0 }}>
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <div className="text" style={{ fontSize: "1em", color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
                  <span>
                    FFI provides key services to international students seeking to study in Canada.
                    Starting from providing information about Canadian colleges and universities
                    and the range of programs offered, to guiding students through the application 
                    process, to searching for available scholarships, to helping with travel and 
                    relocation services, FFI will support you achieve your dream of studying in 
                    Canada. <br /><br />

                    Service areas we offer to students include: <br />

                    <ul className="list-style-five" >
                      <li><strong>Search Institutions:</strong><br />Conduct search based on your 
                      program of choice, location, and other criteria and advise you on which intake 
                      is appropriate for you.</li>
                      <li><strong>Search Scholarships/Financial Aid:</strong><br />Search scholarship 
                      opportunities available for international students based on your achievements, 
                      program of choice, etc.</li>
                      <li><strong>Gather & Package Application Material:</strong><br />Find out 
                      all requirements, package & check documents and help you submit the application.</li>
                      <li><strong>Obtain Permits:</strong><br />Determine and obtain permits 
                      that are required for you, including provincial attestation letter (PAL), study 
                      permit and student visa.</li>
                      <li><strong>Pre-Arrival/After-Arrival Support:</strong><br />Provide extended
                        services on travel, relocation and family support for students and their families.</li>
                    </ul>
                    <br />
                    Please select services to learn about prices and our package deals.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="outer-column col-md-4 col-sm-12" style={{ display: "grid", justifyContent: "center", marginTop: "2%" }}>
            <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
              <div className="list" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px',
                width: "fit-content", height: "fit-content", padding: "20px 20px"
              }}>
                <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoOrg }}>
                  Select Services to Order:</h4>
                <div style={{ color: GlobalConfig.BgrClr1, textAlign: "justify" }}>
                  {shopItems.filter(item => item.category === "Student Service").map((item) => (
                    <ul className="list-style-five" >
                      <a href={`/shop/shop-single/${item.id}`} rel="noreferrer noopener">
                        <li style={{textDecoration: "underline"}}>{item.title} </li>
                      </a>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            <div className="table" style={{ display: "grid", justifyContent: "center" }}>
              <div style={{ color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
                <h4 style={{ fontWeight: "600", color: GlobalConfig.Fgr1Clr, textAlign: "center",
              padding: "30px 0 10px 0" }}>
                  Typical Intakes in Canada</h4>
                <table>
                  <tr style={{ backgroundColor: GlobalConfig.LogoOrg, color: GlobalConfig.Fgr1Clr, textAlign: "center" }}>
                    <th>Intake&emsp;&emsp;</th> <th>Deadline</th> </tr>
                  <tr style={{ color: GlobalConfig.Fgr1Clr, textAlign: "center" }}> <td>January&emsp;&emsp;</td> <td>August - September</td> </tr>
                  <tr style={{ color: GlobalConfig.Fgr1Clr, textAlign: "center" }}> <td>May&emsp;&emsp;</td> <td>January - February</td> </tr>
                  <tr style={{ color: GlobalConfig.Fgr1Clr, textAlign: "center" }}> <td>September&emsp;&emsp;</td> <td>February - April</td> </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="content-column col-100 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="text" style={{
                  color: GlobalConfig.Fgr1Clr, fontSize: "1em",
                  textAlign: "justify"
                }}>
                  <span>
                    In Canada, admissions cycles are called intakes. There are three major intakes 
                    for international students - Fall, Winter and Summer. The Fall intake starts in 
                    September; it is the primary intake. Winter intake starts in January; it is the 
                    secondary intake. Finally, the Summer intake starts in May; it offers limited 
                    number of courses. Master degree programs, including MBA programs, have similar 
                    intakes. For more details, please sign up with FFI.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', 
          padding: '20px 0' }}>
            <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
              color: GlobalConfig.Fgr1Clr,
              backgroundColor: GlobalConfig.LogoOrg
            }}>
              <span className="btn-title"><strong>Sign Up with FFI</strong></span>
            </Link>
          </div>
        </div >
      </div>
    </div>
  );
};

export default StudentBody;