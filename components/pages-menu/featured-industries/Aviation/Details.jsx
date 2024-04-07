import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const Details = () => {

  return (
    <div className="auto-container" style={{
      display: "grid", justifyContent: "center", alignContent: "center",
    }}>
      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: "0 20px 20px 20px"
      }}>
        <div className="list" >
          <div style={{ display: "grid", justifyContent: "center" }}>
            <Image
              width={60}
              height={60}
              src="/images/icons/Aviation-icon.svg"
              alt="Aviation"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Aviation Industry
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The aviation industry contributes significantly to the Canadian economy,
            supporting thousands of jobs directly and indirectly. It not only facilitates
            trade by transporting goods but also boosts tourism by enabling international
            and domestic travel. <br /> <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Strengths of Aviation in Canada
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada is recognized globally for its leadership in aviation,
            with a strong presence in aerospace manufacturing and design, air traffic management,
            and pilot training. Canadian companies like Bombardier, CAE, and Pratt & Whitney Canada
            are renowned for their innovation and contribute significantly to the global aviation
            market. Likewise, Canada boasts a well-developed aviation infrastructure, with
            numerous airports and a vast air traffic control network managed by NAV CANADA.
            This infrastructure supports the efficient movement of people and goods across
            the country and beyond, highlighting the strategic importance of the aviation
            sector in connecting Canada's extensive territories. Finally, the Canadian
            aviation industry is actively engaged in efforts to reduce its environmental
            footprint through initiatives such as the Green Aviation Research and Development
            Network (GARDN) and partnerships aimed at developing sustainable aviation fuels and
            more efficient aircraft designs.
            <br /><br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Aviation Job Trends
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The aviation sector in Canada has been experiencing growth to meet the rising demand
            for air travel and cargo services leading to increased need for air traffic controllers,
            aircraft mechanics, and aerospace engineers. With the aviation industry embracing new
            technologies such as unmanned aerial vehicles (UAVs), advanced air mobility (AAM), and
            green aviation technologies, there is demand for workers who possess the skills to
            operate, maintain, and innovate in advanced systems. <br /><br />

            The need for skilled aviation industry workers in Canada is clear, driven by
            growth, technological advancements, and the necessity to replace an aging workforce.
            At the same time, the strength of Canada's aviation industry, characterized by its economic
            contribution, innovation, robust infrastructure, and commitment to sustainability, makes it
            an attractive field for current and aspiring professionals. The industry's health and expansion
            depend on the continuous influx of talented individuals ready to take on the challenges
            and opportunities that the future of aviation holds.
          </h4>
        </div>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
        <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
          color: "white",
          backgroundColor: GlobalConfig.LogoBlu
        }}>
          <span className="btn-title"><strong>Sign Up Today!</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default Details;
