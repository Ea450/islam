import html from '/html.png'
import css from '/css.jpg'
import js from '/js.png'
import react from '/react.png'
import tailwind from '/tailwind.png'
import bootstrap from '/bootstrap.png'
import git from '/git-logo.webp'
import next from '/next.jpeg'
import brainwave from '/videos/Brainwave.mp4'
import easyShop from '/videos/easyshop.mp4'
import travelAgency from '/videos/travelagency.mp4'
import interviewplatform from '/videos/interviewplatform.mp4'
import iphone from '/videos/iphone.mp4'
import brainwaveBG from '/background/Brainwave.png'
import easyshop from '/background/easyshop.png'
import converso from '/background/converso.svg'
import travelagency from '/background/travelagency.webp'

import appleBG from '/background/apple.jpg'
import interview from '/background/Interview.png'



export const navIcons = [
    {
        id: 1,
        href: '#home',
        text: 'Home'
    },
    {
        id: 2,
        href: '#highlights',
        text: 'HighLights'
    },
    {
        id: 3,
        href: '#skills',
        text: 'Skills'
    },
    {
        id: 4,
        href: '#projects',
        text: 'Projects'
    },
    {
        id: 5,
        href: '#contact',
        text: 'Contact Me'
    }

];
export const skills = [
    {
        id: 0,
        title: "html",
        icon: html,
        width: 48,
        height: 36,
    },
    {
        id: 1,
        title: "css",
        icon: css,
        width: 48,
        height: 36,
    },
    {
        id: 2,
        title: "Java Script",
        icon: js,
        width: 48,
        height: 40,
    },
    {
        id: 3,
        title: "react",
        icon: react,
        width: 50,
        height: 35,
    },
    {
        id: 4,
        title: "tailwind",
        icon: tailwind,
        width: 48,
        height: 34,
    },
    {
        id: 5,
        title: "bootstrap",
        icon: bootstrap,
        width: 48,
        height: 34,
    },
    {
        id: 6,
        title: "next",
        icon: next,
        width: 48,
        height: 34,
    },
    {
        id: 7,
        title: "git",
        icon: git,
        width: 48,
        height: 34,
    },

];
export const highlightVideos = [
    {
        id: 2,
        video: brainwave,
        videoDuration: 3.5,
    },
    {
        id: 1,
        video: easyShop,
        videoDuration: 2,
    },
    {
        id: 3,
        video: travelAgency,
        videoDuration: 3.5,
    },
    {
        id: 4,
        video: interviewplatform,
        videoDuration: 2,
    },
    {
        id: 5,
        video: iphone,
        videoDuration: 3,
    },

];
export const projects = [
    {
        title: "EasyShop",
        img: easyshop,
        backgroundUrl: '/card-3.svg',
        text: "The EasyShop site is an e-commerce platform featuring multiple product categories like laptops, shoes, earbuds, and more—all curated in a clean. Branding is modern and minimal with a focus on usability—clean typography, clear pricing, “Add To Cart” buttons, responsive layout",
        link: "https://easy-shop-zibs.vercel.app/",
        light: false,
    },
    {
        title: "Converso",
        img: converso,
        backgroundUrl: '/card-1.svg',
        text: "Converso is a modern chat app UI with a clean and responsive design. It features real-time messaging, typing indicators, and light/dark modes. The interface includes a contact list, message history, and quick-reply options for a smooth user experience.",
        link: "https://converso-kappa.vercel.app/",
        light: false,
    },
    {

        title: "Interview Platform",
        img: interview,
        backgroundUrl: '/card-2.svg',
        text: "​TThe website is an AI-powered interview prep platform that offers personalized feedback, mock interviews, and custom practice questions. It helps users improve their interview skills with real-time analytics and answer refinement tools.",
        link: "https://interview-platform-zbo2.vercel.app/",
        light: true,
    },
    {
        title: "Travel Agency",
        img: travelagency,
        backgroundUrl: '/card-3.svg',
        text: "The website is a modern travel agency landing page offering vacation packages and tours. It features a clean design with destination highlights, customer reviews, and booking options. The layout is responsive and user-friendly, focusing on inspiring travel experiences. ",
        link: "https://travel-agency-pi5a.vercel.app/",
        light: false,
    },

    {
        title: "BrainWave",
        img: brainwaveBG,
        backgroundUrl: '/card-1.svg',
        text: "​The Brainwave web app is an AI-powered productivity tool that leverages natural language processing to understand user queries and provide accurate ",
        link: "https://brainwave-virid-six.vercel.app/",
        light: false,
    },
    {
        title: "Apple Clone",
        img: appleBG,
        backgroundUrl: '/card-2.svg',
        text: "The Apple Clone website is a front-end replica of Apple's official homepage, showcasing products like the iPhone, MacBook, and Apple Watch with sleek visuals and promotional banners.  ",
        link: "https://appleclone-liart.vercel.app/",
        light: true,
    },

]
