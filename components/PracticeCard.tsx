import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useRotate } from "./../hooks/useRotate";
import { ReactElement } from "react";

type CardProps = {
  mainTitle: ReactElement;
  img: StaticImageData;
  secondaryTitle?: ReactElement;
  text?: string;
  rotate?: number;
};

const PracticeCard = (props: CardProps) => {
  const [rotate, front, setRotation] = useRotate(180, true);

  return (
    <motion.div
      onClick={() => setRotation()}
      animate={{
        rotateX: rotate,
        transition: {
          duration: 0.5,
        },
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="relative min-w-fit m-2 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="flex flex-col justify-center h-64 w-80">
        {front && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
              className="relative z-[1] text-white text-base leading-5 mb-10"
            >
              {props.mainTitle}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
              className="relative z-[1] text-white text-base leading-5"
            >
              {props.secondaryTitle}
            </motion.div>
          </>
        )}
        {!front && (
          <motion.div
            initial={{
              rotateX: 180,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            className=" relative z-[1] text-white text-center text-sm p-2"
          >
            {props.text}
          </motion.div>
        )}
      </div>
      <Image src={props.img} alt="Mountains sunset" fill placeholder="blur" />
    </motion.div>
  );
};

export default PracticeCard;
