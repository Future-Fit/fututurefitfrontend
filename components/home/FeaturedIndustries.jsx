import Link from "next/link";
import Image from "next/image";
import GlobalConfig from "@/Global.config";

const FeaturedIndustries = () => {

  const blockContent = [
    {
      id: 1,
      icon: "/images/icons/Healthcare-icon.svg",
      title: "Healthcare",
      linkPath: ""
    },
    {
      id: 2,
      icon: "/images/icons/Eng-Htech-IT-icon.svg",
      title: "Engineering/IT",
      linkPath: ""
    },
    {
      id: 3,
      icon: "/images/icons/Mfg-icon.svg",
      title: "Manufacturing",
      linkPath: ""
    },
    {
      id: 4,
      icon: "/images/icons/Transportation-icon.svg",
      title: "Transportation/Logistics",
      linkPath: ""
    },
    {
      id: 5,
      icon: "/images/icons/Aviation-icon.svg",
      title: "Aviation",
      linkPath: ""
    },
    {
      id: 6,
      icon: "/images/icons/Construction-icon.svg",
      title: "Construction",
      linkPath: ""
    },
    {
      id: 7,
      icon: "/images/icons/Hospitality-icon.svg",
      title: "Hospitality/Services",
      linkPath: ""

    },
    {
      id: 8,
      icon: "/images/icons/Skilled-trade-icon.svg",
      title: "Skilled Trade",
      linkPath: ""

    }
  ];

  return (
    <>
      <section className="job-section-two" style={{ padding: "40px 20px" }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 >Featured Industries</h2>
            <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em" }}>
              While Canadian businesses typically hire international workers in
              these industries, we serve clients in other industries as well.
            </div>
          </div>

          <div className="row">
            {blockContent.slice(0, 8).map((item) => (
              <div className="job-block-four col-lg-3 col-md-3 col-sm-6" key={item.id}>
                <div className="inner-box">
                  <Link href="">
                    <h4 style={{ color: GlobalConfig.Fgr1Clr }}>
                      {item.title}
                    </h4>
                  </Link>

                  <Image
                    width={60}
                    height={60}
                    src={item.icon}
                    alt=""
                  />

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
          <Link href="/businesses" className="theme-btn btn-style-one bg-blue" style={{ color: "white", backgroundColor: GlobalConfig.BgrClr1 }}>
            <span className="btn-title"><strong>Learn More</strong></span>
          </Link>
        </div>
      </section >
    </>
  );
};

export default FeaturedIndustries;
