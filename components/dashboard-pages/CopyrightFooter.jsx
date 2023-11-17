const CopyrightFooter = () => {
  return (
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
  );
};

export default CopyrightFooter;
