import gsap from 'gsap';
import { FC, useEffect, useRef } from 'react';
import cardImg from '../assets/homeImg.png';
import cardImg2 from '../assets/homeImg2.png';

const Hero: FC = () => {
    const cardImg1Ref = useRef<HTMLImageElement>(null);
    const cardImg2Ref = useRef<HTMLImageElement>(null);
    
    useEffect(()=>{
        
        const timeline = gsap.timeline({ repeat: -1 }); // Infinite loop
        timeline
        // First image (mouth closed) fades in 
        .to(cardImg1Ref.current, {
            opacity: 1,
            scale: 1, 
            duration: 0.6, 
            ease: 'power2.out',
        })
        .to(cardImg1Ref.current, {
            opacity: 0,
            duration: 0.3, // Quick fade out 
            ease: 'power2.in',
        })

        // Second image (mouth open) fades in 
        .to(cardImg2Ref.current, {
            opacity: 1,
            scale: 1.1, 
            duration: 0.6, 
            ease: 'elastic.out(1, 0.3)', // Springy ease 
        })
        .to(cardImg2Ref.current, {
            opacity: 0,
            duration: 0.3, // Quick fade out 
            ease: 'power2.in',
        });

        return () => {timeline.kill(); }// Cleanup on unmount
    },[])
    
    return (
        <>
        <div className="flex flex-col justify-center items-center p-2 mx-2 mb-10 font-climate text-white">
            <h1 className="text-center text-6xl lg:text-10xl mb-6"> CHIMP VAULT</h1>
            <button className="border-4 border-purple-500 px-4 py-2 sm:text-2xl lg:text-3xl rounded-full hover:bg-purple-500 hover:border-white
            transition-transform transform animate-pulse-fast">
                BUY NOW
            </button>
        </div>

        <div className='flex flex-col lg:flex-row lg:space-x-96 lg:mx-64 lg:justify-start'>
            <div className="flex flex-col text-center items-center lg:text-right lg:items-end text-white mb-4 p-2">
                <h1 className="font-climate mb-4 text-3xl lg:text-4xl">
                    WHO IS <span className="text-purple-500"> CHIMP</span>
                </h1>
                <p className="font-gugi lg:text-xl">
                    Chimp is the mischievous and adventurous character at the heart of our crypto token. 
                    As the mascot for the Chimp Token, this playful primate represents agility, intelligence, 
                    and adaptability—qualities that perfectly align with the dynamic nature of the crypto world.
                </p>
            </div>
            <div className="flex flex-col text-center items-center lg:text-left lg:items-start text-white mb-4 p-2">
                <h1 className="font-climate mb-4 text-3xl lg:text-4xl">
                    <span className="text-purple-500">CHIMP'S </span>ORIGIN
                </h1>
                <p className="font-gugi lg:text-xl">
                    Chimp is the mischievous and adventurous character at the heart of our crypto token. 
                    As the mascot for the Chimp Token, this playful primate represents agility, intelligence, 
                    and adaptability—qualities that perfectly align with the dynamic nature of the crypto world.
                </p>
            </div>
            
        </div>
        
        <div className='flex flex-col justify-center items-center lg:-mt-60 relative '>
            <img
                src={cardImg}
                alt="Hero Image"
                className="h-192 w-72 object-cover absolute opacity-0"
                ref={cardImg1Ref}
            />
            <img
                src={cardImg2}
                alt="Hero Image"
                className="h-192 w-72 object-cover opacity-0"
                ref={cardImg2Ref}
            />
        </div>
        </>
    )
}

export default Hero
