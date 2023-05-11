import '../styles/globals.css'
import { useState } from "react";
import { ModalContext } from '../context/ModalContext';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [mainModalIsOpen, setMainModalIsOpen] = useState(true);
  return (
    <ModalContext.Provider value={{ mainModalIsOpen, setMainModalIsOpen }}>
      <Component {...pageProps} />
    </ModalContext.Provider>
      )
}
