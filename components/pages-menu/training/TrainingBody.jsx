import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { useEffect, useState } from "react";
import Link from "next/link";


const TrainingBody = () => {
  return (
    <div className="auto-container">
      <div className="text" style={{ fontSize: "20px", color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
        <span> <strong> Services We Provide </strong></span><br /><br />
      </div>
      <div className="text" style={{ fontSize: "14px", color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
        <span>
          Future Fit International will establish training centers in Ethiopia and other African
          nations, with the goal of equipping prospective job seekers with the necessary
          qualifications for the Canadian job market.   <br /><br />

          This visionary program operates on a threefold mission: <br /><br />

          <ul className="list-style-five" >
            <li>To cultivate robust training infrastructure within local communities </li>
            <li>To mitigate hiring risks for both prospective Canadian employers and
              job applicants seeking opportunities overseas</li>
            <li>To offer a convenient and cost-effective means of delivering essential
              training services locally to aspiring workers</li>

          </ul>
          <br /><br />
          We also help to streamline the admissions process, providing students from across the
          globe with the necessary information and support to navigate enrollment successfully.
        </span>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Link href="/training" className="theme-btn btn-style-one bg-blue" style={{
          color: "white",
          backgroundColor: GlobalConfig.LogoBlu
        }}>
          <span className="btn-title"><strong>Training/Other Details</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default TrainingBody;
