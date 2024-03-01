import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { useEffect, useState } from "react";
import Link from "next/link";


const JobSeekerBody = () => {
  return (
    <div className="auto-container">
      <div className="text" style={{ fontSize: "20px", color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
        <span> <strong> Giving You the Edge ...  </strong></span><br /><br />
      </div>
      <div className="text" style={{ fontSize: "1em", color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
        <span>
          FFI facilitates employment and career development opportunities in Canada. Through its 
          employer-employee matching and verification services, skilled job seekers who want to 
          make a career move can connect with employers that have opportunities to hire foreign workers. 
          FFI offers a one-stop capability to conduct job searching, application submission, employee vetting and 
          hiring, as well as offering relevant training programs to enhance skills and competencies.
          Furthermore, FFI offers localized and international consulting services that provide valuable guidance 
          and support to both newcomers and established residents to settle and integrate within their 
          communities.
          <br /><br />
          Central to FFI's service offerings is its partnership with a large network of Canadian businesses.
          Using its online platform, FFI will curate and post current job openings, making it easy for 
          job seekers to perform targeted searches and, subsequently, completing and submitting their 
          entire application within the portal.
          <br /><br />
          <strong> Summary of Services: </strong><br />
        </span>
        <ul className="list-style-five" >
          <li>Access to sourcing of opportunities that can lead to great job offers for qualified
            applicants </li>
          <li>Personalized support throughout the job application process tailored to individual's 
            specific needs</li>
          <li>Services in qualifying, checking and translating documentation and credentials</li>
          <li>Providing services in international travel, resettlement and related activities  </li>
        </ul>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{ color: "white", 
          backgroundColor: GlobalConfig.LogoBlu }}>
          <span className="btn-title"><strong>Sign Up Today</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default JobSeekerBody;
