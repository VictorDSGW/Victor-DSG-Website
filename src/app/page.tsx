"use client"

import { About } from "@/app/layout/About";
import { Achievements } from "@/app/layout/Achievements";
import { Contact } from "@/app/layout/Contact";
import { Footer } from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import { Home } from "@/app/layout/Home";
import { Projects } from "@/app/layout/Projects";
import { Skills } from "@/app/layout/Skills";

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
