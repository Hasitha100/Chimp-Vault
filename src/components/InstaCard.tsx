import { FC } from "react";

const InstaCard: FC = () => {
    return (
        <div className="max-w-sm mx-2 mb-4 w-full rounded-lg shadow-md bg-black p-4 sm:max-w-md lg:max-w-lg
        lg:transition-transform lg:transform lg:hover:scale-110 lg:duration-300">
          <div className="flex items-center font-gugi justify-between mb-3">
            <div className="flex flex-row items-center space-x-4">
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                <div>
                  <p className="text-lg text-white"> Chimp Vault</p>
                </div>
            </div>
            <button className="bg-black px-4 py-2 text-white rounded-2xl">
              ...
            </button>
          </div>
    
          <div className="bg-gray-100  p-32">
                
          </div>

          <div className="flex items-center justify-between text-gray-400 text-sm mb-4 font-gugi">
            <p>9:41 PM · Jun 8, 2024</p>
          </div>

          <div className="flex space-x-3 mb-4 font-gugi">
              <p className="text-gray-500 cursor-pointer hover:underline">32 ❤️</p>
              <p className="text-gray-500 cursor-pointer hover:underline">Reply</p>
              <p className="text-gray-500 cursor-pointer hover:underline">Copy link</p>
          </div>
          
          <button className="text-blue-600 border border-gray-400 mx-auto w-full rounded-lg font-gugi">Read 5 replies</button>
          
        </div>
    );
}

export default InstaCard
