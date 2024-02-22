import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { useEffect, useState } from "react";
import Link from "next/link";


const StudentBody = () => {
  return (
    <div className="auto-container">
      <div className="text" style={{ fontSize: "20px", color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
        <span> <strong> Services for Students </strong></span><br /><br />
      </div>
      <div className="text" style={{ fontSize: "14px", color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
        <span>
          FFI provides key services to international students seeking to study in Canada.
          Focused on facilitating a smooth end-to-end application and transition process,
          we provide extensive information on Canadian colleges and universities, detailing
          the diverse range of programs available. Our expert team guides students through the
          following: <br /><br />

          <ul className="list-style-five" >
            <li>Offering personalized assistance at every step of the application process </li>
            <li>Continuing and follow-up support to students as they navigate their new academic environment</li>
            <li>Providing resources and guidance to aid in their adjustment to life as students in Canada</li>
            <li>Providing support and consulting on travel related services </li> <br />
          </ul>

          From application to integration, Future Fit International is committed to
          empowering international students to thrive in their educational journey in Canada.
        </span>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
          color: "white",
          backgroundColor: GlobalConfig.LogoOrg
        }}>
          <span className="btn-title"><strong>Sign Up</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default StudentBody;
