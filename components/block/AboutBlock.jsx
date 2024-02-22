import GlobalConfig from "@/Global.config";
import Image from "next/image";

const AboutBlock = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="icon-side -type-1">
          <div>
            <Image className="icon" width={50} height={50} src="../images/index-14/icons/vision.svg" alt="image" />
          </div>
          <div className="content">
            <h4 className="title" style={{ color: GlobalConfig.LogoOrg }}>Our Vision</h4>
            <p style={{ color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam }}>
              Make peoples' dreams & ambitions a reality!</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="icon-side -type-1">
          <div>
            <Image className="icon" width={50} height={50} src="../images/index-14/icons/mission.svg" alt="image" />
          </div>
          <div className="content">
            <h4 className="title" style={{ color: GlobalConfig.LogoBlu }}>Our Mission</h4>
            <p style={{ color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam }}>
              Match skills and qualifications from across the globe with great job and education opportunities in Canada.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="icon-side -type-1">
          <div>
            <Image className="icon" width={50} height={50} src="../images/index-14/icons/objective.svg" alt="image" />
          </div>
          <div className="content">
            <h4 className="title" style={{ color: GlobalConfig.LogoBlu }}>Our Goals & Objectives</h4>
            <ul className="list-style-five" style={{ color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam }}>
              <li>Change the lives of workers by matching them with legitimate Canadian employers</li>
              <li>Realize dreams of students in pursuing their education in Canadian universities/colleges</li>
              <li>Assist workers and international students experience a smooth transition to life in Canada</li>
              <li>Foster partnerships with Canadian businesses and universities to help them identify and promote opportunities globally</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="icon-side -type-1">
          <div>
            <Image className="icon" width={50} height={50} src="../images/index-14/icons/list-of-items.svg" alt="image" />
          </div>
          <div className="content">
            <h4 className="title" style={{ color: GlobalConfig.LogoOrg }}>Our Values</h4>
            <ol className="list-style-five" style={{ color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam }}>
              <li>Integrity</li>
              <li>Inclusivity</li>
              <li>Diversity</li>
              <li>Transparency</li>
              <li>Continuous Improvement</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBlock;