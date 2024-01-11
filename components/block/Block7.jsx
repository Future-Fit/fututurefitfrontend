import Image from "next/image";
import Objective from '../../public/images/objective.jpeg'


const Block7 = () => {
  const blockContent = [
    {
      id: 1,
      icon: Objective,
      title: "Objective",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
    {
      id: 2,
      icon: Objective,
      title: "Mission",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
    {
      id: 3,
      icon: Objective,
      title: "Vision",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="work-block -type-3 mb-0">
            <div className="inner-box">
              <div className="icon-wrap -green">
                {/* <span className={`icon ${item.icon}`}></span> */}
                <Image
                  alt="avatar"
                  className="thumb"
                  src={Objective}
                  width={100}
                  height={60}
                  color="#fff"
                  style={{borderRadius: '10px'}}
                />
              </div>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block7;
