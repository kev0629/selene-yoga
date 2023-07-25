import { useRef, useEffect, useState } from "react";

export const useCarousel = (): [
  React.MutableRefObject<any>,
  number,
  number,
  React.Dispatch<React.SetStateAction<number>>
] => {
  const [width, setwidth] = useState<number>(0);
  const carousel = useRef<any>();
  const [scroll, setScroll] = useState<number>(0);
  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 20);
  }, []);
  return [carousel, width, scroll, setScroll];
};
