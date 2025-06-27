import contact from '/contact.jpg'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const ContactMe = () => {


    return (
        <div id='contact'>
            <div className="flex flex-wrap">
                <div className="flex flex-col p-4 lg:p-8 gap-8 z-2 mt-[20%] xl:mt-[12%]">
                    <a href="https://www.facebook.com/profile.php?id=100022158557363" target="_blank"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/islamm_ahmmed74/?hl=ar" target="_blank"><FaInstagram /></a>
                    <a href="https://github.com/Ea450" target="_blank"><FaGithub /></a>
                    <a href="https://x.com/eslamAhmed424" target="_blank"><FaTwitter /></a>
                </div>
                <div className='z-2 md:p-4 mt-2 lg:p-24'>
                    <h1 className="text-gray-200 font-bold text md:text-4xl xl:text-6xl md:mb-14">Contact Me</h1>
                    <form className='flex flex-col gap-8 xl:gap-4 mt-4' action='https://formspree.io/f/xrbkrzdw' method='POST'>
                        <input type="text" placeholder='Your Name' name="name" className='border border-gray-400 rounded px-8 py-1' />
                        <input type="email" placeholder='Your Email' name="email" className='border border-gray-400 rounded px-8 py-1' />
                        <input type="number" placeholder='Phone' name="phone" className='border border-gray-400 rounded px-8 py-1 [&::-webkit-inner-spin-button]:appearance-none' />
                        <textarea placeholder='Message' className='border border-gray-400 rounded px-6 py-1 resize-none' name='message'></textarea>
                        <button className='border border-gray-400 px-4 py-2 cursor-pointer text-gray-400 rounded'>Send Message</button>
                    </form>
                </div>
                <div className="absolute">
                    <img src={contact} alt="contact" className='w-[1500px] xl:w-[2000px] h-[410px] md:h-[500px] lg:h-[550px]' />
                </div>
            </div>
        </div>
    )
}

export default ContactMe