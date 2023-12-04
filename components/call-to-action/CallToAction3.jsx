import Link from "next/link";

const CallToAction3 = () => {
  return (
    <section className="call-to-action-three">
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title">
            <h2>Travel & Visa</h2>
            <div className="text">
              Travel and Visa Detail Here
            </div>
          </div>
          {/* End sec title */}

          <div className="btn-box">
            <Link
              href="/job-list-v6"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Learn More</span>
            </Link>
          </div>
          {/* End btn-box */}
        </div>
        {/* End outer-box */}
      </div>
    </section>
  );
};

export default CallToAction3;
