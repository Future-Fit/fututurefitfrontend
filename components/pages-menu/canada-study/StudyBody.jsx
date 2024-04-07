import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const StudyBody = () => {

  return (
    <div className="auto-container" style={{
      display: "grid", justifyContent: "center", alignContent: "center",
    }}>
      <div className="row" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: "0 20px 20px 20px"
      }}>
        <div className="list" >
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Why Study in Canada?
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Choosing Canada as your destination for international studies is an excellent
            decision for several reasons. There are multiple factors that are a part of
            the essence of studying in Canada including opportunity, quality of life,
            diversity, and experience. <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Academic Excellence
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada is home to some of the world’s top universities, known for their
            research and innovation. The Canadian education system is rigorous and
            respected globally, ensuring that students gain a quality education that
            opens doors worldwide. Whether you’re pursuing science, arts, technology, or
            business, Canadian institutions provide a wide range of programs to match your
            aspirations and career goals.
            <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            A Mosaic of Cultures
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            When you step into Canada, you step into a vibrant tapestry of cultures. This
            multicultural nation not only welcomes diversity but also celebrates it. As an
            international student, you’ll find communities from all corners of the globe,
            making it easier to find a sense of belonging far from home. This diversity
            enriches the classroom discussions, providing multiple perspectives and
            fostering a global mindset. <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            A Land of Opportunities
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada offers abundant opportunities for students both inside and outside
            the classroom. Internship programs, co-op terms, and work-study options
            provide practical experience and a chance to apply your learning in real-world
            settings. The country’s strong economy and its industries’ close ties with the
            academic world mean that you can look forward to fruitful career opportunities
            upon graduation.
            <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Life Beyond Books
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Beyond its academic prowess, Canada is known for its breathtaking landscapes
            and vibrant cities. From the majestic Rocky Mountains and serene lakes to
            bustling urban centers like Toronto and Vancouver, Canada offers a quality of
            life that is hard to beat. You can immerse yourself in an array of activities,
            from skiing and hiking to enjoying the arts and culinary delights. This balance
            between a stimulating study environment and an engaging social life can make your
            educational journey truly enriching.
            <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Safe and Welcoming
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            Canada consistently ranks as one of the safest countries in the world. The
            welcoming nature of Canadians and the inclusive policies of its institutions
            mean you’ll be studying in a supportive and safe environment. The respect for
            individual rights, freedom, and cultural differences is ingrained in the
            Canadian ethos, making it a comfortable place for students from all
            backgrounds.
            <br />
          </h4>
          <h4 style={{ fontWeight: "500", color: GlobalConfig.Fgr1Clr, textAlign: "left", padding: "10px 0px" }}>
            Path to Permanent Residency
          </h4>
          <h4 style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            For many international students, the appeal of studying in Canada is also in 
            the post-graduation opportunities. The country offers various programs for 
            students who wish to stay and work after their studies, with pathways to 
            permanent residency and eventually citizenship. This is a testament to 
            Canada’s commitment to attracting and retaining international talent.
            <br />
          </h4>
        </div>
      </div>

      <p>For more information, visit the Government of Canada’s website at:
        <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html" target="_blank"
          style={{ color: GlobalConfig.Fgr1Clr }}> https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html</a>
      </p>
      <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
      </div>
    </div >
  );
};

export default StudyBody;
