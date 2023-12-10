const Block8 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-drawing",
      title: "Skilled Labour",
      text: `Unlock your potential... are you a skilled worker seeking exciting career prospects in Canada...`,

    },
    {
      id: 2,
      icon: "icon-process",
      title: "Employers and Business Owners",
      text: `Expand your horizons and connect with talented professionals from around the world... `,

    },
    {
      id: 3,
      icon: "icon-task",
      title: "International Students",
      text: `Dreaming of studying in Canada? Join the thousands of international students who have... `,

    },
    {
      id: 4,
      icon: "icon-one-finger-click",
      title: "International Students",
      text: `Dreaming of studying in Canada? Join the thousands of international students who have... `,

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
