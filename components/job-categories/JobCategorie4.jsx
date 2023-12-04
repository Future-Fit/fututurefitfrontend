import Link from "next/link";
import jobCatContent from "../../data/job-catergories";

const JobCategorie4 = () => {
  return (
    <>
      {jobCatContent.slice(0, 3).map((item) => (
        <div
          className="feature-block-two col-lg-4 col-md-4 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className={`icon ${item.icon}`}></span>
            <h4>
              {item.catTitle}
            </h4>

            <div className="btn-box text-center" style={{ marginTop: '10px' }}>
              <Link href="/service" className="theme-btn btn-style-one bg-blue">
                {/* <span className="btn-title">Learn More</span> */}
                <span className="count">{item.jobNumber}</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie4;
