import Image,{StaticImageData} from "next/image";
import {motion} from "framer-motion"
import { useRotate } from "../hooks/useRotate";

type CardProps = {
    title:string,
    img:StaticImageData
    rotate?:number
  }



const PracticeCard = (props: CardProps) => {
  const [rotate,front,setRotation] = useRotate(180,true)

  return <motion.div onClick={() => setRotation()} animate={{
    rotateX: rotate,
    transition: {
      duration: 0.5
    }
  }} whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.9
  }} className="relative min-w-fit m-2 rounded-xl overflow-hidden shadow-lg">
          <div className='flex justify-center h-28 w-48'>
            {front && <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        transition: {
          duration: 2
        }
      }} className=' relative z-[1] text-white text-base pt-10 '>{props.title}</motion.p>}
            {!front && <motion.p initial={{
        rotateX: 180,
        opacity: 0
      }} animate={{
        opacity: 1,
        transition: {
          duration: 2
        }
      }} className=' relative z-[1] text-white text-center text-xs p-2'>Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.</motion.p>}
          </div>
          <Image src={props.img} alt="Mountains sunset" fill placeholder='blur' />
      </motion.div>;
};

export default PracticeCard
  