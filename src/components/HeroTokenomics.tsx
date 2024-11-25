import { FC } from 'react';
import tokenImg from '../assets/tokenomic.png';
const HeroTokenomics : FC = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mx-24'>
        <div className="flex flex-col justify-center items-center font-climate mb-4">
            <h2 className="text-purple-500 text-2xl lg:text-3xl">Liquidity</h2>
            <h1 className="text-white text-3xl lg:text-4xl">Burnt</h1>
        </div>
        <div className="hidden lg:block lg:h-32 lg:border-2 lg:border-purple-500"></div>
        <div className="flex flex-col text-2xl lg:text-12xl justify-center items-center font-climate mb-4">
            <h2 className="text-purple-500 text-2xl lg:text-3xl">Buy Tax</h2>
            <h1 className="text-white text-3xl lg:text-4xl">0%</h1>
        </div>
        <div className="hidden lg:block lg:h-32 lg:border-2 lg:border-purple-500"></div>
        <div className="flex flex-col text-2xl lg:text-12xl justify-center items-center font-climate mb-4">
            <h2 className="text-purple-500 text-2xl lg:text-3xl">Sell Tax</h2>
            <h1 className="text-white text-3xl lg:text-4xl">0%</h1>
        </div>
        
        <div className='flex flex-col items-center mb-4 order-last lg:order-first'>
            <img
                src={tokenImg}
                alt="Token Image"
                // className="h-48 w-36 sm:h-48 sm:w-36 md:h-64 md:w-48 lg:h-80 lg:w-64 xl:h-64 xl:w-64 object-cover"
                className="h-192 w-64 object-cover"
            />
        </div>
    </div>
  )
}

export default HeroTokenomics
