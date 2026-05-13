import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

import cloudlogo from "../assets/company/cloudlogo.png";
import fullstack from "../assets/company/fullstack.png";
import mobilelogo from "../assets/company/mobilelogo.png";
import weblogo from "../assets/company/weblogo.png";

import radhe from "../assets/radhe.png";
import nexusgenesis from "../assets/nexusgenesis.png";
import devnikghana from "../assets/devnikghana.png";
import swastik from "../assets/swastik.png";
import detectelectronics from "../assets/detectelectronics.png";
import shreegraphics from "../assets/shreegraphics.png";

import abhijeet from "../assets/abhijeet.png";
import suhas from "../assets/suhas.png";
import aayush from "../assets/aayush.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developers",
    icon: web,
  },
  {
    title: "React Native Developers",
    icon: mobile,
  },
  {
    title: "Backend Developers",
    icon: backend,
  },
  {
    title: "Cloud Services",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Services",
    company_name: "SmartMatrix",
    icon: weblogo,
    iconBg: "#383E56",
    date: "",
    points: [
      "Delivered responsive, high-performance websites for clients across retail, education, and hospitality sectors.",
      "Built custom UI/UX designs using HTML, CSS, JavaScript, and React.",
      "Established core development standards and best practices for the team.",
      "Achieved 95%+ client satisfaction rate on all delivered projects.",
    ],
  },
  {
    title: "Mobile App Development",
    company_name: "SmartMatrix",
    icon: mobilelogo,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Expanded service offerings to include cross-platform mobile app development using React Native.",
      "Delivered 10+ mobile applications for startups and SMEs across various industries.",
      "Integrated REST APIs, push notifications, and third-party SDKs into mobile solutions.",
      "Reduced client time-to-market by 40% through agile development processes.",
    ],
  },
  {
    title: "Full Stack & Backend Solutions",
    company_name: "SmartMatrix",
    icon: fullstack,
    iconBg: "#383E56",
    date: "",
    points: [
      "Scaled backend infrastructure using Node.js, MongoDB, and cloud platforms.",
      "Built scalable REST APIs and microservices powering client applications.",
      "Implemented secure authentication, data management, and real-time features.",
      "Onboarded enterprise clients with end-to-end full stack development solutions.",
    ],
  },
  {
    title: "Cloud & Enterprise Services",
    company_name: "SmartMatrix",
    icon: cloudlogo,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Launched cloud deployment and DevOps services for enterprise-level clients.",
      "Managing CI/CD pipelines, containerized deployments using Docker and cloud platforms.",
      "Providing ongoing maintenance, performance optimization, and 24/7 support.",
      "Expanding into AI-integrated solutions and smart automation for business clients.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "SmartMatrix delivered our real estate website beyond our expectations. The design is stunning, the performance is excellent, and our leads have increased significantly since launch.",
    name: "Abhijeet Talegaonkar",
    designation: "Director",
    company: "Radhe Group",
    image: abhijeet,
  },
  {
    testimonial:
      "Working with SmartMatrix was a seamless experience. They understood our vision perfectly and built a platform that truly represents our brand. Highly professional team!",
    name: "Suhas",
    designation: "Founder",
    company: "Nexus Genesis",
    image: suhas,
  },
  {
    testimonial:
      "SmartMatrix transformed our online presence completely. Our website now attracts quality clients and the response from customers has been overwhelming. Truly a game changer!",
    name: "Aayush",
    designation: "CEO",
    company: "Devnik Ghana",
    image: aayush,
  },
];

const projects = [
  {
    name: "Radhe Group",
    description:
      "A premium real estate web platform for Radhe Group, showcasing luxury residential projects with immersive UI, project galleries, and seamless lead generation for homebuyers.",
    tags: [],
    image: radhe,
    source_code_link: "https://radhedevelopers.in/",
  },
  {
    name: "Nexus Genesis",
    description:
      "A modern real estate website for Nexus Genesis featuring premium 2, 3 & 4 BHK homes in Pune. Built with smooth animations, location maps, gallery, and inquiry forms to drive conversions.",
    tags: [],
    image: nexusgenesis,
    source_code_link: "https://nexusgenesis.co.in/",
  },
  {
    name: "Devnik Ghana",
    description:
      "A full-featured e-commerce and product showcase platform for Devnik Ghana — a trusted IT & electronics supplier in Accra. Built for performance, reliability, and a seamless shopping experience.",
    tags: [],
    image: devnikghana,
    source_code_link: "https://www.devnikghana.com/",
  },
  {
    name: "Swastik Group",
    description:
      "A high-impact real estate website for Swastik Realty Group, featuring stunning project visuals, gallery, career section, and a seamless contact experience to attract premium homebuyers.",
    tags: [],
    image: swastik,
    source_code_link: "https://swastikrealtygroup.com/",
  },
  {
    name: "Detect Electronics",
    description:
      "A professional corporate website for Detect Electronics Systems Pvt. Ltd., showcasing their telecom infrastructure expertise with 2,200+ towers, project portfolio, and management profiles.",
    tags: [],
    image: detectelectronics,
    source_code_link: "https://www.detectelectronics.com/",
  },
  {
    name: "Shree Graphics",
    description:
      "A modern e-commerce and branding platform for Shree Graphics Design — trusted by 500+ brands across India for custom embroidery, logo design, and precision-crafted branding solutions.",
    tags: [],
    image: shreegraphics,
    source_code_link: "https://shreegraphicsdesign.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
