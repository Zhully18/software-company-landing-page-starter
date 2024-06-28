import { FaCentos } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoIosAlbums } from "react-icons/io";
import { MdMarkEmailRead, MdLeaderboard } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";
import crm from "./Asset/crm.jpg"
import finance from "./Asset/finance.jpg"
import kitchen from "./Asset/kitchen.jpg"
import landing from "./Asset/landing.jpg"
import medical from "./Asset/medical.jpg"
import staff from "./Asset/staff.jpg"
import lady from './Asset/ladyy.jpg'
import lady2 from './Asset/laddy1.jpg'

export const services = [
    {
        icon: <FaCentos />,
        head : 'Software Development',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Cloud Solutions',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Software Consulting',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Web development',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'App Development',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Branding',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
];


export const details = [
    {
      icon: <IoCall />,
      head : 'Project Planning',
      desc : 'We collect detailed requirements from stakeholders to understand project goals, scope and constraints. We develop a detailed plan including timeline and resources and milestones',
    },
    {
      icon : <IoIosAlbums />,
      head: 'System Design',
      desc: ' We create designs specifications, including user interfaces, databases and system integration points, build prototype to visualize and gather feedback'
    },
    {
      icon: <MdMarkEmailRead />,
      head: 'Development',
      desc: 'We write actual code to implement the features and functionalities using appropriate programming languages'
    },
    {
      icon: <MdLeaderboard />,
      head : 'Testing and Deployment',
      desc: 'We conduct various testing phases including unit testing and useer acceptance testing to identify and fix bugs the deploy.'
    }
  ];

  export const projects = [
    {
      image : medical,
      title : 'Martins Hospital Managemeny',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : crm,
      title : 'Oland CRM Software',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : staff,
      title : 'Roland Staff Management',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : landing,
      title : 'Eduka Landing Page website',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : kitchen,
      title : 'Glory & Jane Kitchen',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : finance,
      title : 'Charity Bank App',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
  ];


  export const feedback =[
    {
      image: lady,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady2,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
  
  ];
  