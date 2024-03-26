import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const FeaturedIndustriesDetails = () => {

  return (
    <div className="auto-container" style={{
      display: "grid", justifyContent: "center", alignContent: "center",
    }}>
      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: "0 20px 20px 20px"
      }}>
        <div className="list" >
          <div style={{ display: "grid", justifyContent: "center" }}>
            <Image
              width={60}
              height={60}
              src="/images/icons/Healthcare-icon.svg"
              alt="Healthcare"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
            Healthcare</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada spends a substantial portion of its GDP on healthcare services. The industry
            hires a large number of workers ranging from doctors to home care providers. And, 
            the demand for healthcare workers has been growing due to a variety of factors, 
            including an aging population, the expansion of healthcare services, and the ongoing 
            impacts of the COVID-19 pandemic. As a result, there is a healthcare worker shortage 
            with multifaceted issues causing it. Challenges in recruitment and retention, including 
            competitive compensation, work-life balance, and professional development opportunities, 
            are significant factors. Rural and remote areas face even greater difficulties in attracting 
            healthcare professionals, leading to disparities in healthcare access and quality.
          </h4>
          <ul className="list-style-five" style={{ textAlign: "left" }}>
            <li>Not finding the right opportunities dddd d d d d d d d d d d d d d d</li>
            <li>Lack of understanding the job market</li>
            <li>Lack of language/skills proficiency </li>
            <li>Credentials not being recognized</li>
            <li>Lack of access to professional support </li>
            <li>Not having the proper permits</li>
          </ul>
          <div style={{ textAlign: "center", paddingTop: "10px" }}>
            <span style={{ color: GlobalConfig.Fgr1Clr }}>
              <strong> We are here to help!</strong></span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="outer-column col-lg-12 col-md-12 col-sm-12" style={{ order: 0, display: "grid", justifyContent: "center", alignContent: "center" }}>
          <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
            <div className="list" style={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              width: "fit-content", height: "fit-content", padding: "0 20px 20px 20px"
            }}>
              <div style={{ display: "grid", justifyContent: "center" }}>
                <Image
                  width={60}
                  height={60}
                  src="/images/icons/Healthcare-icon.svg"
                  alt="Healthcare"
                  style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
                />
              </div>
              <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
                Healthcare</h4>
              <ul className="list-style-five" style={{ textAlign: "left" }}>
                <li>Not finding the right opportunities dddd d d d d d d d d d d d d d d</li>
                <li>Lack of understanding the job market</li>
                <li>Lack of language/skills proficiency </li>
                <li>Credentials not being recognized</li>
                <li>Lack of access to professional support </li>
                <li>Not having the proper permits</li>
              </ul>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                <span style={{ color: GlobalConfig.Fgr1Clr }}>
                  <strong> We are here to help!</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
        <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
          color: "white",
          backgroundColor: GlobalConfig.LogoBlu
        }}>
          <span className="btn-title"><strong>Sign Up Today!</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default FeaturedIndustriesDetails;
