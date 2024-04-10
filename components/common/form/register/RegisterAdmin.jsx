
'use client'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import FormContent from "./FormContentAdmin";
import Link from "next/link";
import FormContent2 from "./FormContent2";
import GlobalConfig from "@/Global.config";
import { useState } from "react";

const Register = ({ closeAdminMe, myAdminToast, myAdminError }) => {

  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => { closeAdminMe(); }

  return (isModalOpen && <div className="form-inner" >
    <div style={{ display: "grid", justifyContent: "center", fontWeight: "600", fontSize: "24px", color: GlobalConfig.Fgr1Clr }}>
      Sign Up <br />
    </div>
    <div style={{ textAlign: "center", fontSize: "12px", color: GlobalConfig.Fgr1Clr }}>
      <text style={{ fontSize: "12px", color: "red" }}>* </text>
      <text> Mandatory Fields! </text>
    </div>

    <Tabs>
      <div className="form-group register-dual">
        <TabList className="btn-box row">
          <Tab className="col-lg-6 col-md-12" style={{ color: GlobalConfig.Fgr1Clr }}>
            {/* <button className="theme-btn btn-style-four" style={{ paddingLeft: '10px' }}> */}
            <strong> <i className="la la-user"></i> Job Seeker/Student/Admin </strong>
            {/* </button> */}
          </Tab>

          {/* <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four" style={{paddingLeft: '10px'}}>
                <i className="la la-briefcase"></i> Business/Institution 
              </button>
            </Tab> */}
        </TabList>
      </div>
      {/* End .form-group */}

      <TabPanel>
        {/* <Form /> */}
        <FormContent closeModal={closeModal} myAdminError={myAdminError} myAdminToast={myAdminToast} />

      </TabPanel>
      {/* End cadidates Form */}

      {/* <TabPanel>
          <FormContent2 />
        </TabPanel> */}
      {/* End Employer Form */}
    </Tabs>
    {/* End form-group */}

    <div className="bottom-box" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="text">

        Already have an account?{" "}
        <Link
          href="#"
          className="call-modal login"
          data-bs-toggle="modal"
          data-bs-dismiss="modal"
          data-bs-target="#loginPopupModal"
          style={{ color: GlobalConfig.LnkClr, textDecoration: "underline" }}
        >
          Sign In
        </Link>
      </div>
      {/* <div className="divider">
          <span>or</span>
        </div>
        <LoginWithSocial /> */}
    </div>
    {/* End bottom-box LoginWithSocial */}
  </div >
  );
};

export default Register;
