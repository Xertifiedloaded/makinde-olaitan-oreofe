import React, { useState, useEffect } from "react"
import { Link, animateScroll } from "react-scroll"
import {
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaFacebookSquare,
  FaYoutube,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa"
import { BsMoon, BsSun } from "react-icons/bs"
import { links } from "../../../Data"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)
  const [theme, setTheme] = useState("light")

  const scrollTop = () => {
    animateScroll.scrollToTop()
  }

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNav)
      return () => {
        window.removeEventListener("scroll", changeNav)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.classList.toggle("no-scroll", showMenu)
    }
  }, [showMenu])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userTheme = localStorage.getItem("theme")
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      if (userTheme === "dark" || (!userTheme && systemTheme)) {
        setTheme("dark")
      }
    }
  }, [])

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
        setTheme("light")
      } else {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
        setTheme("dark")
      }
    }
  }

  return (
    <header
      className={`fixed top-0 w-full p-4 md:p-6  z-[100] transition-transform duration-700 ${
        scrollNav ? "bg-white dark:bg-black shadow-lg" : ""
      } ${!scrollNav ? "header-animation" : ""}`}
    >
      <nav className="flex justify-between items-center  ">
        <Link
          to="/"
          onClick={scrollTop}
          className="text-largest md:text-2xl capitalize tracking-wider dark:text-white text-black"
        >
          Olaitan
        </Link>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full z-20 transition-all duration-700 ${
            showMenu ? "w-64 md:w-80" : "w-0"
          } bg-white dark:bg-black overflow-hidden`}
        >
          <div className="p-10 md:p-20">
            <ul className="mb-6 md:mb-10">
              {links.map(({ name, path }, index) => (
                <li className="mb-4 md:mb-5" key={index}>
                  <Link
                    className="text-base md:text-lg font-bold cursor-pointer transition-colors duration-300 dark:text-white text-black hover:text-green-500"
                    to={path}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 md:gap-5 mb-6 md:mb-10">
              {[
                FaTwitter,
                FaFacebookSquare,
                FaGithub,
                FaInstagram,
                FaTelegram,
                FaYoutube,
                FaEnvelope,
              ].map((Icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-xl md:text-2xl transition duration-75 ease-in-out hover:text-green-500 dark:text-white dark:hover:text-green-500"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-10">
          <div className="text-black dark:text-white">
            {theme === "dark" ? (
              <BsSun className="cursor-pointer w-5 h-5" onClick={toggleTheme} />
            ) : (
              <BsMoon
                className="cursor-pointer w-5 h-5"
                onClick={toggleTheme}
              />
            )}
          </div>

          <div
            className="relative z-[100] cursor-pointer w-6 md:w-7 h-5 md:h-6"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span
              className={`absolute left-0 w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ${
                showMenu
                  ? "rotate-45 top-[12px] md:top-[14px]"
                  : "top-1 md:top-2"
              }`}
            ></span>
            <span
              className={`absolute left-0 w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ${
                showMenu
                  ? "-rotate-45 top-[12px] md:top-[14px]"
                  : "bottom-1 md:bottom-2"
              }`}
            ></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
