import Link from "next/link";

const CallToAction2 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(/images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Your Dream Jobs Are Waiting for You</h2>
          {/* <h3>Where Bridging Talent and Opportunities Across Canada is Our Specialty</h3> */}
          <div className="text">
          Where Bridging Talent and Opportunities Across Canada is Our Specialty
          </div>
        </div>

        <div className="btn-box">
          <Link href="/job-list-v6" className="theme-btn btn-style-three">
            Search Job
          </Link>
          <Link href="/register" className="theme-btn btn-style-two">
            Apply Job Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;
