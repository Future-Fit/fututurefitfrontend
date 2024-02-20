import Link from "next/link";
import footerContent from "../../../data/footerContent";

const FooterContent = () => {

  const handleLoginRedirect = (e) => {
    // Check for logged-in user on button click
    const accessToken = localStorage.getItem("accessToken");
    const userType = localStorage.getItem("userType");

    if (accessToken && userType) {
      e.preventDefault(); // Prevent default link behavior
      if (userType === "4") {
        router.push("/candidates-dashboard/my-profile");
      } else if (userType === "3") {
        router.push("/employers-dashboard/dashboard");
      }
    } else {
      setShowModal(true); // Show the modal if no logged-in user is found
    }
  };


  return (
    <div className="row">
      {footerContent.map((item) => (
        <div
          className="footer-column col-lg-5 col-md-2 col-sm-12" // Adjusted column width
          key={item.id}
          style={{ marginLeft: '20px' }} // Reduced margin
        >
          <div className="footer-widget links-widget">
            <h4 className="widget-title">{item.title}</h4>
            <div className="widget-content">
              <ul className="list">
                {item?.menuList?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.route}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      {/* {footerContent.map((item) => (
        <div
          className="footer-column col-lg-4 col-md-8 col-sm-12"
          key={item.id}
          style={{marginLeft: '50px'}}
        >
          <div className="footer-widget links-widget">
            <h4 className="widget-title">{item.title}</h4>
            <div className="widget-content">
              <ul className="list">
                {item?.menuList?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.route}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default FooterContent;
