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
              src="/images/icons/Mfg-icon.svg"
              alt="Manufacturing"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Overview
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Manufacturing is a cornerstone of the Canadian economy, characterized
            by its diversity, innovation, and significant contribution to exports and employment. <br /><br />

            Diverse Sector: Canada's manufacturing industry spans a wide range of sectors, including
            aerospace, automotive, food and beverages, machinery, chemicals, and electronics. This
            diversity helps stabilize the economy by distributing risk and opportunity across different
            markets.<br /><br />

            Economic Contribution: It is one of Canada's largest sectors in terms of GDP
            contribution and employment. It plays a crucial role in economic stability,
            job creation, and the generation of wealth. <br /><br />

            Export Powerhouse: The industry is a key driver of Canada's export economy,
            with manufactured goods accounting for a significant portion of the country's
            exports. This not only supports economic growth but also strengthens Canada's
            trade relationships globally. <br /><br />

            Innovation Hub: Canadian manufacturers are at the forefront of technological
            innovation, adopting new technologies to enhance efficiency, product quality,
            and environmental sustainability. This focus on innovation is essential for
            staying competitive in an increasingly globalized and technology-driven market.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            The Need for Skilled Workers
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            <ul className="list-style-five" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify", left: "5px", paddingLeft: "17px" }}>
              <li><u>Technological Advancements:</u> As Industry 4.0 technologies, such as
                artificial intelligence (AI), robotics, and Internet of Things (IoT) are
                embraced, demand for workers with advanced technical skills has surged. These workers
                are needed not only to operate sophisticated machinery but also to engage in the design,
                maintenance, and optimization of these technologies.</li>
              <li><u>Aging Workforce:</u> Canada faces the challenge of
                an aging population. This demographic shift is leading to a significant
                number of retirements in the manufacturing sector, creating vacancies that
                need to be filled by the next generation. However, attracting
                younger workers to the manufacturing industry requires not only outreach and
                education but also training in the specific skills that modern manufacturing
                demands.</li>
              <li><u>Skills Gap:</u> There is a notable gap between skills possessed by the
                current workforce and those required to excel in modern manufacturing environments.
                Bridging this gap is crucial for the sector to remain competitive globally. This
                involves not only technical training but also soft skills such as problem-solving,
                teamwork, and adaptability.</li>
              <li><u>Innovation and Productivity:</u> Skilled workers are pivotal for innovation
                and increasing productivity in this sector. Their ability to operate complex machinery,
                optimize production processes, and innovate contributes directly to the industry's
                overall strength and global competitiveness.</li>
            </ul><br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Summary
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            To sustain and grow the strength of the manufacturing industry in Canada,
            addressing the need for skilled workers is paramount. This involves collaborative
            efforts between government, educational institutions, and industry to develop targeted
            training and education programs, promote manufacturing as a viable and exciting career path,
            and ensure that the workforce is equipped to meet the challenges of modern manufacturing.
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
