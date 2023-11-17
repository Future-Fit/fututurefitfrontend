import Image from "next/image";

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconName: "placeholder",
      title: "Address",
      text: (
        <>
          168 Charlotte Street, Suite 404, Ottawa
          <br /> Canada.
        </>
      ),
    },
    {
      id: 2,
      iconName: "smartphone",
      title: "Call Us",
      text: (
        <>
          <a href="tel:+1-888-xxx-xxxx" className="phone">
          +1-888-xxx-xxxx
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
                src={`/images/icons/${item.iconName}.svg`}
                alt="icon"
              />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
