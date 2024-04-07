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
              src="/images/icons/Construction-icon.svg"
              alt="Construction"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Overview of the Industry
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's construction industry plays a pivotal role in the nation's economy,
            contributing significantly to employment and economic growth. This sector is
            characterized by its dynamic nature, adapting to changes in technology,
            environmental standards, and the evolving needs of the population. As Canada
            continues to expand its infrastructure, residential, and commercial buildings,
            the demand for skilled construction workers is more pronounced than ever. <br /><br />

            The industry is driven by several key factors:
            <ul className="list-style-five" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify", left: "5px", paddingLeft: "17px" }}>
              <li><u>Infrastructure Projects:</u> Large-scale infrastructure projects,
                such as the expansion of transportation networks, upgrading of utilities,
                and development of green energy facilities, require a substantial workforce.</li>
              <li><u>Housing Demand:</u> With a growing population and the need for sustainable
                housing solutions, the residential construction sector is booming, necessitating
                more labor to meet construction deadlines.</li>
              <li><u>Renovation and Maintenance:</u> The ongoing need to maintain and
                upgrade existing structures, including historic buildings, commercial real
                estate, and public facilities, contributes to the constant demand for
                skilled workers. </li>
              <li><u>Technological Advancements:</u> The integration of new technologies
                into construction processes, including Building Information Modeling (BIM),
                green construction methods, and automated machinery, requires workers with
                specialized skills. </li>
            </ul><br />
            The construction industry's strength lies in its comprehensive approach to
            building and development, emphasizing sustainability, safety, and innovation.
            The sector's resilience is evident in its ability to adapt to economic cycles,
            leveraging public and private investment to sustain growth. The industry's 
            commitment to adopting green building practices and reducing carbon footprints 
            further solidifies its pivotal role in Canada's economy.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            The Job Market
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            This industry is a significant employment generator, offering jobs to hundreds 
            of thousands of Canadians across the country, requiring a diverse range of 
            workers, including skilled tradespeople such as electricians, plumbers, 
            carpenters, masons, welders, and HVAC technicians. General laborers who  
            perform various tasks are crucial for the efficient execution of projects. Project 
            managers with the ability to oversee projects, ensure deadlines and budgets are met,
            and are vital for the successful completion of projects. Engineers and architects 
            are professionals who design the infrastructure and buildings, ensuring they are safe, 
            functional, and aesthetically pleasing. Equipment operators who operate the heavy 
            machinery, such as cranes, bulldozers, and excavators, are also very essential for 
            construction projects and, finally, safety officers who specialize in workplace 
            safety ensure compliance with regulations and promote a safe working environment. <br/><br/>

            In conclusion, Canada's construction industry is a robust and vital sector of 
            the economy, marked by a strong demand for a wide array of construction workers. 
            The continuous need for infrastructure development, coupled with the push towards 
            sustainable construction practices, ensures that the industry will remain a 
            significant employer and contributor to Canada's economic health for the 
            foreseeable future.


          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>

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
