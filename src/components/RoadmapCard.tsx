import { FC } from 'react';
import locationImg from '../assets/location.png';

interface RoadmapProps {
    headerNo: string,
    para: string
}
const RoadmapCard: FC <RoadmapProps> = ({headerNo, para}) => {
  return (
    <div className="flex justify-center items-center p-4">                  
        <div className="bg-[#B23EF8] p-2 rounded-2xl shadow-xl text-white lg:w-72 lg:h-54">
            <div className="flex flex-row justify-between">
                <h2 className="font-climate text-2xl lg:text-3xl mb-2">{headerNo}</h2>
                <img
                    src={locationImg}
                    alt="Location"
                    className="h-6 w-4 sm:h-10 sm:w-8 md:h-12 md:w-10 lg:h-12 lg:w-10 xl:h-12 xl:w-10 object-cover"
                />
            </div>
            <p className="font-gugi lg:text-3xl">{para}</p>
        </div>
    </div>
  )
}

export default RoadmapCard
