import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FC, useEffect, useRef } from "react";
import largeRoadImg from '../assets/largeLocation.png';
import locationImg from '../assets/location.png';
import RoadImg from '../assets/road.png';
import RoadMapImg from '../assets/RoadMap.png';
gsap.registerPlugin(ScrollTrigger);

const RoadMap: FC = () => {
    const headerRef = useRef(null); // Reference for the header
    const sectionRef = useRef(null); // Reference for the container

    useEffect(() => {
        const header = headerRef.current;
        // Animate the roadmap header
        gsap.fromTo(
        header,
        { y: "-100%", rotation: -90, opacity: 0 }, // Start above 
        {
            y: "0%", // Final position
            rotation: 14400, 
            opacity: 1, 
            ease: "power2.out", // Smooth ease
            scrollTrigger: {
            trigger: sectionRef.current, // Trigger when this section enters the viewport
            start: "top bottom", // Start when section's top enters the bottom of the viewport
            end: "top center", 
            scrub: 1, 
            },
        }
        );

        // Animate the roadmap items
        gsap.fromTo(
          ".scroll-item",
          { y: 50, opacity: 0 }, // Initial 
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
            stagger: 0.5, 
            scrollTrigger: {
              trigger: ".roadmap-container", // Trigger animation when this container enters the viewport
              start: "top 20%", // when the top of container reaches 20% of the viewport height
              end: "top 80%", 
              toggleActions: "play none none none", // Plays the animation once
            },
          }
        );
      }, []);
    
  
    return (
    <div>
        <div className='flex flex-col justify-center items-center mb-4 relative lg:hidden' ref={sectionRef}>
            <img
                src={RoadMapImg}
                alt="RoadMap Intro Image"
                className="h-192 w-64 object-cover"
            />
            <h1 className="absolute text-white font-climate text-3xl md:text-4xl lg:text-5xl" ref={headerRef}>
                Road Map
            </h1>
        </div>
        

        <div className="relative  roadmap-container">
        
            <img
                src={RoadImg}
                alt="Road Image"
                className="w-full h-full lg:hidden xl:hidden object-cover"
            />
            <img
                src={largeRoadImg}
                alt="Large Road Image"
                className="hidden lg:block xl:block object-cover"
            />
            {/* <div className="absolute top-14 p-6 flex flex-col space-y-20"> */}
            
            {/* RoadMap items */}
            <div className="w-full h-full">
                <div className="absolute sm:top-0 sm:left-1/2 sm:transform  translate-y-1/4 lg:top-1/2 lg:left-1/4 lg:transform -translate-x-3/4 scroll-item">
                    <div className="flex justify-center items-center p-4">                  
                        <div className="bg-[#B23EF8] p-2 rounded-2xl shadow-xl text-white lg:w-72 lg:h-54">
                            <div className="flex flex-row justify-between">
                                <h2 className="font-climate text-2xl lg:text-3xl mb-2">01</h2>
                                <img
                                    src={locationImg}
                                    alt="Location"
                                    className="h-6 w-4 sm:h-10 sm:w-8 md:h-12 md:w-10 lg:h-12 lg:w-10 xl:h-12 xl:w-10 object-cover"
                                />
                            </div>
                            <p className="font-gugi lg:text-3xl">Research, define token utility, ecosystem, and market strategy development.</p>
                        </div>
                    </div>
                </div>

                <div className="absolute sm:top-1/4 sm:left-1/2 sm:transform translate-y-1/2  lg:top-0 lg:left-1/4 lg:transform -translate-x-1/2 -translate-y-3/4 scroll-item">
                    <div className="flex justify-center items-center ">              
                        <div className="bg-[#B23EF8] p-2 rounded-2xl shadow-xl text-white lg:w-72 lg:h-54">
                            <div className="flex flex-row justify-between">
                                <h2 className="font-climate text-2xl lg:text-3xl mb-2">02</h2>
                                <img
                                    src={locationImg}
                                    alt="Location"
                                    className="h-6 w-4 sm:h-10 sm:w-8 md:h-12 md:w-10 lg:h-12 lg:w-10 xl:h-12 xl:w-10 object-cover"
                                />
                            </div>
                            <p className="font-gugi lg:text-3xl">Create, audit, and deploy smart contract for secure token launch.</p>
                        </div>
                    </div>
                </div>

                <div className="absolute sm:top-1/2 sm:left-1/2 sm:transform translate-y-1/4 lg:top-0 lg:left-3/4 lg:transform -translate-x-1/4 -translate-y-1/2 scroll-item">
                    <div className="flex justify-center items-center p-4">                
                        <div className="bg-[#B23EF8] p-2 rounded-2xl shadow-xl text-white lg:w-72 lg:h-54">
                            <div className="flex flex-row justify-between">
                                <h2 className="font-climate text-2xl lg:text-3xl mb-2">03</h2>
                                <img
                                    src={locationImg}
                                    alt="Location"
                                    className="h-6 w-4 sm:h-10 sm:w-8 md:h-12 md:w-10 lg:h-12 lg:w-10 xl:h-12 xl:w-10 object-cover"
                                />
                            </div>
                            <p className="font-gugi lg:text-3xl">Build partnerships, promote platform, engage community through incentives.</p>
                        </div>
                    </div>
                </div>

                <div className="absolute sm:top-3/4 sm:left-1/2 sm:transform translate-y-1/4 lg:top-1/2 lg:left-3/4 lg:transform -translate-x-1/4 -translate-y-3/4 scroll-item">
                    <div className="flex justify-center items-center p-4">
                        <div className="bg-[#B23EF8] p-2 rounded-2xl shadow-xl text-white lg:w-72 lg:h-54">
                            <div className="flex flex-row justify-between">
                                <h2 className="font-climate text-2xl lg:text-3xl mb-2">04</h2>
                                <img
                                    src={locationImg}
                                    alt="Location"
                                    className="h-6 w-4 sm:h-10 sm:w-8 md:h-12 md:w-10 lg:h-12 lg:w-10 xl:h-12 xl:w-10 object-cover"
                                />
                            </div>
                            <p className="font-gugi lg:text-3xl">Integrate tokens with decentralized applications, drive adoption, scale ecosystem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4' ref={sectionRef}>
                    <div className='relative hidden lg:block'>
                        <img
                            src={RoadMapImg}
                            alt="RoadMap Intro Image"
                            className="h-128 w-128 object-cover"
                        />
                        <h1 ref={headerRef} className="absolute inset-0 flex items-center justify-center text-white font-climate text-3xl md:text-4xl lg:text-6xl ">
                            Road Map
                        </h1>
                    </div>
            </div>
            
        </div>

    </div>
  )
}

export default RoadMap
