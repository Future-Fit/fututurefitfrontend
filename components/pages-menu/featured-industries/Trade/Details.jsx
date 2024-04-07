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
              src="/images/icons/Skilled-trade-icon.svg"
              alt="Skilled Trade"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Skilled Trade in Canada
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The skilled trades encompass a broad range of occupations that require
            specific training and skills. These trades are critical to Canada's economy,
            contributing to the construction, maintenance, and repair of the country's
            infrastructure and the production of goods and services. Notably, they
            form a significant part of the Canadian economy and are in high demand.
            Examples of skilled trade jobs include electricians, plumbers, welders,
            carpenters, chefs, bakers, and hairstylists, among others. <br /><br />

            Trade jobs are not strictly limited to manual labor. These roles require a
            combination of talent, skill, and formal training. And, the vocations'
            potential for growth and advancement is significant and often well-compensated.
            Canada is witnessing a surge in infrastructure and development projects,
            creating a high demand for skilled trades workers. This demand is not just
            limited to big cities but is widespread nationwide.
            <br /><br />

          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            In Demand Skilled Trades
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The demand for workers in skilled trade spans a wide range of sectors, each
            critical to different aspects of the economy:
            <ul className="list-style-five" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify", left: "5px", paddingLeft: "17px" }}>
              <li><u>Construction:</u> electricians, plumbers, carpenters, and
                masons are in high demand due to the constant need for building and
                maintaining infrastructure.</li>
              <li><u>Manufacturing:</u> precision machinists, tool and die makers,
                and welders are crucial for the production of goods and machinery.</li>
              <li><u>Automotive:</u> technicians, mechanics,
                and body repairers are needed to maintain and repair the increasing number
                of vehicles.</li>
              <li><u>Technology:</u> technicians for renewable energy technologies,
                such as solar and wind, are growing in demand as Canada invests in sustainable
                energy.</li>
            </ul> <br/>
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The need for skilled trade workers in Canada is clear, with strong industries 
            backing these demands. The country's future growth and competitiveness depend 
            on training and attracting skilled tradespeople to fill these critical roles. 
            Investments in education, apprenticeship programs, and incentives for entering 
            trades are key strategies being employed to meet this demand. As these industries 
            continue to grow and evolve, the opportunities for skilled tradespeople in Canada 
            are expected to expand, marking a promising future for those in the sector.
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
