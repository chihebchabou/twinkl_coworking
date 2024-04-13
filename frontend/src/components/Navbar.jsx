import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="relative container mx-auto p-6">
            {/* Flex container */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="pt-2 text-2xl">
                    <img className='w-20 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXa2nDnEvDX38UwW8xvmzh7-5GMYS5c0iUCBulvv2Lcx5XRQ3PYdthgJDzWUsOD-zbpY&usqp=CAU" alt="" />
                </div>
                {/* Menu Items */}
                <div className="hidden md:flex space-x-9">
                    <Link to="/" className='hover:text-darkGrayishBlue'>Acceuil</Link>
                    <Link to="/courses" className='hover:text-darkGrayishBlue'>Nos formations</Link>
                    <Link to="/about" className='hover:text-darkGrayishBlue'>Découvrir Twinkl</Link>
                </div>
                {/* Button */}
                {/* <a href="#" className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block ">Rejoins-nous</a> */}

                {/* Hamburger Icon */}
                <button id="menu-btn" onClick={() => { setIsOpen(!isOpen) }} className={`${isOpen && 'open'} block hamburger md:hidden focus:outline-none`}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <div id="menu" className={`absolute ${isOpen ? 'flex' : 'hidden'} flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                    <Link to="/" className='hover:text-darkGrayishBlue'>Acceuil</Link>
                    <Link to="/courses" className='hover:text-darkGrayishBlue'>Nos formations</Link>
                    <Link to="/about" className='hover:text-darkGrayishBlue'>Découvrir Twinkl</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar