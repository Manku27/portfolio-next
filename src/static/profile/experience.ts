import TechMahindra from "../images/experience/TechMahindra.jpg";
import PwC from "../images/experience/PwC.jpg";
import Infosys from "../images/experience/Infosys.jpg";
import Siemens from "../images/experience/Siemens.jpg";

import University from "../images/experience/University.jpg";

export interface ExperienceListItem {
  icon: any;
  name: string;
  period: string;
  isCurrent?: boolean;
  position: string;
  experience: string[];
}

export const experienceList: ExperienceListItem[] = [
  {
    icon: TechMahindra,
    name: "Tech Mahindra",
    period: "September 2023 - Present",
    isCurrent: true,
    position: "Senior Software Engineer",
    experience: [
      "Responsible for the handling and maintaining existing UI infrastructure and extending new features.",
      "Shaved off several minutes in the CI upon joining the client team by fixing dependency management.",
    ],
  },
  {
    icon: PwC,
    name: "PwC India",
    period: "September 2021 - September 2023",
    position: "Technology Consultant",
    experience: [
      "Responsible for architecture, design changes, implementation and deployment of several solutions.",
      "Lead a team of freshers and worked with senior leadership to help clients.",
      "Made POCs for prospective clients.",
    ],
  },
  {
    icon: Infosys,
    name: "Infosys Ltd",
    period: "November 2020 - August 2021",
    position: "System Engineer",
    experience: [
      "Part of the Finacle Treasury team, responsible for writing scripts in Finacle scripts.",
    ],
  },
  {
    icon: Siemens,
    name: "Siemens",
    period: "June 2018 - Julu 2018",
    position: "Summer Intern",
    experience: [
      "Experienced the culture of Siemens and how the sales team drives their assets to convert leads to clients.",
    ],
  },
];

export const universityDetails = {
  icon: University,
  name: "Jadavpur University",
  programme: "Bachelor of Engineering (BE) - Electrical Engineering",
  term: "2016-2020",
};
