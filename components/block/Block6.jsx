import Link from "next/link";

const Block6 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-case",
      title: "Browse",
      text: `Search our database to explore opportunities or review profiles.`,
      bgClass: "-blue",
    },
    {
      id: 2,
      icon: "icon-contact",
      title: "Register",
      text: `Sign up to customize your experience.`,
      bgClass: "-red",
    },
    {
      id: 3,
      icon: "icon-institution",
      title: "Login",
      text: `Sign in to build your profile or post jobs.`,
      bgClass: "-yellow",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="work-block -type-2 mb-0">
            <div className="inner-box">
              <div className={`icon-wrap ${item.bgClass}`}>
                <span className={`icon ${item.icon}`}></span>
              </div>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="btn-box text-center" style={{ marginTop: '10px' }}>
        <Link href="/service" className="theme-btn btn-style-one bg-blue">
          <span className="btn-title">Sign Up</span>
        </Link>
      </div>
    </>
  );
};

export default Block6;
