import { FC, useEffect, useState } from "react";
import frontImg from '../assets/ccc.png';

const NavBar: FC = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
    const toggleMenu = (): void =>{
        setIsOpen(!isOpen);
    }

    useEffect(() => {
      const handleScroll = (): void => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div
        className={`sticky top-0 z-50 transition duration-300 lg:rounded-xl ${
          isScrolled ? "bg-purple-900 shadow-lg" : "bg-transparent"
        }`}
        >
        <nav className="p-4 rounded-lg text-white">
            <div className="mx-auto flex justify-between items-center relative">
                
                <div className="relative w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-purple-400 rounded-full flex items-center justify-center">
                    <img
                    src={frontImg}
                    alt="Logo"
                    className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                    />
                </div>
            
                {/* Hamburger Menu Button */}
                <button
                onClick={toggleMenu}
                className="lg:hidden focus:outline-none border-4 border-purple-500 rounded-md p-1"
                aria-label="Toggle Menu"
                >
                    <svg
                        className="h-6 w-6 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div
                className={`${
                    isOpen ? "block" : "hidden"
                } lg:flex lg:items-center lg:space-x-6 absolute top-20 lg:relative top-20 lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-dark-purple lg:bg-transparent z-50`}
                >
                <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-24 text-white text-right font-climate">
                    <li className="hover:bg-purple-700 lg:hover:bg-transparent lg:hover:border-4 border-[#AD4BFA] lg:hover:rounded-full py-2 lg:px-4 ">
                    <a href="#home">HOME</a>
                    </li>
                    <li className="hover:bg-purple-700 lg:hover:bg-transparent lg:hover:border-4 border-[#AD4BFA] lg:hover:rounded-full py-2 lg:px-4">
                    <a href="#answer">ABOUT US</a>
                    </li>
                    <li className="hover:bg-purple-700 lg:hover:bg-transparent lg:hover:border-4 border-[#AD4BFA] lg:hover:rounded-full py-2 lg:px-4">
                    <a href="#tokenomics" className="scroll-smooth">TOKENOMICS</a>
                    </li>
                    <li className="hover:bg-purple-700 lg:hover:bg-transparent lg:hover:border-4 border-[#AD4BFA] lg:hover:rounded-full py-2 lg:px-4">
                    <a href="#buy">HOW TO BUY</a>
                    </li>
                    <li className="hover:bg-purple-700 lg:hover:bg-transparent lg:hover:border-4 border-[#AD4BFA] lg:hover:rounded-full py-2 lg:px-4">
                    <a href="#roadmap">ROAD MAP</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
       </div>
    )
}

export default NavBar
