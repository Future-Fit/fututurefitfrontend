import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { useEffect, useState } from "react";
import Link from "next/link";


const StudentBody = () => {
  return (
    <div className="auto-container">
      <div className="text" style={{ fontSize: "20px", color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
        <span> <strong> Services for Students </strong></span><br /><br />
      </div>
      <div className="text" style={{ fontSize: "14px", color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
        <span>
          FFI provides key services to international students seeking to study in Canada.
          Starting from providing extensive information about Canadian colleges and universities 
          and their diverse range of programs, FFI helps students navigate through the entire 
          application process, supported by advisors who will provide guidance along the way. 
          The following services are provided to students: <br />

          <ul className="list-style-five" >
            <li>Putting their application package together </li>
            <li>Submitting applications</li>
            <li>Obtaining provincial attestation letter (as needed)</li>
            <li>Getting study permit</li>
            <li>Providing travel related services </li>
            <li>Providing resources and guidance to settle students and their families in Canada</li>
          </ul>
          <br />
          From providing research on colleges and universtities to submitting applications to 
          supporting students as they settle into their new environment, FFI is committed to
          enabling international students with everything they need as they embark on their 
          education journey and pursuit of fulfilling their dreams in Canada.
        </span>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
          color: "white",
          backgroundColor: GlobalConfig.LogoOrg
        }}>
          <span className="btn-title"><strong>Sign Up with FFI</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default StudentBody;
