import GlobalConfig from "@/Global.config";

import visionimg from '../../public/images/about/vision.svg'
import goalsimg from '../../public/images/about/vision.svg'
import misionimg from '../../public/images/about/vision.svg'
import valueimg from '../../public/images/about/vision.svg'

module.exports = [
  {
    id: 1,
    title: "Our Vision",
    text: `Make peoples' dreams & ambitions a reality!`,
    color: GlobalConfig.LogoBlu,
    icon: visionimg,
    alt: "Vision",
  },
  {
    id: 2,
    title: "Our Mission",
    text: `Find the best fitting Canadian job and university education opportunities for our clients across the globe.`,
    color: GlobalConfig.LogoOrg,
    icon: misionimg,
    alt: "Mission",
  },
  {
    id: 3,
    title: "Our Goals & Objectives",
    text: ``,
    color: GlobalConfig.LogoBlu,
    list1: "Change lives via great job opportunities in Canada",
    list2: "Support students' pursuit of education in Canadian universities",
    list3: "Assist expats experience a smooth transition to life in Canada",
    list4: "Foster partnerships with Canadian institutions",
    icon: goalsimg,
    alt: "Goals",
  },
  {
    id: 4,
    title: "Our Values",
    text: ``,
    color: GlobalConfig.LogoOrg,
    list1: "Integrity",
    list2: "Accountability",
    list3: "Inclusivity",
    list4: "Transparency",
    list5: "Continuous Improvement",
    icon: valueimg,
    alt: "Values",
  },
  
];
