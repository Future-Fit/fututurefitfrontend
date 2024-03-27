import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const FeaturedIndustriesDetails = () => {

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
              src="/images/icons/Healthcare-icon.svg"
              alt="Healthcare"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
            Healthcare</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada spends a substantial portion of its GDP on healthcare services. The industry
            hires a large number of workers ranging from doctors to nurses to home care providers.
            Demand for healthcare workers has been growing due to a variety of factors,
            including an aging population, the expansion of healthcare services, and the ongoing
            impacts of the COVID-19 pandemic. Because the industry is facing challenges in recruitment
            and retention, competitive compensation, work-life balance, and professional development opportunities,
            there is a shortage of healthcare workers. This sector is a major employer of
            international healthcare professions.
          </h4>
        </div>
      </div>

      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0)', padding: "0 20px 20px 20px"
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
          <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
            Engineering/IT</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's economy is diverse and ever evolving, which demands a continuous
            supply of skilled professionals in various sectors, including engineering and information
            technology (IT). Engineers and IT professionals play a crucial role in the
            development, improvement, and sustainability of the country's infrastructure, technology, and
            overall economy. As Canada aims to maintain its competitive edge in the global market and address
            challenges such as climate change, the demand for skilled professionals across multiple disciplines
            remains high and is expected to remain strong, offering a wealth of opportunities
            for professionals in the field.
          </h4>
        </div>
      </div>

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
          <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
            Manufacturing</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The need for skilled workers in the manufacturing industry in Canada is
            becoming increasingly critical as the sector continues to evolve and integrate
            advanced technologies. This need arises from several factors, including the
            aging workforce, technological advancements, and the industry's growing complexity.
            The strength of Canada's manufacturing industry lies in its diversity, innovation,
            and contribution to the economy, making it essential to address the workforce
            challenges to maintain and enhance its competitiveness. Therefore, collaborative effort
            between government, educational institutions, and industry to develop
            targeted training and education programs, to promote manufacturing as a
            viable and exciting career path, and to ensure that the workforce is equipped
            to meet the challenges of modern manufacturing.
          </h4>
        </div>
      </div>

      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0)', padding: "0 20px 20px 20px"
      }}>
        <div className="list" >
          <div style={{ display: "grid", justifyContent: "center" }}>
            <Image
              width={60}
              height={60}
              src="/images/icons/Transportation-icon.svg"
              alt="Manufacturing"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
            Transportation/Logistics</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's transportation and logistics industry is a pivotal sector that plays a
            critical role in the country's economy, facilitating trade, enhancing competitiveness,
            and enabling the efficient movement of goods and people. The need for skilled transportation
            and logistics workers is driven by several factors, including the vast geography
            of the country, the importance of international trade to the economy, and the
            evolution of global supply chains. As the transportation and logistics industry is
            integral to the economy, it necessitates to ensure that there is a steady supply of
            skilled workers to keep addressing the challenges and taking advantage of the opportunities.
          </h4>
        </div>
      </div>

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
          <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
            Aviation</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The aviation industry contributes significantly to the Canadian economy, supporting thousands
            of jobs directly and indirectly. It not only facilitates trade by transporting
            goods but also boosts tourism by enabling international and domestic travel.
            Additionally, Canada is recognized globally for its leadership in aviation,
            with a strong presence in aerospace manufacturing and design, air traffic management,
            and pilot training. Canadian companies like Bombardier, CAE, and Pratt & Whitney are
            renowned for their innovation and contribute significantly to the global aviation market.
            Moreover, Canada boasts a well-developed aviation infrastructure, with numerous
            airports and a vast air traffic control network managed by NAV CANADA. This
            infrastructure supports the efficient movement of people and goods across the
            country and beyond, highlighting the strategic importance of the aviation sector
            in connecting Canada's extensive territories.
          </h4>
        </div>
      </div>

      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0)', padding: "0 20px 20px 20px"
      }}>
        <div className="list" >
          <div style={{ display: "grid", justifyContent: "center" }}>
            <Image
              width={60}
              height={60}
              src="/images/icons/Construction-icon.svg"
              alt="Construction"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
            Construction</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The construction industry is a robust and vital part of the Canadian economy, marked
            by a strong demand for a wide array of construction workers. The continuous need
            for infrastructure development, modernization and push towards sustainable construction
            practices ensures that the industry will remain a significant employer and contributor
            to Canada's economic health for the foreseeable future. The industry hires skilled tradespeople
            such as electricians, plumbers, carpenters, masons, and welders; general laborers
            who can perform various tasks; project managers; engineers and architects; equipment
            operators; safety officers, etc.
          </h4>
        </div>
      </div>

      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: "0 20px 20px 20px"
      }}>
        <div className="list" >
          <div style={{ display: "grid", justifyContent: "center" }}>
            <Image
              width={60}
              height={60}
              src="/images/icons/Hospitality-icon.svg"
              alt="Hospitality"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
            Hospitality/Services</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The hospitality and services industry encompasses a wide range of services including
            food and beverage, accommodation, recreation, and entertainment, contributing significantly
            to employment and economic growth. The need for skilled hospitality and service workers
            in Canada is driven by several factors, such as the country's status as a top tourist
            destination, its growing population, and the evolving preferences of consumers seeking
            enhanced service experiences. To address these needs, the industry is focused on
            attracting talent through various initiatives, including training programs, competitive
            compensation packages, and opportunities for career advancement. Additionally,
            immigration policies and programs aimed at skilled workers can help alleviate labor
            shortages, bringing in talent from abroad to complement the domestic workforce.
          </h4>
        </div>
      </div>

      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0)', padding: "0 20px 20px 20px"
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
          <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
            Skilled Trade</h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The skilled trade industry in Canada is robust, characterized by competitive wages, strong
            job security, and the potential for career advancement. Skilled tradespeople are essential
            for Canada's economic health, providing critical services that enable other sectors to
            thrive. The strength of the industry lies in its ability to adapt to new technologies and methods,
            ensuring that Canada's competitiveness remains strong. Growing investments in education, apprenticeship
            programs, and incentives for entering trades are key strategies being employed by the industry to attract
            and grow the demand for workers. The opportunities for skilled tradespeople in Canada are expected to
            expand, marking a promising future for those in the sector.
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

export default FeaturedIndustriesDetails;
