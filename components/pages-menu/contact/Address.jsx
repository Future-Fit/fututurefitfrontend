import Image from "next/image";
import placeholder from '../../../public/images/icons/placeholder.svg'
import smartphone from '../../../public/images/icons/smartphone.svg'
import letter from '../../../public/images/icons/letter.svg'

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconName: "placeholder",
      title: "Address",
      text: (
        <>
          168 Charlotte Street, Suite 404, Ottawa,ON
          <br /> K1N 8K6.
        </>
      ),
      text1: (
        <>
          242 Building, Chirkos 04, Addis Ababa <br />
          Ethiopia.
        </>
      ),
    },
    {
      id: 2,
      iconName: "smartphone",
      title: "Call Us",
      text: (
        <>
          <a href="tel:+1-800-422-8061" className="phone">
            +1-800-422-8061
          </a>
        </>
      ),
      text1: (
        <>
          <a href="tel:+251933859295" className="phone">
          +251933859295
          </a>
        </>
      ),
    },
    {
      id: 3,
      iconName: "letter",
      title: "Email",
      text: (
        <>
          {" "}
          <a href="mailto:info@futurefitinternational.com ">info@futurefitinternational.com </a>
        </>
      ),
    },
  ];

  const getIconSource = (iconName) => {
    switch (iconName) {
      case 'placeholder':
        return placeholder;
      case 'smartphone':
        return smartphone;
      case 'letter':
        return letter;
      default:
        return null;
    }
  };
  return (
    <>
      {addressContent.map((item) => (
        <div
          className="contact-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className="icon">
              <Image
                width={51}
                height={51}
                src={getIconSource(item.iconName)}
                alt="icon"
              />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            <p>{item.text1}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
