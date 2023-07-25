import { useState } from "react";

export const useRotate = (
  rotation: number = 180,
  initFront: boolean = true
): [number, boolean, () => void] => {
  const [rotate, setRotate] = useState<number>(0);
  const [front, setFront] = useState<boolean>(initFront);
  const setRotation = () => {
    setRotate(rotate + rotation);
    setFront(!front);
  };

  return [rotate, front, setRotation];
};
