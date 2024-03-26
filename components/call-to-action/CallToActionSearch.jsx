"use client"
import Link from "next/link";
import SearchForm3 from "../common/job-search/SearchForm3";
import { useEffect, useState } from "react";
import GlobalConfig from "@/Global.config";

const CallToActionSearch = () => {

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  const isMobile = windowWidth <= 767; // Set your mobile breakpoint here

  return (
    <section
      className="call-to-action-two"
      // style={{ backgroundImage: "url(/images/background/1.jpg)" }}
      style={{ backgroundColor: GlobalConfig.BgrClr1 }}
    >
      <div className="auto-container" data-aos="fade-up">
        <h4 style={{ color: "#fff", paddingBottom: '10px'}}> What Are You Interested In? </h4>

        <div className="job-search-form" data-aos-delay="700" data-aos="fade-up">
          <SearchForm3 />
        </div>

      </div>
    </section>
  );
};

export default CallToActionSearch;
