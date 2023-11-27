import Link from "next/link";
import footerContent from "../../../data/footerContent";

const FooterContent = () => {


  const handleLoginRedirect = (e) => {
    // Check for logged-in user on button click
    const accessToken = localStorage.getItem("accessToken");
    const userType = localStorage.getItem("userType");

    if (accessToken && userType) {
      e.preventDefault(); // Prevent default link behavior
      if (userType === "1") {
        router.push("/candidates-dashboard/dashboard");
      } else if (userType === "2" || userType === "3" || userType === "4") {
        router.push("/employers-dashboard/dashboard");
      }
    } else {
      setShowModal(true); // Show the modal if no logged-in user is found
    }
  };

  
  return (
    <>
      {footerContent.map((item) => (
        <div
          className="footer-column col-lg-4 col-md-6 col-sm-12"
          key={item.id}
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
    </>
  );
};

export default FooterContent;
