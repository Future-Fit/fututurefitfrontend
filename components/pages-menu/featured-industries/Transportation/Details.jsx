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
              src="/images/icons/Delivery-icon-blue.svg"
              alt="Transportation"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
          </div>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            The Industry
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's transportation and logistics industry is another pivotal sector that plays a
            critical role in the country's economy, facilitating trade, enhancing competitiveness,
            and enabling the efficient movement of goods and people. The need for skilled transportation
            and logistics workers in Canada is driven by several factors, including the vast geography
            of the country, the importance of international trade to the economy, and the evolution
            of global supply chains.
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Strength of the Industry
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            <u>Diverse Modes of Transportation:</u> Canada boasts a comprehensive transportation
            system that includes road, rail, air, and maritime transport. This diversity enables
            the efficient movement of goods across the country and beyond, supporting domestic and
            international trade.<br /><br />
            <u>Strategic Location:</u> Canada's strategic location provides access to the Atlantic,
            Pacific, and Arctic oceans, making it a key player in international shipping and logistics.
            The country's ports and transportation infrastructure are vital links in global supply
            chains.<br /><br />
            <u>Investment in Infrastructure:</u> The Canadian government recognizes the
            importance of the transportation and logistics sector and invests in infrastructure
            to support its growth. Initiatives like the National Trade Corridors Fund aim to enhance
            Canada's transportation networks and facilitate trade.<br /><br />
            <u>Skilled Workforce:</u> Despite the current demand for more workers, Canada has a
            skilled workforce capable of managing complex logistics operations. Education and training
            programs are in place to equip new entrants with the necessary skills to succeed in the
            industry.<br /><br />
            <u>Innovation and Research:</u> Canada is home to innovative companies and research
            institutions focused on improving transportation and logistics. These efforts
            contribute to making the sector more efficient, competitive, and sustainable.
            <br /><br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Outlook
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's geography necessitate a robust transportation and logistics network to
            connect various regions. And, as one of the world's largest trading nations,
            Canada relies on its transportation and logistics industry to facilitate the import
            and export of goods with key partners such as the United States, China, and the European
            Union. The industry is undergoing significant transformations due to technology and
            advancements in supply chain management. Lastly, sustainability and regulatory compliance
            require that the transportation and logistics sector is at the forefront of adopting
            eco-friendly practices. <br /><br />

            Workers in this industry are vital to the econonmy. They run the smooth operation of
            supply chains, manage the logistics of international trade, and ensure that Canada
            remains competitive in the global market by implementing green initiatives and
            complying with environmental regulations. Therefore, there is a growing demand
            for skilled workers who can adapt to new technologies, optimize logistics operations,
            and improve efficiency.
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
