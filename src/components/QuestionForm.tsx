import { FC } from "react"

const QuestionForm: FC = () => {
  return (
    <div className="">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-2 text-white lg:text-2xl mx-8 mb-6 p-8 border-4 border-[#AD4BFA] rounded-full">
            <p className="font-gugi mb-4"> How do I buy token?</p>
            <button className="bg-[#AD4BFA] uppercase font-climate rounded-lg mx-8 p-2 self-end"> Buy Now</button>
        </div>
        <div className="flex flex-row text-white lg:text-2xl items-center justify-between mx-8 mb-6 p-6  border-4 border-[#AD4BFA] rounded-full">
            <p className="font-gugi ">Is this the original?</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <div className="flex flex-row  bg-[#1F1129] text-white lg:text-2xl items-center justify-between mx-8 mb-6 p-6 rounded-full">
            <p className="font-gugi ">Yes!</p>
        </div>
        <div className="flex flex-row text-white lg:text-2xl items-center justify-between mx-8 mb-12 p-6  border-4 border-[#AD4BFA] rounded-full">
            <p className="font-gugi ">Which Blockchain?</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </div>
  )
}

export default QuestionForm
