import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav)
    
  return (
    <header className="fixed w-full top-0 bg-black z-10">
    <div className="flex justify-between bg items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="flex text-3xl font-bold uppercase text-deepSkyBlue" >
            <Link to="/">Twinkl.</Link>
        </h1>
        <ul className="hidden md:flex">
            <li className="p-4"><Link to='/courses'>Nos Formations</Link></li>
            <li className="p-4"><Link to='/about'>Découvrir TWINKL</Link></li>
            <li className="p-4"><a href="#">Resources</a></li>

        </ul>

        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        <div className={`block md:hidden ${nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"}`}>
            <h1 className="w-full text-3xl font-bold uppercase text-deepSkyBlue m-4" >Twinkl.</h1>
            <ul className="uppercase">
                <li className="p-4 border-b border-gray-600">Nos Formations</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                
                
            </ul>
        </div>
        
    </div>
    </header>
  )
}

export default Navbar