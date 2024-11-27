import gsap from 'gsap';
import { FC, useEffect } from 'react';
import decorate from '../assets/decorate.png';
import decorateBack from '../assets/decoratorBack.png';
import HeroTokenomics from "../components/HeroTokenomics";
const Tokenomics: FC = () => {

  // animation for decorator image which used at top and bottom of page
  useEffect(()=>{
    gsap.to(".decorator-img",{
      x: "-10%", 
      ease: "linear",
      duration: 1, 
      repeat: -1,
    });
  },[])
  return (
    <div className='relative'>
      <div className="absolute inset-0 bg-[#1F1129]">
      </div>
      <div className='relative'>
        <img
              src={decorateBack}
              alt="Decorator Background"
              className="h-full w-full object-cover relative z-10"
              
        />
        <img
              src={decorate}
              alt="Decorator Image"
              className="decorator-img h-full w-full object-cover absolute top-0 z-30"
              
        />
      </div>
      
      <div className='relative z-10'>
        <h1 className="font-climate text-white text-4xl lg:text-5xl text-center mt-8 mb-4">TOKENOMICS</h1>
        <HeroTokenomics/>
        <div className='relative'>
        <img
              src={decorateBack}
              alt="Decorator Background"
              className="h-full w-full object-cover relative z-10"
              
        />
        <img
              src={decorate}
              alt="Decorator Image"
              className="decorator-img h-full w-full object-cover absolute top-0 z-30"
              
        />
      </div>
      </div>
    </div>
  )
}

export default Tokenomics
