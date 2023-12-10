const Block8 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-drawing",
      title: "Skilled Workers",
      text: `Match expertise with diverse, exciting opportunities`,

    },
    {
      id: 2,
      icon: "icon-process",
      title: "Employers and Businesses",
      text: `Post your job lists and fulfill open positions quickly`,

    },
    {
      id: 3,
      icon: "icon-task",
      title: "Education and Training",
      text: `Student services to Canadian colleges/universities`,

    },
    {
      id: 4,
      icon: "icon-one-finger-click",
      title: "Travel/Visa/Other",
      text: `Facilitate travel, visa, resettlemnt and other services`,

    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <div className="work-block -type-4">
            <div className="icon-wrap">
              <span className={`icon ${item.icon}`}></span>
            </div>

            <h5 style={{ textAlign: "justify", color:'#fff' }} className="title">{item.title}</h5>
            <p style={{ textAlign: "justify", color:'#fff' }} className="text">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block8;
