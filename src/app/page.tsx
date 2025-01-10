"use client"

import { About } from "./layout/About";
import { Certificates } from "./layout/Certificates";
import { Contact } from "./layout/Contact";
// import { useState, useEffect } from 'react'
import Header from "./layout/Header";
import { Home } from "./layout/Home";
import { Projects } from "./layout/Projects";
import { Skills } from "./layout/Skills";

export default function Page() {
  // const [isClient, setIsClient] = useState(false)
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  {/* return <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1></> */}

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}
