import GlobalConfig from "@/Global.config";

const CopyrightFooter = () => {
  return (
    <div className="copyright-text" style={{backgroundColor:GlobalConfig.BgrClr}}>
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
