import { BiMenuAltRight } from 'react-icons/bi'
import github from '../../public/github.png'
import { navIcons } from '../constants'
import { useState } from 'react'
import NavMenu from './NavMenu'

const Navbar = () => {

    const [showIcons, setShowIcons] = useState(false);
    return (
        <div>
            <nav className="h-4 mt-4 py-4 sm:px-4 px-4 flex items-center">
                <div className="flex w-full">
                    <h1 className='flex items-center text-blue-400 font-semibold text-2xl'>Eslam</h1>
                    <div className="flex flex-1 justify-center max-sm:hidden">
                        <ul className='hidden sm:flex justify-between items-center flex-wrap text-gray-400'>
                            {navIcons.map((nav) => (
                                <li key={nav.id} className="p-6 md:p-8 text-[12px] lg:text-sm cursor-pointer  hover:text-blue-400 transition-all">
                                    <a href={nav.href}>{nav.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center max-sm:justify-end max-sm:flex-1 space">
                        <div className='flex items-center gap-2'>
                            <BiMenuAltRight className='cursor-pointer sm:hidden size-6' onClick={() => setShowIcons(!showIcons)} />
                            <a href="https://github.com/" target='_blank'><img src={github} alt="logo" width={32} height={32} /></a>
                        </div>
                    </div>
                </div>
            </nav>
            {showIcons && <NavMenu setShowIcons={setShowIcons} />}
        </div>
    )
}

export default Navbar