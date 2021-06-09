import emoji from "react-easy-emoji";
import agrific from "./assets/images/agrific.png";
import kudi from "./assets/images/kudi.png";
import duro from "./assets/images/duro.jpg";
import grandilo from "./assets/images/grandilo.jpg";
import next from "./assets/images/next.svg";
import redux from "./assets/images/redux.png";
import tailwind from "./assets/images/tailwind.png";
import scss from "./assets/images/scss.png";
import unilag from "./assets/images/unilag.png";
import treyda from "./assets/images/treyda.png";

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Abimbola",
  title: "Hi there, I'm Abimbola",
  subTitle: emoji(
    "I am a solution driven frontend developer that has passion for creating intuitive, dynamic user experiences with experience in building Web applications with JavaScript / Reactjs and some really cool libraries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1h38xrmnfw4jCKBmtCjt5ltO8WLXn_T1Z/view?usp=sharing",
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
  subTitle: "INNOVATIVE FRONTEND DEVELOPER THAT LOVES BRINGING IDEAS TO LIFE",
  skills: [
    emoji( "⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
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
      company: "Kudi Inc.",
      companylogo: kudi,
      date: "May 2021 – Present",
      desc: "Kudi is a financial technology organization that aims at making financial services accessible and affordable to all Africans across the world, through its agent network, especially  the underbanked and unbanked.",
      descBullets: ["Currently working on the Kudi Market Place product"]
    },
    {
      role: "Frontend Engineer",
      company: "DuroNetworks",
      companylogo: duro,
      date: "July 2020 – Date",
      desc: "DuroNetworks is a financial technology organization that provides fast and convenient transaction. Worked on the following products alongside team members from scratch.",
      descBullets: [
        "GetriPay - Provides users with bank accounts and has fetaures of inter and intra bank transfers, bill payments(airtime, data, cable tv etc), loans, bulk payments.",
        "GetriSave - GetriSave allows users to cultivate an healthy savings habit either through indiviual savings, group savings or by enabling auto save.",
        "GetriVest -GetriVest allows user invest in a particular product for a given amount of time.",
        "GetriShop - Provides all the features of a virtual shop you can think of"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Grandilo Technology",
      companylogo: grandilo,
      date: "Dec 2019 – Mar 2020",
      desc: "it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed, enhanced, mainteined the front end functionalites of website",
        "Developed about 3 websites during my time there"
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
        "Agriifc is a B2B2C platform aiming to be a comprehensive trade hub that connects Nigeria farm producers and agro-commodity businesses with local and international buyers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://agrific.co/"
        }
      ]
    },
    {
      image: treyda,
      projectName: "Treyda - Still in develpoment",
      projectDesc:
        "Treyda saves you time. Connects you to thousands of vetted agribusinesses across africa and facilitates your payments"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234-809259480",
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
