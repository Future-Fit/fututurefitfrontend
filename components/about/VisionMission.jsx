'use client'
import GlobalConfig from "@/Global.config";
import Image from "next/image";
import Slider from "react-slick";
import aboutContent from "./VisionContent";

const VisionMission = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    center: true,
  };

  return (
    <>
      {/* Set margin-top to 0 to remove the top margin of the dots in the carousel*/}
      <style jsx global>{`
          .slick-dots {
            margin-top: 0;
          }
          .inner-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .sec-title {
            margin-top: 10px;
          }
          .list-style-five {
            padding: 0;
            list-style-type: none;
            text-align: left;
          }      
          `}</style>

      <Slider {...settings} autoplaySpeed={10000} fade={true} arrows={false}>
        {aboutContent.slice(0, 4).map((item) => (
          <div className="vision-mission-block" key={item.id}>
            <div className="inner-box" style={{ padding: "0% 3%" }}>
              <Image
                width={50}
                height={50}
                src={item.icon}
                alt={item.alt}
              />
              <h4 className="title" style={{ color: item.color, fontWeight: "800" }}>{item.title}</h4>
              <h4 className="text" style={{ color: GlobalConfig.Fgr1Clr, fontWeight: "800", fontSize: "16px", fontFamily: GlobalConfig.Fnt1Fam }}>{item.text}</h4>
              <div className="sec-title" style={{ color: GlobalConfig.Fgr1Clr, fontWeight: "800", fontSize: "16px", fontFamily: GlobalConfig.Fnt1Fam }}>
                {item.list1 || item.list2 || item.list3 || item.list4 ? (
                  <ul className="list-style-five">
                    {item.list1 && <li>{item.list1}</li>}
                    {item.list2 && <li>{item.list2}</li>}
                    {item.list3 && <li>{item.list3}</li>}
                    {item.list4 && <li>{item.list4}</li>}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </Slider >
    </>
  );
};

export default VisionMission;
