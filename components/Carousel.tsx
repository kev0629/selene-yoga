import { useCarousel } from "../hooks/useCarousel";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Carousel = (props: Props) => {
  const [carousel, width, scroll, setScroll] = useCarousel();

  const toggleNext: Function = () => {
    if (carousel.current.scrollWidth != carousel.current.offsetWidth) {
      setScroll((x) => x - 100);
    }
  };

  const togglePrevious: Function = () => {
    if (carousel.current.scrollWidth < 824) {
      setScroll((x) => x + 100);
    }
  };
  return (
    <div className="flex flex-row justify-center items-center h-48">
      <button
        className="pointer-events-auto mr-2"
        onClick={() => togglePrevious()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <motion.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden "
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex flex-row "
          animate={{ x: scroll }}
        >
          {props.children}
        </motion.div>
      </motion.div>
      <button
        className=" ml-2 pointer-events-auto"
        onClick={() => toggleNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
