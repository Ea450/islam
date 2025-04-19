import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import brain from '../../public/brainwave.svg'
import { skills } from '../constants'

const Skills = () => {
    useGSAP(() => {
        gsap.to('#title',
            {
                opacity: 1, y: 50, duration: 1,
                scrollTrigger: {
                    trigger: '#title',
                    toggleActions: 'restart reverse restart reverse',
                    start: 'bottom 90%'
                }
            },
        )
        // gsap.to('#li-img', { y: -65, duration: 2 })
        gsap.to('#li-img',
            {
                y: -65, duration: 2,
                scrollTrigger: {
                    trigger: '#title',
                    toggleActions: 'restart reverse restart reverse',
                    start: 'top 85%'
                }
            },
        )
    })
    return (
        <div className="w-full h-[600px]" id="skills">
            <h1 className="h1 mb-5 " id="title">My Skills</h1>
            <div className="relative flex w-[300px] md:w-[400px] aspect-square border border-[#252134] rounded-full -translate-x-1/2 scale:75 md:scale-100 left-1/2 mt-20">
                <div className="flex w-50 md:w-70 aspect-square border border-[#252134] m-auto rounded-full">
                    <div className="w-[100px] aspect-square m-auto p-4 rounded-full">
                        <div className="flex items-center justify-center w-full h-full bg-[#0E0C15] rounded-full">
                            <img src={brain} alt="brain" width={48} height={48} />
                        </div>
                    </div>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={skill.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                                <div className={`hover:*:opacity-100 relative top-10 flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-[#444] rounded-full hover:-top-0.25 hover:not-first:opacity-100 -rotate-${index * 45}`} id="li-img">
                                    <img src={skill.icon} alt="" width={skill.width} height={skill.height} className="rounded-full hover:w-[4rem]" />
                                    <div className=" text-gray-300 absolute -top-12 text-[15px] opacity-0">{skill.title}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Skills