import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

import React, { useEffect, useRef, useState } from 'react';
import BusinessSlider from "@/components/pages-menu/businesses/BusinessSlider";

const BusinessBody = () => {

  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="outer-column col-md-4 col-sm-12" style={{ order: 0, display: "grid", justifyContent: "center", alignContent: "center" }}>
            <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
              <div className="list" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px', width: "fit-content", height: "fit-content", padding: "0 20px 20px 20px" }}>
                <div style={{ display: "grid", justifyContent: "center" }}>
                  <Image
                    width={60}
                    height={60}
                    src="/images/icons/Question.png"
                    alt="Business"
                    style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
                  />
                </div>
                <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
                  Recruiting Globally?</h4>
                <ul className="list-style-five" style={{ textAlign: "left" }}>
                  <li>Where to start looking for talent?</li>
                  <li>What local regulations to consider? </li>
                  <li>How to match skills with requirements?</li>
                  <li>How to verify/translate credentials?</li>
                  <li>How to provide skills/language training?</li>
                </ul>
                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                  <span style={{ color: GlobalConfig.Fgr1Clr }}>
                    We solve these and other problems. <br />
                    <strong> Contact us today!</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-md-8 col-sm-12">
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr, paddingTop: "3%" }}>
                  Services for Employers</h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
                  <span>
                    <span> Canada has a vibrant, highly developed and one of the largest economies
                      in the world which is highly dependent on international trade. In today's
                      world, Canadian businesses need to fill job positions quickly to stay competitive.
                      And, when businesses can't fill these positions locally, they need to look
                      globally. This is where FFI's global network and on the ground presence comes
                      in handy. Many industries in Canada already benefit from the significant
                      contributions of international skilled workers. It is our job to support
                      Canadian businesses by making the global sourcing and hiring process efficient
                      and beneficial to Canadian businesses as well as job seekers.
                      <br /><br />
                      Although not an exclusive list, we typically serve our clients in the following industries:</span>
                    <ul className="list-style-five" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify", left: "5px", paddingLeft: "17px" }}>
                      <li>Healthcare</li>
                      <li>Engineering/IT</li>
                      <li>Manufacturing</li>
                      <li>Transportation/Logistics</li>
                      <li>Aviation</li>
                      <li>Construction</li>
                      <li>Hospitality/Services</li>
                      <li>Skilled Trade</li>
                    </ul> <br/>
                    The list below shows the types of services we offer. Please review the
                    services and contact us to set up a customized global sourcing approach for you.
                    <br /><br />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-column col-100 col-md-12 col-sm-12">
          <div className="inner-column">
            <BusinessSlider />
          </div>
        </div>

        <div className="content-column col-100 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="sec-title">
              <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
                <span>
                  FFI's employer portal is the best place to start your search for global talent.
                  You can also contact us via&nbsp;
                  <a href="/contact"
                    className style={{ textDecoration: "underline", color: GlobalConfig.Fgr1Clr, fontSize: "1.0em", textAlign: "justify", lineHeight: "1.4em" }}>
                    email</a>
                  &nbsp;or on our dedicated&nbsp;
                  <a href="tel: +1-833-688-5577"
                    className style={{ textDecoration: "underline", color: GlobalConfig.Fgr1Clr, fontSize: "1.0em", textAlign: "justify", lineHeight: "1.4em" }}>
                    phone line</a>
                  &nbsp;at any time.
                </span>
              </div>
            </div>
            <div className="sec-title">
            </div>
          </div>
        </div>
        <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
          <Link href="/BusPortal" className="theme-btn btn-style-one bg-blue" style={{ color: "white", backgroundColor: GlobalConfig.LogoBlu }}>
            <span className="btn-title"><strong>Employer Portal</strong></span>
          </Link>
        </div>
      </div >
    </div>
  );
};

export default BusinessBody;
