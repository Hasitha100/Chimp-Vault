import { FC } from "react"

interface BuyProps{
    title: string,
    para: string
}
const BuyPoint: FC<BuyProps> = ({title, para}) => {
  return (
    <div className="flex flex-col text-center items-center text-white mb-12 mx-12">
        <div className='flex flex-row space-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="url(#gradient)" strokeWidth="3">
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#B042F8" />
                        <stop offset="100%" stopColor="#B82DF5" />
                    </linearGradient>
                </defs>
                <path d="M12 .587l3.668 7.429 8.2 1.2-5.934 5.787 1.4 8.164L12 18.896l-7.334 3.871 1.4-8.164L.167 9.216l8.2-1.2L12 .587z"/>
            </svg>
            <h2 className="font-climate text-2xl lg:text-3xl mb-4">{title}</h2>
        </div>
        <p className="font-gugi lg:text-xl">{para}</p> 
    </div>
  )
}

export default BuyPoint
