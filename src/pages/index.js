import Head from "next/head"
import React from "react"
import Home from "@/components/Home/Home"

import Services from "@/components/Services/Services"
import Skills from "@/components/Skills/Skills"
import Blog from "@/components/Blog/Blog"
import Contact from "@/components/Contact/Contact"

import Resume from "@/components/Resume/Resume"
import Projects from "@/components/Projects/Projects"
import Header from "@/components/Header/Header"
export default function Landing() {
  return (
    <>
      <Head>
        <title>Makinde Olaitan</title>
        <meta
          name="description"
          content="Fullstack Developer Nodejs Express Reactjs Nextjs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Header/>
      <Home />
      <Services />
      <Skills />
      <Resume />
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}
