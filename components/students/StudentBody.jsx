import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Tab } from "bootstrap";
import shopItems from "@/data/shopItems";
import { addCart } from "@/features/shop/shopSlice";

const StudentBody = () => {
  const dispatch = useDispatch();

  // add to cart
  const addToCart = (id) => {
    const item = shopItems?.find((item) => item.id === id);
    dispatch(addCart({ product: item }));
  };

  // const studentService = [
  //   {
  //     id: 1, text: "Search Institutions",
  //     textDetail: "Search Institutions",
  //     link: "/"
  //   },
  //   {
  //     id: 2, text: "Search Scholarships/Financial Aid",
  //     textDetail: "Search Scholarships/Financial Aid",
  //     link: "/"
  //   },
  //   {
  //     id: 3, text: "Gather & Package Application Material",
  //     textDetail: "Gather/Package Application Material",
  //     link: "/"
  //   },
  //   {
  //     id: 4, text: "Obtain Permits",
  //     textDetail: "Obtain Permits",
  //     link: "/"
  //   },
  //   {
  //     id: 5, text: "Pre-Arrival/After-Arrival Support",
  //     textDetail: "Pre-Arrival/After-Arrival Support",
  //     link: "/"
  //   }
  // ];

  useEffect(() => {
    studentService.forEach(partner => {
      // measureText(partner.id);
    });
  }, []);

  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="content-column col-md-8 col-sm-12" style={{ order: 0 }}>
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                  Services We Offer...</h4>
                <div className="text" style={{ fontSize: "1em", color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
                  <span>
                    FFI provides key services to international students seeking to study in Canada.
                    Starting from providing extensive information about Canadian colleges and universities
                    and their diverse range of programs, to guiding students through the entire
                    application process, to searching for scholarships based on your choice of study,
                    to helping with travel and relocation services, FFI will support you achieve your
                    dream of studying in Canada. <br /><br />
                    Service areas we offer to students include: <br />

                    <ul className="list-style-five" >
                      <li><strong>Search Institutions:</strong><br />Conduct extensive research on your behalf
                        for suitable university/college choices based on your program of choice,
                        location, and other criteria. We will advise you on which intake date is
                        appropriate for you.</li>
                      <li><strong>Search Scholarships/Financial Aid:</strong><br />Perform research
                        for you on scholarships and other financial aid packages available for international
                        students based on your achievements, program of choice, etc.</li>
                      <li><strong>Gather & Package Application Material:</strong><br />We will find out all
                        requirements that must be fulfilled for an application and gather and package the
                        necessary documents for you. We also check to make sure that you have completed all
                        requirements and, finally, remind you to submit the application on time.</li>
                      <li><strong>Obtain Permits:</strong><br />International students will require
                        appropriate permits to study in Canada, including provincial attestation letter (PAL)
                        and study permit. You may also need a vtudent visa. We can help you figure this out.</li>
                      <li><strong>Pre-Arrival/After-Arrival Support:</strong><br />We provide extended
                        services to students regarding travel, relocation and family support for
                        international students and their families.</li>
                    </ul>
                    <br />
                    Please select services to learn about prices and our package deals.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="image-column col-md-4 col-sm-12" style={{
            width: "fit-content", height: "fit-content", marginTop: "30px"
          }} >
            <div className="item-one-list" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: "5px",
            }}>
              <h4 style={{ textAlign: "center", paddingTop: "10px", fontWeight: "600", color: GlobalConfig.LogoOrg }}>
                Select Services to Order:</h4>
              <div className="sec-title" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify" }}>
                {shopItems.filter(item => item.category === "Student Service").map((item) => (
                  <ul className="list-style-five" >
                    <a href={`/shop/shop-single/${item.id}`} rel="noreferrer noopener">
                      <li>{item.title} </li>
                    </a>
                    {/* <li>{item.textDetail} </li> */}
                  </ul>
                ))}
              </div>
            </div>
            <div className="item-two-table">
              <table style={{ color: GlobalConfig.Fgr1Clr }}>
                <tr style={{ backgroundColor: GlobalConfig.LogoOrg }}> <th>Intake </th> <th>Deadline</th> </tr>
                <tr> <td>January</td> <td>August - September</td> </tr>
                <tr> <td>May</td> <td>January - February</td> </tr>
                <tr> <td>September</td> <td>February - April</td> </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="content-column col-100 col-md-12 col-sm-12">
          {/* <div className="inner-column" data-aos="fade-left"> */}
          <div className="inner-column">
            <div className="sec-title">
              <div className="text" style={{
                color: GlobalConfig.Fgr1Clr, fontSize: "1em",
                textAlign: "justify"
              }}>
                {/* <span> <strong> Company Structure: </strong></span> <br /> */}
                <span>
                  From providing research on colleges and universtities to submitting applications to
                  supporting students as they settle into their new environment, FFI is committed to
                  enabling international students with everything they need as they embark on their
                  education pursuit in Canada. For more detail, please sign up today.
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