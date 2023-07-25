import { motion } from "framer-motion";
import Image from "next/image";
import StarButton from "./StarButton";
import Link from "next/link";

import img1 from "../Images/moutain_stars_lake.png";
import img2 from "../Images/mountain_sunset.jpg";

type Props = {};

type CardProps = {
  title: string;
  img?: any;
  href?: any;
};

const CaresCard = (props: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative h-32 w-72 lg:w-[32rem] lg:h-48 flex flex-col justify-center center-content rounded-xl overflow-hidden md:h-40 md:w-96  "
    >
      <div className="flex flex-col justify-center space-y-2 center-content">
        <div>
          <p className=" relative z-[1] text-white bold text-base md:text-xl lg:text-2xl">
            {props.title}
          </p>
        </div>
        <div>
          <Link href={props.href}>
            <StarButton
              title="En savoir plus"
              className="px-3 py-1 mt-4 z-[1] border broder-white"
            />
          </Link>
        </div>
      </div>
      <Image src={props.img} alt="Mountains sunset" fill placeholder="blur" />
    </motion.div>
  );
};

const Soins = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-around content-center items-center uppercase text-center h-96 md:flex-row md:h-72">
        <CaresCard
          title={"Consultations individuelles"}
          img={img1}
          href="/Consultations"
        />
        <CaresCard
          title={"Rencontres Colectives"}
          img={img2}
          href="/Rencontres"
        />
      </div>
    </>
  );
};

export default Soins;
