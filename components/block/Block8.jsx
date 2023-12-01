const Block8 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-drawing",
      title: "Skilled Labour",
      text: `Unlock Your Potential, Discover Your Future, Are you a skilled worker seeking exciting career prospects in Canada? We specialize in matching your expertise with employers that recognize and value your talents in the Canadian job market.`,

    },
    {
      id: 2,
      icon: "icon-process",
      title: "Employers and Business Owners",
      text: `Expand your horizons and connect with talented professionals from around the world. We foster international business relationships, helping you tap into diverse markets, skillsets, and expertise, all while contributing to Canada’s... `,

    },
    {
      id: 3,
      icon: "icon-task",
      title: "International Students",
      text: `Dreaming of studying in Canada? Join the thousands of international students who have made Canada their second home. Discover world-class education, a multicultural environment, and boundless opportunities for personal and ... `,

    },
    {
      id: 4,
      icon: "icon-one-finger-click",
      title: "International Students",
      text: `Dreaming of studying in Canada? Join the thousands of international students who have made Canada their second home. Discover world-class education, a multicultural environment, and boundless opportunities for personal and ... `,

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

            <h5 className="title">{item.title}</h5>
            <p style={{ textAlign: "justify" }} className="text">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block8;
