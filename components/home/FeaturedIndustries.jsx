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
      title: "Engineering/High-tech/IT",
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
      icon: "/images/icons/Construction-icon.svg",
      title: "Construction/Skilled Trade",
      linkPath: ""

    },
    {
      id: 6,
      icon: "/images/icons/Hospitality-icon.svg",
      title: "Hospitality/Services",
      linkPath: ""

    }
  ];

  return (
    <>

      <section className="job-section-two" style={{ padding: "40px 20px" }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 >Featured Industries</h2>
            <div className="text">
              While these are typical industries Canadian employers hire from  
              the international workfoce, we serve clients in other industries as well.
            </div>
          </div>

          <div className="row">
            {blockContent.slice(0, 6).map((item) => (
              <div className="job-block-four col-lg-4 col-md-6 col-sm-12" key={item.id}>
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
      </section >
    </>
  );
};

export default FeaturedIndustries;
