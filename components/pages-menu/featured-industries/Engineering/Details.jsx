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
              src="/images/icons/Eng-Htech-IT-icon.svg"
              alt="Engineering/IT"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Overview
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's economy is diverse and ever evolving, demanding a continuous supply
            of skilled professionals in various sectors, including engineering and information
            and communications technology (ICT). These professionals have strong background in STEM
            and play a crucial role in the development, improvement,
            and sustainability of the country's infrastructure, global competitiveness, and
            overall economic growth. As Canada aims to maintain its competitive edge in the global
            market and address challenges such as climate change, the demand for engineers and ICT
            workers across multiple disciplines remains high.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Engineering and ICT Jobs
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Engineering and ICT jobs are in high demand in Canada. Among others, the growth of the
            construction industry and swift changes to long-term digital transformation initiatives
            broght by the COVID-19 pandemic are driving change in the job market resulting in
            an increased need for engineers and ICT profesionals.<br /><br />
            Mechanical engineers are tasked with designing,
            developing and maintaining mechanical systems, having a broad range of knowledge about physics,
            mathematics, mechanics, thermodynamics and structural analysis.<br /><br />
            Electrical engineers who possess a strong background in science and mathematics
            supervise the design, manufacturing, testing and maintenance of
            electrical equipment, such as consumer electronics, communication systems,
            electric motors and navigation systems.<br /><br />
            Civil and structural engineers are highly in-demand due to numerous infrastructure projects
            underway in Canada. Engineers design, construct, ensure the safety and compliance
            of infrastructure projects such as bridges, dams, highways, airports, and sewer
            systems.<br /><br />
            Professional project managers and project engineers oversee the entire construction
            process of large-scale projects. They manage the project and monitor the construction
            process to ensure adherence to company and governmental standards.<br /><br />
            Professionals in the ICT sector have diverse roles ranging from software
            developers to security analysts to network administrators and so on. Cyber security,
            artificial intelligence (AI), cloud services, robotics and other similar fields offer
            tremendous opportunities for skilled professionals.<br /><br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Summary</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            In addition to the above, there are many other job opportunities for skilled
            professionals in this industry, spanning across all industries and reflecting the
            importance of engineers and ICT professionals to innovation, growth and sustainability
            of the enconomy.
          </h4>
        </div>
      </div>

      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
        <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
          color: "white",
          backgroundColor: GlobalConfig.LogoOrg
        }}>
          <span className="btn-title"><strong>Sign Up Today!</strong></span>
        </Link>
      </div>
    </div >
  );
};

export default Details;
