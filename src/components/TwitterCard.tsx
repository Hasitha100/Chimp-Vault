import { FC } from "react";

const TwitterCard: FC = () => {
    return (
        <div className="max-w-sm mx-2  mb-4 border rounded-lg shadow-md bg-white p-4 sm:max-w-md lg:max-w-lg
        lg:transition-transform lg:transform lg:hover:scale-110 lg:duration-300">
          
          <div className="flex items-center font-gugi justify-between mb-3">
            <div>
              <h1 className="text-lg ">Post from @Chimp Vault</h1>
            </div>
            <button className="bg-black px-4 py-2 text-white rounded-2xl">
              Follow
            </button>
          </div>
    
          <div className="flex flex-row justify-between mb-4 bg-gray-100 rounded-lg p-4">
                
                <div className="flex flex-col font-gugi">
                    <p>Chimp Vault <span className="text-gray-500">@chimp vault</span> </p>
                    <p>This is not fake news</p>
                </div>
                <button className="text-gray-400 hover:text-red-600">
                    ✖
                </button>
          </div>



          <p className="text-gray-500 mb-3 font-gugi">
            Replying to @AppleSupport
          </p>
          <p className="text-black mb-5 font-gugi ">
            At Chimp Vault, our tokenomics are designed to create a thriving and sustainable ecosystem.
          </p>
    
          
          
          <div className="flex flex-row mb-4 space-x-4 justify-center">
              <button className="hover:text-blue-500">
                <i className="fas fa-reply">↩</i>
              </button>
              <button className="hover:text-blue-500">
                <i className="fas fa-share">✈</i>
              </button>
              <button className="hover:text-blue-500">
                <i className="fas fa-retweet">✖</i>
              </button>
              <button>
                <i className="fas fa-chart-line">📉</i>
              </button>
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
export default TwitterCard
