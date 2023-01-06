import {useState, useRef, useEffect, MutableRefObject} from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"
 

type Props = {}

const Navbar = ({}: Props) => {
 const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
 const burgerButton = useRef(null);

 const handleNavbar = () =>{

  setNavbarOpen(!navbarOpen)
 }

  return (
    <>
      <nav className="fixed z-[10] flex flex-wrap items-center justify-between drop-shadow-lg px-2 py-3 bg-gradient-to-b from-selene-green to-selene-green-dark">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <a
              className="text-3xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              href="#pablo"
            >
              <div className='font-serif'>Séléné yoga</div>
              <div className='pl-20 text-xs'>by florian Ponte</div>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              ref={burgerButton}
              onClick={handleNavbar}
            >
              {!navbarOpen ? (
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <motion.div
            // className={`md:flex flex-grow items-center${
            //   navbarOpen ? ' flex' : ' hidden'
            // }`}
            className="md:flex flex-grow items-center overflow-hidden"
            initial = {{height:0, opacity:0}}
            animate={navbarOpen ? { display: 'flex',opacity:1,height:'auto',transition:{duration:0.3}} : {opacity:0,transition:{duration:0.3}}}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                <li className="nav-item">
                  <Link  href="/#home"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  href="/#yogastro"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"

                  >
                    <span className="ml-2">Yogastrologie</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  href="/#actu"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Acualité - Évènements</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  href="/#news"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Articles</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  href="/#health"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Les soins</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  href="/#practices"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Les pratiques</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  href="/#contact"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Contacts</span>
                  </Link>
                </li>
            </ul>
          </motion.div>
        </div>
      </nav>
      <div className='h-[105px]'></div>
    </>
  )
}

export default Navbar