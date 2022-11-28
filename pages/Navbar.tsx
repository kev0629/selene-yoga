import {useState} from 'react'
import Link from 'next/link'
 

type Props = {}

function Navbar({}: Props) {
 const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-b from-selene-green to-selene-green-dark mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <a
              className="text-3xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Séléné yoga
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
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
          <div
            className={`md:flex flex-grow items-center${
              navbarOpen ? ' flex' : ' hidden'
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                <li className="nav-item">
                  <Link  href="/"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Facture</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  href="/Prestation"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"

                  >
                    <span className="ml-2">Prestation</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  href="/Client"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Client</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  href="/Config"
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">config</span>
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar