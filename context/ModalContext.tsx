import { createContext, Dispatch, SetStateAction } from "react";

type ModalContextType = {
  mainModalIsOpen: boolean;
  setMainModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | null>(null);

export {ModalContext};
