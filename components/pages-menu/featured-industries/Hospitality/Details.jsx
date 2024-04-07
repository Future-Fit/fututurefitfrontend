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
              src="/images/icons/Hospitality-icon.svg"
              alt="Hospitality"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Hospitality & Service Industry
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's hospitality and service industry encompasses a wide range of services including food and
            beverage, accommodation, recreation, and entertainment, contributing significantly to
            employment and economic growth. The need for skilled hospitality and service workers
            is driven by several factors, including the country's status as a top tourist
            destination, its growing population, and the evolving preferences of consumers seeking
            enhanced service experiences.
            <br /><br />
            Canada is renowned for its multicultural fabric, which is reflected in its
            hospitality offerings, from world-class hotels and restaurants featuring
            international cuisines to unique cultural and outdoor experiences. Innovation,
            particularly in terms of digitalization and sustainability practices, also
            plays a crucial role in strengthening the industry, making it more resilient
            and capable of meeting the changing expectations of consumers.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Hospitality and Service Workers
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            The demand for hospitality and service workers in Canada is robust, driven by
            the continuous growth of tourism and the expanding food service sector. As
            international and domestic tourism rebounds, especially after global
            challenges such as the COVID-19 pandemic, there is a significant need for a
            workforce that can cater to the diverse needs of tourists and residents alike.
            <br /> <br />
            <strong>Hospitality and Service Jobs</strong> <br />
            <ul className="list-style-five" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify", left: "5px", paddingLeft: "17px" }}>
              <li><u>Food and Beverage Services:</u> chefs, cooks, servers, bartenders, and
                food service managers are in high demand to cater to the country's diverse
                culinary scene.</li>
              <li><u>Accommodation Services:</u> there is a need for front desk agents,
                housekeeping staff, and management personnel in hotels, resorts, and other
                lodging facilities to ensure guests have a pleasant stay.</li>
              <li><u>Travel and Tourism:</u> tour operators, customer service agents and
                guides are essential for promoting and facilitating travel within Canada
                and to international visitors.</li>
              <li><u>Recreation and Entertainment:</u> professionals in this category
                include event planners, recreational workers, and entertainment staff
                who create and manage experiences for both locals and tourists.</li>
              <li><u>Customer Service Representatives:</u> with the expansion of digital
                platforms and online services, there is a growing need for customer
                service representatives who can assist customers through various
                channels.</li>
              <li><u>Management and Executive Roles:</u> as the industry continues to
                grow, there's also an increased demand for individuals with leadership
                skills to oversee operations, marketing, finance, and strategic
                development within hospitality and service companies.</li>
            </ul><br />
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            To address these needs, Canada's hospitality and service industry is focused
            on attracting talent through various initiatives, including training programs,
            competitive compensation packages, and opportunities for career advancement.
            Additionally, immigration policies and programs aimed at skilled workers can
            help alleviate labor shortages, bringing in talent from abroad to complement
            the domestic workforce. In conclusion, addressing the need for skilled workers
            in this sector is essential for sustaining its growth and ensuring that Canada
            remains a premier destination for travelers and a great place for residents to
            live and work.
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
