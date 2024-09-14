import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import Image from "next/image"

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
})
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import profileImage from "../../../public/xertifiedloaded.jpeg"

import {
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaFacebookSquare,
  FaYoutube,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa"
import { useResource } from "@/lib/useApiResources"

export default function Home() {
  const transition = { duration: 3, type: "spring" }
  const [loading, setLoading] = useState(true)
  const [formattedPostLength, setFormattedPostLength] = useState("00")
  const { data: project } = useResource("/api/project/project")

  useEffect(() => {
    if (project) {
      const length = project.length
      setFormattedPostLength(length < 10 ? `0${length}` : length.toString())
      setLoading(false)
    }
  }, [project])

  return (
    <section className="flex px-8 sm:px-4 pt-[160px] sm:pt-[200px] lg:pt-[165px] justify-center bg-gradient-180 from-bgColor to-bgColorAlt overflow-x-hidden pb-[180px] sm:pb-[0px] dark:from-bgColorDark dark:to-bgColorDark scrollbar-hide">
      <div className="min-h-screen grid items-center grid-rows-flow-2 xs:gap-20 sm:gap-28 lg:grid-cols-2 3xl:gap-96">
        {/* left side */}
        <div className="relative top-[15%] sm:top-[-8%] p-3 w-full text-white grid gird-rows-flow-6 gap-2 order-2 lg:order-1">
          <p className="uppercase tracking-[0.05em] leading-[1.7] font-[700] text-titleColor dark:text-textColorDark flex items-center justify-center sm:justify-start">
            Hello,
            <span className="text-large block text-primaryColor">
              &nbsp;My Name Is
            </span>
          </p>

          <h1 className="uppercase tracking-[0.05em] text-h2Size sm:text-[70px] font-[700] flex sm:items-start justify-center items-center drop-shadow-textShadow leading-[1.2] mt-[15px] flex-col gap-2 sm:gap-0">
            <span className="text-primaryColor">
              Makinde&nbsp;&nbsp;0.&nbsp;
            </span>
            <span>Olaitan</span>
          </h1>

          <p className="font-[700] leading-[1.7] flex items-center justify-center sm:justify-start">
            <span className="text-small tracking-[0.05em] uppercase text-titleColor dark:text-textColorDark">
              I am
            </span>
            <b className="font-[Caveat] text-h2Size ml-[10px] text-titleColor dark:text-titleColorDark">
              Frontend Developer
            </b>
          </p>

          <p className="text-large max-w-[520px] my-[40px] leading-[1.7] text-textColor dark:text-textColorDark font-[Comfortaa] font-[700] flex items-center text-center sm:text-left">
            From Nigeria, Abeokuta. I have rich experience in web development,
            also good at backend stuff. I love to talk with you about our
            unique.
          </p>

          <div className="flex gap-[20px] mb-[30px] justify-center sm:justify-start">
            <a
              href="https://x.com/xertifiedloaded?s=21&t=4afhWqzJQffsZTnO1q85ig"
              className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://github.com/Xertifiedloaded"
              className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce"
            >
              <FaTelegram />
            </a>
            <a
              href="#"
              className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="flex gap-[70px] font-[700] uppercase tracking-[0.05em] items-center justify-center mx-[-40px] sm:mx-0 sm:justify-start">
            <a
              href="https://docs.google.com/document/d/1pD7UK1_kmFaC6l9MX99MtNN8gYfNSzYDUFn8wwg-64c/edit?usp=sharing"
              // download="ResumeOfImanKhaki.pdf"
              target="_blank"
              className='text-titleColor dark:text-titleColorDark text-tiny grid place-items-center border-[2px] border-solid border-borderColor dark:border-borderColorDark p-[20px] rounded-[56px] shadow-[5px_5px_rgba(0,0,0,0.2)] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] relative before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[0] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
            >
              <span className="z-[1]">Download CV</span>
            </a>
            <Link
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className='cursor-pointer text-titleColor dark:text-titleColorDark text-tiny grid place-items-center p-[20px] relative before:content-[""] before:absolute before:top-[50%] before:left-[-62%] before:translate-y-[-50%] before:w-[40px] before:h-[2px] before:bg-borderColor dark:before:bg-borderColorDark hover:text-primaryColor dark:hover:text-primaryColor '
            >
              My Skills
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="relative top-0 right-0 sm:translate-y-[-9%] rounded-full bg-primaryColor w-full max-w-[680px] lg:order-2">
          <div className="relative bg-gradient-180 from-[#33cca3] via-[#00ffbb] to-[#6bff6b] z-[1] pb-[100%] rounded-full">
            <motion.div
              initial={{ bottom: "50px" }}
              whileInView={{ bottom: "-1px" }}
              transition={transition}
              className="absolute inset-0"
            >
              <Image
                src={profileImage}
                alt="HeroImg"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </motion.div>
          </div>

          <div className="uppercase absolute bottom-[-23%] left-[-5%] sm:bottom-[20%] sm:left-[2%] border-[3px] border-solid border-borderColor bg-containerColor sm:shadow-[5px_5px_rgba(0,0,0,0.2)] dark:sm:shadow-[5px_5px_rgba(0,0,0,0.3)] shadow-[5px_5px_rgba(0,0,0,0.3)] dark:shadow-[5px_5px_rgba(255,255,255,0.3)] px-[5px] xs:px-[10px] sm:px-[20px] xs:w-[165px] w-[145px] sm:w-[250px] sm:h-[82px] rounded-[82px] flex items-center z-[1]">
            <span className="w-[50%] text-titleColor font-[700] text-center text-[30px] sm:text-[40px] flex items-center gap-2">
              <AnimatedNumbers
                animateToNumber="2"
                locale="en"
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              />
              <b className="text-primaryColor sm:text-[40px] relative top-[-1px] left-[-2px]">
                +
              </b>
            </span>

            <span className="ml-[10px] sm:ml-0 text-[10px] sm:text-[15px] leading-[1.5em] font-[700] text-titleColor">
              Years of <span className="text-primaryColor">Experience</span>
            </span>
          </div>
          <div className="uppercase absolute bottom-[-23%] right-[-4%] sm:bottom-[12%] sm:right-[6%] lg:bottom-[5%] border-[3px] border-solid border-borderColor bg-containerColor sm:shadow-[5px_5px_rgba(0,0,0,0.2)] dark:sm:shadow-[5px_5px_rgba(0,0,0,0.3)] shadow-[5px_5px_rgba(0,0,0,0.3)] dark:shadow-[5px_5px_rgba(255,255,255,0.3)] px-[5px] xs:px-[10px] sm:px-[20px] xs:w-[165px] w-[140px] sm:w-[250px] sm:h-[82px] rounded-[82px] flex items-center z-[1]">
            <span className="w-[50%] text-titleColor font-[700] text-center text-[30px] sm:text-[40px]">
              {loading ? (
               <div className="spinner"></div>
              ) : (
                <AnimatedNumbers
                  animateToNumber={parseInt(formattedPostLength, 10)}
                  locale="en"
                  configs={[{ mass: 1, tension: 170, friction: 26 }]}
                />
              )}
            </span>

            <span className="ml-[10px] sm:ml-0 text-[10px] sm:text-[15px] leading-[1.5em] font-[700] text-titleColor">
              <span className="text-primaryColor">Projects</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
