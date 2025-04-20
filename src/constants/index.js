import html from '/html.png'
import css from '/css.jpg'
import js from '/js.png'
import react from '/react.png'
import tailwind from '/tailwind.png'
import bootstrap from '/bootstrap.png'
import git from '/git-logo.webp'
import next from '/next.jpeg'
import brainwave from '/videos/Brainwave.mp4'
import iphone from '/videos/iphone.mp4'
import realstate from '/videos/realstate.mp4'
import todo from '/videos/todo.mp4'
import netflix from '/videos/netflix.mp4'
import brainwaveBG from '/background/Brainwave.png'
import netflixBG from '../../public/background/netflix.jpg'
import todoBG from '../../public/background/todo.jpg'
import realstateBG from '../../public/background/realState.jpg'
import appleBG from '../../public/background/apple.jpg'
import interview from '../../public/background/Interview.png'



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
        id: 1,
        video: brainwave,
        videoDuration: 3.5,
    },
    {
        id: 2,
        video: realstate,
        videoDuration: 3,
    },
    {
        id: 3,
        video: iphone,
        videoDuration: 4.4,
    },
    {
        id: 4,
        video: todo,
        videoDuration: 3,
    },
    {
        id: 5,
        video: netflix,
        videoDuration: 3.63,
    },
];
export const projects = [
    {
        title: "Interview Platform",
        img: interview,
        backgroundUrl: '../../public/card-2.svg',
        text: "​TThe website is an AI-powered interview prep platform that offers personalized feedback, mock interviews, and custom practice questions. It helps users improve their interview skills with real-time analytics and answer refinement tools.",
        link: "https://interview-platform-zbo2.vercel.app/",
        light: true,
    },
    {
        title: "BrainWave",
        img: brainwaveBG,
        backgroundUrl: '../../public/card-1.svg',
        text: "​The Brainwave web app is an AI-powered productivity tool that leverages natural language processing to understand user queries and provide accurate ",
        link: "https://brainwave-virid-six.vercel.app/",
        light: false,
    },
    {
        title: "Apple Clone",
        img: appleBG,
        backgroundUrl: '../../public/card-2.svg',
        text: "The Apple Clone website is a front-end replica of Apple's official homepage, showcasing products like the iPhone, MacBook, and Apple Watch with sleek visuals and promotional banners.  ",
        link: "https://appleclone-liart.vercel.app/",
        light: true,
    },
    {
        title: "Netflix Clone",
        img: netflixBG,
        backgroundUrl: '../../public/card-3.svg',
        text: "Netflix clone showcasing a modern UI with featured content banners and categorized movie carousels. Built with React and styled using Tailwind CSS, it offers a responsive design that emulates the look and feel of the original service. ",
        link: "https://netflix-clone-pied-tau.vercel.app/",
        light: false,
    },
    {
        title: "RealState Clone",
        img: realstateBG,
        backgroundUrl: '../../public/card-4.svg',
        text: "​The Real State website is a modern real estate platform showing visuals and a user-friendly interface. Built using Next.js and Tailwind CSS ",
        link: "https://real-state-cyan-alpha.vercel.app/",
        light: false,
    },
    {
        title: "Todo App",
        img: todoBG,
        backgroundUrl: '../../public/card-5.svg',
        text: "​The Todo App is a minimalist task management tool that allows users to create, edit, and track their daily tasks efficiently. Built with modern web technologies, it offers a clean and responsive interface for seamless productivity.",
        link: "https://todo-mu-two-51.vercel.app/",
        light: false,
    },
]
