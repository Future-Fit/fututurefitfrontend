import Image from "next/image";
import Link from "next/link";

const Block1 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/images/resource/work-1.png",
      title: "Skilled Labour",
      text: `Unlock Your Potential, Discover Your Future, Are you a skilled worker seeking exciting career prospects in Canada? We specialize in matching your expertise with employers that recognize and value your talents in the Canadian job market.`,

    },
    {
      id: 2,
      icon: "/images/resource/work-2.png",
      title: "Employers and Business Owners",
      text: `Expand your horizons and connect with talented professionals from around the world. We foster international business relationships, helping you tap into diverse markets, skillsets, and expertise, all while contributing to Canada’s... `,

    },
    {
      id: 3,
      icon: "/images/resource/work-3.png",
      title: "International Students",
      text: `Dreaming of studying in Canada? Join the thousands of international students who have made Canada their second home. Discover world-class education, a multicultural environment, and boundless opportunities for personal and ... `,

    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="work-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <figure className="image">
              <Image
                width={105}
                height={113}
                src={item.icon}
                alt="Services"
              />
            </figure>
            <h5>{item.title}</h5>
            <p style={{ textAlign: "justify" }}>{item.text}</p>

          </div>
        </div>
      ))}
    </>
  );
};

export default Block1;
