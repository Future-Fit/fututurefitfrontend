import Social from "./Social";

const CopyrightFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box" >
          <div className="copyright-text" >
            © {new Date().getFullYear()} Future Fit International By {" "}
            <a
              href="https://zoomtechet.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoom Tech Trading PLC
            </a>
            . All Right Reserved.
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
