import Circle from './Circle';
import { useState } from "react"
import {motion} from "framer-motion"
import reverse_triangle from "../Images/reverse_triangle.svg"

type Props = {
    handleStory : boolean
    setHandleStory : any,
}



const Contact = (props: Props) => {
  return (
    <>
    <div className="flex justify-center flex-col h-max">
        
        <div className="flex justify-center mt-10">
            
            <div className="bg-gradient-to-b relative text-black w-64 via-[#C0CCCE]/75 from-[#C0CCCE]/75 border pb-10 rounded-xl block text-center">
                {/* <div className="absolute bottom-24 z-10 left-[-120px]">
                        <Circle/>
                </div> */}
                <div className="text-xl">Florian Ponte</div>
                <div className="text-lg">florian.ponte@gmail.com</div>
                <div className="text-lg">06.23.27.12.40</div>
            </div>
        </div>
        <div className="flex justify-center m-10">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="rounded-md p-1 text-white text-base border-[1px] bg-gradient-to-b mt-10 from-[#C0CCCE] border-white" onClick={() => props.setHandleStory(!props.handleStory)}>
                <div className="inline">
                    <p className="inline mx-1">Mon histoire </p>
                        <svg className="inline" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8971 0.4783C17.8207 0.334136 17.7061 0.213393 17.5656 0.129101C17.425 0.0448096 17.2639 0.000169805 17.0997 0H0.898159C0.734203 0.000671413 0.573533 0.0456407 0.433428 0.130072C0.293323 0.214503 0.179085 0.335201 0.102997 0.479186C0.0269091 0.623171 -0.0081486 0.784996 0.00159387 0.947258C0.0113363 1.10952 0.0655103 1.26608 0.15829 1.4001L8.25904 13.0007C8.34162 13.1196 8.45211 13.2168 8.58099 13.2839C8.70988 13.3511 8.8533 13.3862 8.99891 13.3862C9.14452 13.3862 9.28794 13.3511 9.41683 13.2839C9.54572 13.2168 9.65621 13.1196 9.73878 13.0007L17.8395 1.4001C17.9332 1.26635 17.9881 1.1097 17.9983 0.947181C18.0084 0.784659 17.9735 0.622487 17.8971 0.4783ZM8.99891 10.925L2.61552 1.7847H15.3823L8.99891 10.925Z" fill="white"/>
                        </svg>
                </div>
            </motion.button>
        </div>
        
    </div> 
    </>
  )
}

export default Contact