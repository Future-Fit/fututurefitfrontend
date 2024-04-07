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
              src="/images/icons/Healthcare-icon.svg"
              alt="Healthcare"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Overview
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's publicly funded healthcare system has 13 provincial and territorial healthcare
            insurance plans covering all residents with reasonable access to medically necessary
            services without paying out-of-pocket. Provincial and territorial governments are responsible
            for the management, organization and delivery of services while the federal government
            is responsible for funding, setting standards and administering the system through the
            Canada Health Act. Additionally, most Canadians have supplemental private coverage,
            largely paid by employers, to cover services such as dental, vision, prescription drugs,
            ambulance services, physical therapy, etc. <br /><br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Aging Population
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Like many developed countries, Canada has an aging population. Typically, older
            people require more frequent and specialized care, resulting in increased demand for
            healthcare workers who can provide geriatric care, chronic disease management, and end-of-life
            care.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Healthcare System Expansion
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The Canadian healthcare system is known for providing universal coverage to
            its residents. However, with the increase in demand, there has been a push towards
            expanding healthcare infrastructure and services, including mental health support,
            telemedicine, and community healthcare initiatives. Such expansions further drive
            the need for a diverse range of healthcare professionals.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            COVID-19 Pandemic Impact
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The COVID-19 pandemic has placed unprecedented stress on healthcare systems
            worldwide, including Canada's. The pandemic highlighted the critical need for
            healthcare workers, not only in direct patient care roles but also in public
            health, research, and vaccine administration areas. It has also caused burnout
            among existing healthcare workers, leading to higher turnover rates and exacerbating
            the shortage of healthcare professionals.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Healthcare Worker Shortage
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Demand for healthcare workers in Canada has been growing due to factors including
            the aging population, expansion of healthcare services, and the ongoing impacts of
            the COVID-19 pandemic. This need spans across various sectors and presents both
            challenges and opportunities as it is a multifaceted issue. Challenges in recruitment
            and retention, including competitive compensation, work-life balance, and professional
            development opportunities, are significant factors. Rural and remote areas face even
            greater difficulties in attracting healthcare professionals, leading to disparities
            in healthcare access and quality.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Overall Healthcare Numbers
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Spending: Canada's healthcare spending is significant, contributing to a substantial
            portion of its overall expenditure. Despite high spending, however, shortage of
            healthcare workers impacts the efficiency and quality of care. <br /><br />
            Workforce: The healthcare workforce in Canada is diverse, with a
            considerable number being in various sectors such as hospitals, long-term
            care, and community health services. The distribution of these workers across
            the country is uneven, with urban centers often having better staffing levels
            than rural areas. <br /><br />
            Patient to Provider Ratios: Canada has a relatively high number of
            healthcare providers per capita, but regional variations and distribution of
            specialists versus general practitioners exist.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Moving Forward
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Addressing the need for healthcare workers in Canada requires a comprehensive
            approach, including policy reforms, education and training programs, and
            incentives to retain and attract healthcare professionals. Leveraging technology
            and innovation in healthcare delivery can help alleviate some of the pressures on
            the workforce. Collaboration between governments, healthcare institutions, educational
            bodies, and the private sector is crucial in ensuring sustainability of the healthcare
            system and its ability to meet the growing needs of Canada's population.
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
