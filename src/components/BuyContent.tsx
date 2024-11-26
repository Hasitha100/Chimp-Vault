import { FC } from 'react';
import BuyImg from '../assets/Buy.png';
import BuyPoint from './Buy Components/BuyPoint';
const BuyContent : FC = () => {

    return (
        <div className='flex flex-col lg:flex-row justify-center mx-2'>
            <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col lg:flex-row'>
                <BuyPoint title ="Create a wallet" para = "Create a crypto wallet to securely hold your $Talang tokens."/>
                <BuyPoint title ="Buy Some ETH" para = "Purchase some ETH to use in your token exchange."/>  
            </div>
            <div className='flex flex-col lg:flex-row'>
                <BuyPoint title ="Visit Uniswap" para = "Create a crypto wallet to securely hold your $Talang tokens."/>
                <BuyPoint title ="Swap To $Talang" para = "Purchase some ETH to use in your token exchange."/>  
            </div>
            </div>    
            <div className='flex flex-col justify-center items-center mb-4'>
                <img
                    src={BuyImg}
                    alt="Buy Image"
                    className="h-192 w-64 object-cover"
                />
            </div>
        </div>
  )
}

export default BuyContent
