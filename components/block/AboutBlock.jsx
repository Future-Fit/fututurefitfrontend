import GlobalConfig from "@/Global.config";
import Image from "next/image";

const AboutBlock = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/images/index-14/icons/vision.svg",
      title: "Our Vision",
      color: GlobalConfig.LogoBlu,
      text: `Positively impact lives by making dreams come true.`,
    },
    {
      id: 2,
      icon: "/images/index-14/icons/mission.svg",
      title: "Our Mission",
      color: "orange",
      text: `Find the right jobs and education for workers and students by diligently matching 
      skills and ambitions with opportunities across borders.`,
    },
    {
      id: 3,
      icon: "/images/index-14/icons/objective.svg",
      title: "Our Goals & Objectives",
      color: "red",
      text: `1. To be the agents of change in peoples' lives by facilitating the process for 
      skilled workers to connect with legitimate Canadian employers in need of their expertise.
      2. To make students realize their dreams of pursuing their education in suitable Canadian universities 
      and colleges by helping them navigate through the application and admissions process.
      3. To ensure that both newly-hired skilled workers and first-time international students experience 
      a smooth transition to life in Canada, including assistance with travel, housing, and cultural
      integration.
      4. To foster partnerships with Canadian businesses and educational institutions to help them identify 
      and promote opportunities appropriate for international markets, supporting the country's global economic 
      competitiveness and higher education institutions' academic excellence and diversity.`,
    },
    {
      id: 4,
      icon: "/images/index-14/icons/list-of-items.svg",
      title: "Our Values",
      color: "green",
      text: `1. Integrity  2.Inclusivity  3.Diversity  4.Transparency  5.Continuous Improvement`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-6" key={item.id}>
          <div className="icon-side -type-1">
            <div>
              <Image style={{ fill: item.color }} width={50} height={50} src={item.icon} alt="image" />
            </div>

            <div className="content">
              <h4 style={{ color: GlobalConfig.LogoOrg }} className="title">{item.title}</h4>
              <p style={{ color: GlobalConfig.LogoBlu }} className="text">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutBlock;
