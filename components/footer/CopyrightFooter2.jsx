import Link from "next/link";
import Social from "./common-footer/Social";
import Image from "next/image";

const CopyrightFooter2 = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="bottom-left">
            <div className="logo">
              <Link href="/">
                <Image
                  width={154}
                  height={50}
                  src="/images/logo.svg"
                  alt="brand"
                />
              </Link>
            </div>
            <div className="copyright-text">
              <p>
                © {new Date().getFullYear()} Future Fit International{" "}
                <a
                  href="https://zoomtechet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ZooM Tech Trading PLC
                </a>
                . All Right Reserved.
              </p>
            </div>
          </div>

          <div className="social-links">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter2;
