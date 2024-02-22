import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { useEffect, useState } from "react";
import Link from "next/link";


const BusinessBody = () => {
  return (
    <div className="auto-container">
      <div className="text" style={{ fontSize: "20px", color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
        <span> <strong> Services for Employers </strong></span><br /><br />
      </div>
      <div className="text" style={{ fontSize: "14px", color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
        <span>
          FFI offers a comprehensive suite of services to Canadian businesses grappling with the
          challenge of fulfilling the escalating demand for skilled workers not sufficiently
          met by the domestic workforce. Leveraging our global network and expertise, we
          specialize in talent acquisition solutions tailored to bridge the skills gap. <br /><br />

          Our services encompass the following: <br /><br />

          <ul className="list-style-five" >
            <li>Meticulous talent sourcing from international markets </li>
            <li>Rigorous assessment procedures to ensure optimal fit </li>
            <li>Streamlined immigration processes to facilitate seamless relocation </li>
            <li>Ongoing support for successful integration into Canadian work culture</li>
          </ul>
          <br /><br />
        </span>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
          color: "white",
          backgroundColor: GlobalConfig.LogoBlu
        }}>
          <span className="btn-title"><strong>Business Portal</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default BusinessBody;
