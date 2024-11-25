import gsap from 'gsap';
import { FC, useEffect } from 'react';
import decorator from '../assets/decorator.png';
import HeroTokenomics from "../components/HeroTokenomics";

const Tokenomics: FC = () => {
  // animation for decorator image
  useEffect(()=>{
    gsap.to(".decorator-img",{
      x: "-50%", 
      ease: "linear",
      duration: 5, 
      repeat: -1,
    });
  },[])
  return (
    <div className='relative'>
      <div className="absolute inset-0 bg-[#1F1129]">
      </div>
      <div className='flex'>
      <img
            src={decorator}
            alt="Decorator Image"
            className="decorator-img h-full w-full object-cover relative z-10"
            
      />
      <img
            src={decorator}
            alt="Decorator Image"
            className="decorator-img h-full w-full object-cover relative z-10 scale-x-[-1]"
            
      />
      </div>
      
      <div className='relative z-10'>
        <h1 className="font-climate text-white text-4xl lg:text-5xl text-center mt-8 mb-4">TOKENOMICS</h1>
        <HeroTokenomics/>
        <div className='flex'>
          <img
                src={decorator}
                alt="Decorator Image"
                className="decorator-img h-full w-full object-cover"   
          />
          <img
              src={decorator}
              alt="Decorator Image"
              className="decorator-img h-full w-full object-cover relative z-10 scale-x-[-1]"
              
          />
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
