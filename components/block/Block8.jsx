const Block8 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-drawing",
      title: "For Job Seekers",
      text: `Help You Find A Great Job in Canada and Beyond`,

    },
    {
      id: 2,
      icon: "icon-process",
      title: "For Students",
      text: `Facilitate Canadian University/College Applications`,

    },
    {
      id: 3,
      icon: "icon-task",
      title: "For Businesses/Institutions",
      text: `Introduce Your Organization to Global Talent Pool`,

    },
    {
      id: 4,
      icon: "icon-one-finger-click",
      title: "For Everyone",
      text: `Provide Travel, Visa, and Resettlement Services`,

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
