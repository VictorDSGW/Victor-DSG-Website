"use client"

import { About } from "./layout/About";
import { Achievements } from "./layout/Achievements";
import { Contact } from "./layout/Contact";
import { Footer } from "./layout/Footer";
import Header from "./layout/Header";
import { Home } from "./layout/Home";
import { Projects } from "./layout/Projects";
import { Skills } from "./layout/Skills";

export default function Page() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
