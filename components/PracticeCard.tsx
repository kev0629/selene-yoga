import { useState } from "react";
import Image,{StaticImageData} from "next/image";
import {motion} from "framer-motion"

type CardProps = {
    title:string,
    img:StaticImageData
    rotate?:number
  }

const PracticeCard = (props: CardProps) => {
  const [rotate, setRotate] = useState<number>(0);
  const [front, setFront] = useState<boolean>(true);

  const rotateCard = (rotate: number, front: boolean) => {
    setRotate(rotate + 180);
    setFront(!front);
  };

  return <motion.div onClick={() => rotateCard(rotate, front)} animate={{
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
  