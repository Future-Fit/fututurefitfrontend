import Link from "next/link";
import SearchForm from "./SearchForm";
import Social from "./common-footer/Social";

const FooterContent2 = () => {

  const footerMenu1 = [
    { id: 1, name: "Canada Jobs", routeLink: "/" },
    { id: 2, name: "Canada Student Visa", routeLink: "/" },
    { id: 3, name: "UK Jobs", routeLink: "/" },
    { id: 4, name: "Emplois en France", routeLink: "/" },
    { id: 5, name: "Jobs in Deutschland", routeLink: "/" },
    { id: 6, name: "Vacatures China", routeLink: "/" },
  ];

  const footerMenu2 = [
    {
      id: 1,
      list: [
        { name: "Privacy & Securty", routeLink: "/" },
        { name: "Terms of Service", routeLink: "/" },
        { name: "Communications", routeLink: "/" },
        { name: "Referral Terms", routeLink: "/" },
        { name: "Lending Licnses", routeLink: "/" },
        { name: "Disclaimers", routeLink: "/" },
      ],
    }
  ];

  const footerMenu3 =[
    {
      id: 1,
      list: [
        { name: "Support", routeLink: "/" },
        { name: "How It Works", routeLink: "/" },
        { name: "For Employers", routeLink: "/" },
        { name: "For Job Seekers", routeLink: "/" },
        { name: "Underwriting", routeLink: "/" },
        { name: "Underwriting", routeLink: "/" },
        { name: "Contact Us", routeLink: "/" },
      ],
    },
  ]
  return (
    <>
      <div className="footer-column col-lg-3 col-md-6 col-sm-12">
        <div className="footer-widget links-widget">
          <h4 className="widget-title">Find Jobs</h4>
          <div className="widget-content">
            <ul className="list">
              {footerMenu1.map((menu) => (
                <li key={menu.id}>
                  <Link href={menu.routeLink}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-column col-lg-3 col-md-6 col-sm-12">
        <div className="footer-widget links-widget">
          <h4 className="widget-title">Support</h4>
          <div className="widget-content d-flex">
            {footerMenu3.map((item) => (
              <ul className="list" key={item.id}>
                {item.list.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.routeLink}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      
      {/* End .footer-column */}

      <div className="footer-column col-lg-3 col-md-12 col-sm-12">
        <div className="footer-widget links-widget">
          <h4 className="widget-title">FAQ</h4>
          <div className="widget-content d-flex">
            {footerMenu2.map((item) => (
              <ul className="list" key={item.id}>
                {item.list.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.routeLink}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* End .footer-column */}

      <div className="footer-column col-lg-3 col-md-12 col-sm-12">
        <div className="footer-widget links-widget">
          <h4 className="widget-title">Help</h4>
          <div className="widget-content d-flex">
            {footerMenu2.map((item) => (
              <ul className="list" key={item.id}>
                {item.list.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.routeLink}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="social-links" style={{justifyContent:"center"}}>
            <Social />
          </div>
      {/* End .footer-column */}
    </>
  );
};

export default FooterContent2;
