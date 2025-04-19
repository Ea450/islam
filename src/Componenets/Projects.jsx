import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { projects } from '../constants/index'
import Arrow from './smallComponents/Arrow'
import { GradientLight } from './smallComponents/Benefits'
import ClipPath from './smallComponents/ClipPath'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)



const Projects = () => {
    useGSAP(() => {
        gsap.to('#project-title',
            {
                opacity: 1, y: 50, duration: 1,
                scrollTrigger: {
                    trigger: '#project-title',
                    toggleActions: 'restart reverse restart reverse',
                    start: 'top 85%'
                }
            },

        )
    })
    return (
        <div className="w-full relative container" id="projects">
            <h1 className="h1 mb-25" id="project-title">My Projects</h1>
            <div className="flex flex-wrap gap-10 mb-10 ">
                {projects.map((pro) => (
                    <div className="block relative p-0.5 bg-no-repeat md:max-w-[385px] bg-[length:100%_100%]"
                        style={{ backgroundImage: `url(${pro.backgroundUrl})` }}
                        key={pro.title}>
                        <div className="relative z-2 flex flex-col min-h-[350px] p-[38px] pointer-events-none">
                            <h5 className="text-2xl leading-normal mb-5">{pro.title}</h5>
                            <p className="font-light text-[0.875rem] leading-6 md:text-base mb-6 text-[#ADA8C3]">{pro.text}</p>
                            <a className="flex items-center mt-auto pointer-events-auto" href={pro.link} target="_blank">
                                <img src={pro.img} alt={pro.title} width={48} height={48} />
                                <p className="ml-auto font-code text-xs font-bold text-[#FFFFFF] uppercase tracking-wider">Explore More</p>
                                <Arrow />
                            </a>
                        </div>
                        {pro.light && <GradientLight />}
                        <div className="absolute inset-0.5 bg-[#0E0C15]" style={{ clipPath: "url(#benefits" }}>
                            <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity">
                                <img src={pro.img} alt={pro.title} width={380} height={362}
                                    className="w-full h-full object-cover "
                                />
                            </div>
                        </div>
                        <ClipPath />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects