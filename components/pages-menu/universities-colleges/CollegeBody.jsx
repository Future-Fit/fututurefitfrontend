import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { useEffect, useState } from "react";
import Link from "next/link";


const CollegeBody = () => {
  return (
    <div className="auto-container">
      <div className="text" style={{ fontSize: "20px", color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
        <span> <strong> Services We Provide </strong></span><br /><br />
      </div>
      <div className="text" style={{ fontSize: "14px", color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
        <span>
        FFI is dedicated to partnering with Canadian colleges and universities to enhance 
        their global outreach and attract a diverse array of international students. Through 
        our comprehensive suite of services, we aim to promote Canadian educational institutions 
        as world-class destinations for higher learning.  <br /><br />

        Our list of services includes representing Canadian colleges and universities in the 
        following ways: <br /><br />

          <ul className="list-style-five" >
            <li>At education fairs conducted in strategic international locations  </li>
            <li>Developing targeted marketing strategies</li>
            <li>Effectively communicating Canadian institutions' unique strengths to the global 
              community</li>
          </ul>
          <br /><br />
          We also help to streamline the admissions process, providing students from across the 
          globe with the necessary information and support to navigate enrollment successfully.
        </span>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
          color: "white",
          backgroundColor: GlobalConfig.LogoOrg
        }}>
          <span className="btn-title"><strong>University/College Portal</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default CollegeBody;
