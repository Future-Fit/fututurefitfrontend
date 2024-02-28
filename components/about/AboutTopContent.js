import GlobalConfig from "@/Global.config";

import visionimg from '@/public/images/about/vision.svg'
import goalsimg from '@/public/images/about/mission.svg'
import misionimg from '@/public/images/about/objective.svg'
import valueimg from '@/public/images/about/list-of-items.svg'

module.exports = [
  {
    id: 1,
    title: "Our Vision",
    text: `Make dreams & ambitions a reality!`,
    color: GlobalConfig.LogoBlu,
    icon: visionimg,
    alt: "Vision",
  },
  {
    id: 2,
    title: "Our Mission",
    text: `Find great job and education opportunities for our clients across the globe.`,
    color: GlobalConfig.LogoOrg,
    icon: misionimg,
    alt: "Mission",
  },
  {
    id: 3,
    title: "Our Goals & Objectives",
    text: ``,
    color: GlobalConfig.LogoBlu,
    list1: "Find workers great jobs in Canada",
    list2: "Support students learn in Canada",
    list3: "Assist expats transition to Canada",
    list4: "Build global partnerships",
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
    list4: "Continuous Improvement",
    icon: valueimg,
    alt: "Values",
  },
  
];
