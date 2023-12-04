const CopyrightFooter = () => {
  return (
    <div className="copyright-text" style={{backgroundColor:'#3B578E'}}>
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
