import GlobalConfig from "@/Global.config";
import Image from "next/image";

const AboutBlock = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="icon-side -type-1">
          <div>
            <Image className="icon" width={50} height={50} src="/images/index-14/icons/vision.svg" alt="image" />
          </div>
          <div className="content">
            <h4 className="title" style={{ color: GlobalConfig.LogoBlu }}>Our Vision</h4>
            <p style={{ color: GlobalConfig.LogoBlu }}>Positively impact lives by making dreams come true.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="icon-side -type-1">
          <div>
            <Image className="icon" width={50} height={50} src="/images/index-14/icons/mission.svg" alt="image" />
          </div>
          <div className="content">
            <h4 className="title" style={{ color: "orange" }}>Our Mission</h4>
            <p style={{ color: "orange" }}>Find the right jobs and education for workers and students by diligently matching skills and ambitions with opportunities across borders.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="icon-side -type-1">
          <div>
            <Image className="icon" width={50} height={50} src="/images/index-14/icons/objective.svg" alt="image" />
          </div>
          <div className="content">
            <h4 className="title" style={{ color: "red" }}>Our Goals & Objectives</h4>
            <ul className="list-style-four">
              <li>To be the agents of change in peoples' lives by facilitating the process for skilled workers to connect with legitimate Canadian employers in need of their expertise.</li>
              <li>To make students realize their dreams of pursuing their education in suitable Canadian universities and colleges by helping them navigate through the application and admissions process.</li>
              <li>To ensure that both newly-hired skilled workers and first-time international students experience a smooth transition to life in Canada, including assistance with travel, housing, and cultural integration.</li>
              <li>To foster partnerships with Canadian businesses and educational institutions to help them identify and promote opportunities appropriate for international markets, supporting the country's global economic competitiveness and higher education institutions' academic excellence and diversity.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="icon-side -type-1">
          <div>
            <Image className="icon" width={50} height={50} src="/images/index-14/icons/list-of-items.svg" alt="image" />
          </div>
          <div className="content">
            <h4 className="title" style={{ color: "green" }}>Our Values</h4>
            <ol className="list-style-one">
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