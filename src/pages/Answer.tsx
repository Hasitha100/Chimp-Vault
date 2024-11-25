import gsap from 'gsap';
import { FC, useEffect } from 'react';
import decorator from '../assets/decorator.png';
import InstaCard from '../components/InstaCard';
import QuestionForm from "../components/QuestionForm";
import TwitterCard from '../components/TwitterCard';
const Answer: FC = () => {
  useEffect(()=>{
    gsap.to(".decorator-img",{
      x: "-50%", 
      ease: "linear",
      duration: 5, 
      repeat: -1,
    });
    gsap.to(".background-text",{
      x: "-5%", 
      ease: "linear",
      duration: 1,
      repeat: -1,
    });
  },[])
  return (
    <div className="mb-24">
        <div className='relative'>
          {/*Background text */}
          <div className='background-text absolute -top-10 bottom-0 font-climate text-7xl text-white sm:space-y-16 lg:space-y-8 z-0 opacity-5 overflow-hidden'>
              <h2 className='uppercase text-[8vw] lg:text-[5vw] xl:text-[4vw] whitespace-nowrap'>ltChimpVaultChimpVaultChimpvaultC</h2>
              <h2 className='uppercase text-[8vw] lg:text-[5vw] xl:text-[4vw] whitespace-nowrap'>VaultChimpVaultChimpvaultChimpvau</h2>
              <h2 className='uppercase text-[8vw] lg:text-[5vw] xl:text-[4vw] whitespace-nowrap'>ltChimpVaultChimpVaultChimpvaultC</h2>
              <h2 className='uppercase text-[8vw] lg:text-[5vw] xl:text-[4vw] whitespace-nowrap'>VaultChimpVaultChimpvaultChimpvau</h2>
              <h2 className='uppercase text-[8vw] lg:text-[5vw] xl:text-[4vw] whitespace-nowrap'>ltChimpVaultChimpVaultChimpvaultC</h2>
              <h2 className='uppercase text-[8vw] lg:text-[5vw] xl:text-[4vw] whitespace-nowrap'>VaultChimpVaultChimpvaultChimpvau</h2>
          </div>
        

          {/*Question form */}
          <div className='relative z-10'>
          <h1 className="uppercase text-2xl lg:text-5xl text-white font-climate text-center mt-16 mb-8">Give your answer </h1>
          <div className='mb-24'>
            <QuestionForm/>
          </div>
          </div>
        </div>
        
        {/*Post cards */}
        <div className='relative flex flex-col items-center'>
          <div className='z-10 flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-10'>
              <TwitterCard/>
              <InstaCard/>
          </div>
          <div className='flex absolute -top-20'>
            <img
                src={decorator}
                alt="Decorator Image" 
                className="decorator-img w-full transform scale-x-[-1] "
            />
            <img
                src={decorator}
                alt="Decorator Image" 
                className="decorator-img w-full"
            />
          </div>
          <div className='flex absolute -bottom-20'>
          <img
              src={decorator}
              alt="Decorator Image"  
              className="decorator-img w-full transform scale-x-[-1]"
          />
          <img
              src={decorator}
              alt="Decorator Image"  
              className="decorator-img w-full"
          />
          </div>
        </div>

    </div>
  )
}

export default Answer
