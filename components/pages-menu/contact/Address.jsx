import Image from "next/image";

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
          <a href="tel:+1-833-688-5577" className="phone">
            +1-833-688-5577
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
          <a href="mailto:info@futurefitint.com ">info@futurefitint.com </a>
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
            <p>{item.text1}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
