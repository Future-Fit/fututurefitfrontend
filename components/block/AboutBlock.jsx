import GlobalConfig from "@/Global.config";
import Image from "next/image";

const AboutBlock = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/images/index-14/icons/vision.svg",
      title: "Our Vision",
      color: GlobalConfig.LogoBlu,
      text: `To be the most effective and trusted global connector for business and education.`,
    },
    {
      id: 2,
      icon: "/images/index-14/icons/mission.svg",
      title: "Our Mission",
      color: "orange",
      text: `To match skills and ambitions with job and education opportunities by working across borders.`,
    },
    {
      id: 3,
      icon: "/images/index-14/icons/objective.svg",
      title: "Our Goal & Objectives",
      color: "red",
      text: `....`,
    },
    {
      id: 4,
      icon: "/images/index-14/icons/list-of-items.svg",
      title: "Our Values",
      color: "green",
      text: `....`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-6" key={item.id}>
          <div className="icon-side -type-1">
            {/* <div className={`icon-wrap ${item.bgColor}`}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                width: '20px',
                height: '20px',
                backgroundColor: '#ff0000',
                borderRadius: '50%'
              }}></div> {}

              <Image width={50} height={50} src={item.icon} alt="image" />
            </div> */}

            <div>
              <Image style={{fill: item.color}} width={50} height={50} src={item.icon} alt="image" />
            </div>

            <div className="content">
              <h4 style={{color: GlobalConfig.LogoOrg}} className="title">{item.title}</h4>
              <p style={{color: GlobalConfig.LogoBlu}} className="text">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutBlock;
