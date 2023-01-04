import Image from "next/image"
import bg from "../Images/button_star_bg.png"
import {motion} from "framer-motion"

type Props = {
    title:string,
    className?:string,
}

const StarButton = (props: Props) => {
  return (
    <>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`relative overflow-hidden rounded-lg text-white ${props.className}`}>
      <div className='flex justify-center'>
        <div className=' relative z-[1] text-white bold text-sm'>{props.title}</div>
      </div>
        <Image
           src={bg}
           alt="Mountains sunset"
           fill
           placeholder='blur'
       />
        </motion.button>
    </>
  )
}

export default StarButton