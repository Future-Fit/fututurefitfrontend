import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const VisitBody = () => {

  return (
    <div className="auto-container" style={{
      display: "grid", justifyContent: "center", alignContent: "center",
    }}>
      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: "0 20px 20px 20px"
      }}>
        <div className="list" >
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Why Visit Canada?
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada has become a popular destination for individuals looking to study and
            work abroad due to a combination of factors ranging from quality of life to
            economic opportunities. Here are several reasons why people choose Canada for
            their studies and work: <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Quality of Life
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada is renowned for its safety, high quality
            of life, and inclusivity. It's consistently ranked among the best places to
            live in the world. Canada's multicultural society welcomes
            people from various backgrounds, making it easier for international students
            and workers to adapt and find communities that feel like home.
            <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Immigration Opportunities
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Pathways to Permanent Residency Canada has several immigration pathways for
            international students and workers, including the Canadian Experience Class
            and various Provincial Nominee Programs, which consider Canadian education
            and work experience as valuable factors for permanent residency applications. <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Natural Beauty and Lifestyle
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            From the Rocky Mountains in Alberta to the Niagara Falls in Ontario, Canada
            offers breathtaking natural landscapes for exploration and adventure.
            Canada's cities are known for their
            cleanliness, vibrant cultural scenes, and friendly communities. Whether one
            prefers the bustling life of cities like Toronto and Vancouver or the quieter
            charm of smaller towns, Canada has something for everyone.
            <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Economic Stability
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's economy is stable and offers various employment opportunities in
            sectors such as technology, healthcare, natural resources, and finance.
            Choosing to study and work in Canada can be a transformative experience that
            offers high-quality education and opportunities to gain valuable work
            experience and immerse oneself in a culturally rich and supportive environment.
            <br />
          </h4>
        </div>
      </div>

      <p>For more information, visit the Government of Canada’s website at:
        <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html" target="_blank"
          style={{ color: GlobalConfig.Fgr1Clr }}> https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html</a>
      </p>
      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
      </div>
    </div >
  );
};

export default VisitBody;
