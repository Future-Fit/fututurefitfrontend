"use client"
import dynamic from "next/dynamic";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import FooterDefault from "@/components/footer/common-footer";
import MobileMenu from "@/components/header/MobileMenu";
import DetailsContent from "@/components/blog-meu-pages/blog-details/details-content";
import DashboardAdminHeader from '../../../../components/header/DashboardAdminHeader'
import DashboardEmployerHeader from '../../../../components/header/DashboardEmployerHeader'
import DashboardStudentHeader from '../../../../components/header/DashboardStudentsHeader'
import blogs from "@/data/blogs";
import Image from "next/image";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import DashboardJobseekerHeader from "../../../../components/header/DashboardJobseekerHeader";
import { useEffect, useState } from "react";


// export const metadata = {
//   title: "Blog Details | Future Fit International Job Portal",
//   description: "Future Fit International Job Portal",
// };

const BlogDetailsDynamic = ({ params }) => {
  const id = params.id;

  const blog = blogs.find((item) => item.id == id) || blogs[0];

  const [userType, setUserType] = useState();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(JSON.parse(storedUserType));
    }
  }, []);

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      {userType === 1 && <DashboardAdminHeader />}
      {userType === 3 && <DashboardEmployerHeader />}
      {userType === 4 && <DashboardJobseekerHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Blog Single --> */}
      <section className="blog-single">
        <div className="auto-container">
          <div className="upper-box">
            <h3>{blog?.blogSingleTitle}</h3>

            <ul className="post-info">
              <li>
                <span className="thumb">
                  <Image
                    width={30}
                    height={30}
                    src={"../images/resource/thumb-1.png"}
                    alt="resource"
                  />
                </span>
                Alison Dawn
              </li>
              <li>August 31, 2021</li>
              <li>12 Comment</li>
            </ul>
            {/* End post info */}
          </div>
        </div>
        {/* End auto-container */}

        <figure className="main-image">
          <Image width={1903} height={595} src={blog?.img} alt="resource" />
        </figure>

        <DetailsContent />
      </section>
      {/* <!-- End Blog Single --> */}
      <FooterDefault/>
      {/* <FooterDefault footerStyle="alternate5" /> */}
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(BlogDetailsDynamic), {
  ssr: false,
});
