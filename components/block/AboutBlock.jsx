import Image from "next/image";
import Vision from '../../public/images/index-14/icons/1.svg'
import Mission from '../../public/images/index-14/icons/2.svg'
import Objectives from '../../public/images/index-14/icons/3.svg'
import Values from '../../public/images/index-14/icons/4.svg'

const AboutBlock = () => {
  const blockContent = [
    {
      id: 1,
      icon: Vision,
      title: "Our Vision",
      bgColor: "-purple",
      text: `A future in which all our customers' ambitions become reality!`,
    },
    {
      id: 2,
      icon: Mission,
      title: "Our Mission",
      bgColor: "-orange",
      text: `A trusted partner that connects jobseekers and students to opportunties across borders.`,
    },
    {
      id: 3,
      icon: Objectives,
      title: "Our Objectives",
      bgColor: "-red",
      text: `....`,
    },
    {
      id: 4,
      icon: Values,
      title: "Our Values",
      bgColor: "-green",
      text: `....`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-6" key={item.id}>
          <div className="icon-side -type-1">
            <div className={`icon-wrap ${item.bgColor}`}>
            <div style={{
              position: 'absolute',
              top: '-10px', /* Adjust as needed */
              right: '-10px', /* Adjust as needed */
              width: '20px', /* Size of the pin */
              height: '20px', /* Size of the pin */
              backgroundColor: '#ff0000', /* Color of the pin */
              borderRadius: '50%'
            }}></div> {/* Add this line for the pin */}

              <Image width={30} height={31} src={item.icon} alt="image" />
            </div>

            <div className="content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutBlock;
