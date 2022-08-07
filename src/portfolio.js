import emoji from "react-easy-emoji";
import agrific from "./assets/images/agrific.png";
import kudi from "./assets/images/kudi.png";
import traktion from "./assets/images/traktion.png";
import duro from "./assets/images/duro.jpg";
import grandilo from "./assets/images/grandilo.jpg";
import next from "./assets/images/next.svg";
import redux from "./assets/images/redux.png";
import tailwind from "./assets/images/tailwind.png";
import scss from "./assets/images/scss.png";
import unilag from "./assets/images/unilag.png";
//import treyda from "./assets/images/treyda.png";

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Abimbola",
  title: "Hi there, I'm Abimbola",
  subTitle: emoji(
    "I am a solution-driven frontend engineer with a passion for creating intuitive and dynamic user experience. I have competence in building web applications with JavaScript / Reactjs and some really cool libraries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ms2pO5aIxg-WXcy_xAfrB-H9VTdsdNj2/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AbimbolaBakare",
  linkedin: "https://www.linkedin.com/in/abimbola-bakare-470784b3/",
  yahoo: "deomolara@yahoo.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Innovative frontend engineer that loves bringing ideas to life",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Integration of REST APIS to make application functional"),
    emoji("⚡Responsive designs and mobile first applications")
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University Of Lagos",
      logo: unilag,
      subHeader: "Bachelor of Science in Physics Education",
      duration: "2013 - 2017"
    }
  ]
};

// Proficient Stack

const techStack = {
  experience: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "SCSS",
      image: scss
    },
    {
      skillName: "Tailwind",
      image: tailwind
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux",
      image: redux
    },
    {
      skillName: "Nextjs",
      image: next
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Engineer",
      company: "Traktion, UK.",
      companylogo: traktion,
      date: "November 2021 – Present",
      desc: "raktion gives you on-demand access to the best verified marketing talent",
      descBullets: ["Traktion web application"]
    },
    {
      role: "Frontend Engineer",
      company: "Kudi Inc.",
      companylogo: kudi,
      date: "May 2021 – November 2021",
      desc: "Kudi is a financial technology organization that aims at making financial services accessible and affordable to all Africans across the world, through its agent network, especially  the underbanked and unbanked.",
      descBullets: ["Currently working on Kudi Market Place product"]
    },
    {
      role: "Frontend Engineer",
      company: "DuroNetworks",
      companylogo: duro,
      date: "July 2020 – June 2021",
      desc: "DuroNetworks is a financial technology organization that provides fast and convenient transaction. Worked on the following products alongside team members from scratch.",
      descBullets: [
        "GetriPay - Provides users with bank accounts and has features of inter and intra bank transfers, bill payments(airtime, data, cable tv etc), loans, qr payments, bulk payments."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Grandilo Technology",
      companylogo: grandilo,
      date: "Dec 2019 – Mar 2020",
      desc: "Grandilo is a software development company",
      descBullets: [
        "Developed, enhanced and maintained front end functionalites of website",
        "Developed 3 responsive websites"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects worked on

const bigProjects = {
  title: "Client's Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: agrific,
      projectName: "Agrific",
      projectDesc:
        "Agrifc is a B2B2C platform aiming to be a comprehensive trade hub that connects Nigeria farm producers and agro-commodity businesses with local and international buyers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://agrific.co/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234-8092592480",
  email_address: "deomolara@yahoo.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo
};
