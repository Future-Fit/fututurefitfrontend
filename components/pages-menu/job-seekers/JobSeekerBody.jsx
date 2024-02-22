import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { useEffect, useState } from "react";
import Link from "next/link";


const JobSeekerBody = () => {
  return (
    <div className="auto-container">
      <div className="text" style={{ fontSize: "20px", color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
        <span> <strong> Services for Job Seekers </strong></span><br /><br />
      </div>
      <div className="text" style={{ fontSize: "14px", color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
        <span>
          FFI facilitates employment and career development opportunities in Canada. Through its employer
          and employee matching and verification services, skilled job seekers and aspiring individuals
          can connect with employers that have opportunities to hire foreign workers, offering an end-to-end
          job search, application, vetting and hiring process ensuring a seamless transition into a new career.
          FFI also provides relevant training programs to enhance skills and competencies for success in the
          Canadian job market. Moreover, FFI’s localized and international consulting services offer valuable guidance
          and support to both newcomers and established residents alike, aiding in settlement and integration
          processes.
          <br /><br />
          FFI specializes in facilitating skilled labor migration for individuals aspiring to
          pursue their careers in Canada. FFI offers a comprehensive suite of services aimed at connecting
          qualified, skilled workers with Canadian job opportunities. Central to FFI's mission is its
          partnership with a large network of Canadian employers and the creation of a platform where
          employers can post current job openings, making them easily accessible to skilled international
          job seekers, who can perform a targeted search and complete the application process at any time.
          <br /><br />
          <strong> FFI provides the following services: </strong><br />
        </span>
        <ul className="list-style-five" >
          <li>Access to sourcing of job opportunities that can lead to great job offers for qualified
            applicants </li>
          <li>Personalized support to applicants throughout the job application process, ensuring a
            smooth transition to a new career and life in Canada</li>
          <li>Qualifying, checking and translating documentation and credentials</li>
          <li>Providing support and consulting on travel related services </li>
        </ul>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{ color: "white", 
          backgroundColor: GlobalConfig.LogoBlu }}>
          <span className="btn-title"><strong>Sign Up</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default JobSeekerBody;
