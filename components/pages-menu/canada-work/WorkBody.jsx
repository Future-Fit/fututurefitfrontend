import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const WorkBody = () => {

  return (
    <div className="auto-container" style={{
      display: "grid", justifyContent: "center", alignContent: "center",
    }}>
      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: "0 20px 20px 20px"
      }}>
        <div className="list" >
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Why Work in Canada?
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada is renowned for its diversity and inclusiveness, making it a prime
            destination for skilled workers from around the world. The country prides
            itself on being a multicultural mosaic, where people of all backgrounds are
            embraced and celebrated. This inclusive atmosphere extends to the workplace,
            where policies and practices promoting diversity and equality are increasingly
            the norm. As a skilled worker in Canada, you would be entering a society that
            values and leverages diverse perspectives, which can enhance creativity and
            innovation in your field. Furthermore, Canada's commitment to human rights and
            equality means you can expect a working environment that is not only respectful
            but also supportive of your professional and personal growth.
            <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Economic and Job Opportunities
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's economy is robust and offers a wide array of opportunities for
            skilled workers. With a focus on industries such as technology, healthcare,
            engineering, and natural resources, Canada is in constant demand for
            professionals with specialized skills. The country's economic policies are
            designed to attract and retain talent, offering competitive salaries,
            benefits, and opportunities for career advancement. Additionally, government
            programs aimed at skilled workers, including express entry and provincial
            nominee programs, facilitate the immigration process, making it easier for
            you to start your new life in Canada. <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            High Quality of Life
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Living in Canada means enjoying one of the highest qualities of life in the
            world. The country is known for its clean environment, safe cities, excellent
            healthcare system, and a strong education system. These factors contribute
            significantly to the well-being and satisfaction of residents, making Canada
            an attractive place for skilled workers and their families. Whether you are
            interested in the vibrant culture of its cities or the serene beauty of its
            rural areas, Canada offers a balanced lifestyle that can accommodate various
            preferences and needs. Additionally, Canada's emphasis on work-life balance
            ensures that you have ample time to explore and enjoy all that the country
            has to offer.
            <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Progressive Immigration Policies
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada's immigration policies are designed to be welcoming and accessible for
            skilled workers. The government recognizes the importance of immigrants in
            contributing to the economic and cultural fabric of the country and has
            implemented programs to support their integration and success. These policies
            not only make it feasible for skilled workers to move to Canada but also
            provide pathways to permanent residency and citizenship. With these progressive
            policies, Canada is not just a place to work; it's a place where you can build a
            life and potentially call home. This supportive approach to immigration highlights
            Canada's commitment to building a strong, diverse, and inclusive society.
            <br />
          </h4>
        </div>
      </div>

      <p>For more information, visit the Government of Canada’s website at:
        <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html" target="_blank"
          style={{ color: GlobalConfig.Fgr1Clr }}> https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html</a>
      </p>
      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
      </div>
    </div >
  );
};

export default WorkBody;
