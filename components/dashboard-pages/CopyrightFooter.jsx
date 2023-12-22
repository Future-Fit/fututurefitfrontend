import ColorConfig from "@/Color.config";

const CopyrightFooter = () => {
  return (
    <div className="copyright-text" style={{backgroundColor:ColorConfig.PrimaryColor}}>
      <p style={{color:'#fff'}}>
        © {new Date().getFullYear()} Future Fit International{" "}
        <a
          href="https://zoomtechet.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By ZooM Tech Trading PLC
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
