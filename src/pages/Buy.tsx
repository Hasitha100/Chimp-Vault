import { FC } from 'react';
import buyImg from '../assets/buyback.png';
import buyImg1 from '../assets/buyFullBack.png';
import BuyContent from "../components/BuyContent";
const Buy : FC = () => {
  return (
    <div className='relative mt-24'>
        <img
            src={buyImg}
            alt="Buy Image"   
            className="absolute inset-0 z-0 object-cover w-full h-full lg:hidden xl:hidden" 
        />
        <img
            src={buyImg1}
            alt="Buy Image Large"   
            className="hidden absolute inset-0 z-0 object-cover w-full h-192
             lg:block xl:block" 
        />
        <div className="relative z-10">
            <h1 className="font-climate text-white text-4xl lg:text-5xl text-center mb-8">HOW TO BUY</h1>
            <BuyContent/>
        </div>
    </div>
  )
}

export default Buy
