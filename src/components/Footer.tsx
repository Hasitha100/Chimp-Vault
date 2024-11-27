import { FC } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { TbArrowsCross } from "react-icons/tb";
import frontImg from '../assets/ccc.png';
const Footer: FC = () => {
    
    return (
        <>
        <div className="mx-auto mt-6 flex flex-col lg:flex-row lg:mx-24 lg:justify-between justify-between items-center">
            <div className="relative w-20 h-20 mb-4 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-purple-400 rounded-full flex items-center justify-center">
                <img
                src={frontImg}
                alt="Logo"
                className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                />
            </div>
            {/* Icons */}
            <div className="flex justify-center space-x-6 lg:hidden mb-6">
                {/* Cross Arrows Icon */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full">
                    <TbArrowsCross className="text-white text-2xl" />
                </div>
                {/* Telegram Icon */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full">
                    <FaTelegramPlane className="text-white text-2xl" />
                </div>
                {/* X Icon */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full">
                    <FiX className="text-white text-2xl" />
                </div>
            </div>
            <div className='mb-6'>
            <ul className="flex flex-col justify-center items-center lg:flex-row lg:items-center lg:space-x-6 text-white font-climate">
                <li className="hover:bg-gray-700 lg:hover:bg-transparent lg:hover:border-2 border-[#AD4BFA] px-4 py-2 rounded-full">
                <a href="#home">HOME</a>
                </li>
                <li className="hover:bg-gray-700 lg:hover:bg-transparent lg:hover:border-2 border-[#AD4BFA] px-4 py-2 rounded-full">
                <a href="#answer">ABOUT US</a>
                </li>
                <li className="hover:bg-gray-700 lg:hover:bg-transparent lg:hover:border-2 border-[#AD4BFA] px-4 py-2 rounded-full">
                <a href="#tokenomics">TOKENOMICS</a>
                </li>
                <li className="hover:bg-gray-700 lg:hover:bg-transparent lg:hover:border-2 border-[#AD4BFA] px-4 py-2 rounded-full">
                <a href="#buy">HOW TO BUY</a>
                </li>
                <li className="hover:bg-gray-700 lg:hover:bg-transparent lg:hover:border-2 border-[#AD4BFA] px-4 py-2 rounded-full">
                <a href="#roadmap">ROAD MAP</a>
                </li>
            </ul>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center mx-24 font-gugi text-white text-md text-center'>
            <p>@2024 Shibu’z Coin All Right Reserved</p>
            <div className="hidden lg:flex justify-center space-x-6">
                {/* Cross Arrows Icon */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full">
                    <TbArrowsCross className="text-white text-2xl" />
                </div>

                {/* Telegram Icon */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full">
                    <FaTelegramPlane className="text-white text-2xl" />
                </div>

                {/* X Icon */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full">
                    <FiX className="text-white text-2xl" />
                </div>
                </div>
        </div>    
        </>
    )
}

export default Footer
